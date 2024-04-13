const mobilenetModule = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');
const tf = require('@tensorflow/tfjs')


class KnnClassifiers {
    constructor(runtime, videoEl) {
        this.classifier = null
        this.mobilenet = null
        this.videoEl = videoEl
        this.runtime = runtime
    }

    async knnInit() {
        await this.runtime.vm.emit('getIsOpenCamera')
        tf.setBackend('webgl')
        this.classifier = knnClassifier.create();
        this.mobilenet = await mobilenetModule.load();
        console.log('初始化完成')
    }

    knnClassify(label) {
        if (this.classifier) {
            const image = this.getImage()
            let logits = this.mobilenet.infer(image, 'conv_preds')
            console.log(logits,'logits')
            this.classifier.addExample(logits, label)
            console.log('添加一个示例')
        }
    }

    async knnForecast() {
        if (this.classifier) {
            const image = this.getImage()
            const logits = this.mobilenet.infer(image, 'conv_preds')
            const res = await this.classifier.predictClass(logits, 3);
            return res
        }
    }

    clearTag(label) {
        if (this.classifier) {
            this.classifier.clearClass(label)
        }
    }

    clearAll() {
        if (this.classifier) {
            this.classifier.clearAllClasses()
        }
    }

    clearClassifier() {
        this.classifier.dispose()
    }

    keepClasses() {
        const data = this.classifier.getClassifierDataset()
        console.log(data, 'data')
        const url = window.URL || window.webkitURL || window;
        const blob = new Blob([JSON.stringify(data)]);
        const saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
        saveLink.href = url.createObjectURL(blob);
        // 设置 download 属性
        saveLink.download = 'dataset.json';
        saveLink.click();
    }

    loadClasses() {
        const THIS  = this
        const inputElement = document.createElement("input");
        inputElement.type = 'file'
        document.body.appendChild(inputElement);
        inputElement.click()
        inputElement.addEventListener("change", () => { this.handleFiles(inputElement,THIS) }, false);

    }

    handleFiles(inputElement,THIS) {
        let data = null
        let selectedFile = inputElement.files[0];//获取读取的File对象
        const reader = new FileReader();
        reader.readAsText(selectedFile);//读取文件的内容

        reader.onload = function () {
            console.log("读取结果：", JSON.parse(this.result));
            data = JSON.parse(this.result)
            THIS.classifier.setClassifierDataset(data)
        };
        console.log("====", data);
        // this.classifier.setClassifierDataset(data)
    }

    getImage() {
        return tf.browser.fromPixels(this.videoEl);
    }
}

module.exports = KnnClassifiers