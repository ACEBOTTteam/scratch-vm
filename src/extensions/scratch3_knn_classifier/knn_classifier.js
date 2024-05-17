const mobilenetModule = require('./mobilenet');
const knnClassifier = require('./knn-classifier');
const tf = require('@tensorflow/tfjs')


class KnnClassifiers {
    constructor(runtime, videoEl) {
        this.classifier = null
        this.mobilenet = null
        this.videoEl = videoEl
        this.runtime = runtime
    }

    async knnInit() {
        //设置ts后端
        tf.setBackend('webgl');
        this.classifier = knnClassifier.create();
        this.mobilenet = await mobilenetModule.load();
        console.log('初始化完成')
    }

    knnClassify(label) {
        if (this.classifier) {
            const image = this.getImage()
            //设置张量
            let logits = this.mobilenet.infer(image, 'conv_preds')
            //添加示例
            this.classifier.addExample(logits, label)
            console.log('添加一个示例')
        }
    }

    async knnForecast() {
        if (this.classifier) {
            const image = this.getImage()
            const logits = this.mobilenet.infer(image, 'conv_preds')
            //预测
            const res = await this.classifier.predictClass(logits, 3);
            return res
        }
    }

    clearTag(label) {
        if (this.classifier) {
            try {
                this.classifier.clearClass(label)
            } catch (error) {
                return false
            }
        }
    }

    clearAll() {
        if (this.classifier) {
            this.classifier.clearAllClasses()
        }
    }

    clearClassifier() {
        if (this.classifier) {
            this.classifier.dispose()
        }
    }

    async keepClasses() {
        if (this.classifier) {
            let jsonData = {
                "dataset": {},
                "tensors": []
            }
            //获取添加的示例张量
            const data = this.classifier.getClassifierDataset()
            console.log(data, 'data')
            for (let [key, value] of Object.entries(data)) {
                let item = await value.dataSync()
                //导入json
                jsonData.tensors.push(item)
            }
            jsonData.dataset = JSON.parse(JSON.stringify(data))

            const url = window.URL || window.webkitURL || window;
            const blob = new Blob([JSON.stringify(jsonData)]);
            const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            saveLink.href = url.createObjectURL(blob);
            // 设置 download 属性
            saveLink.download = 'dataset.json';
            saveLink.click();
        }
    }

    loadClasses() {
        const THIS = this
        const inputElement = document.createElement("input");
        inputElement.type = 'file'
        document.body.appendChild(inputElement);
        inputElement.click()
        inputElement.addEventListener("change", () => { this.handleFiles(inputElement, THIS) }, false);

    }

    handleFiles(inputElement, THIS) {
        let data = null
        let selectedFile = inputElement.files[0];//获取读取的File对象
        const reader = new FileReader();
        reader.readAsText(selectedFile);//读取文件的内容

        reader.onload = function () {
            console.log("读取结果：", JSON.parse(this.result));
            data = JSON.parse(this.result)
            const json = {}
            data.tensors.forEach((item, index) => {
                //获取张量数据
                const arr = Object.values(item)
                //创建floatArray
                const tensorsData = new Float32Array(arr);
                //获取laber
                let label = Object.keys(data.dataset)[index]
                let shape = data.dataset[label].shape
                //重新创建张量
                const tensor3D = tf.tensor2d(tensorsData, shape);
                json[label] = tensor3D
            });
            THIS.classifier.setClassifierDataset(json)
        };
        console.log("====", data);
    }

    getImage() {
        return tf.browser.fromPixels(this.videoEl);
    }
}

module.exports = KnnClassifiers