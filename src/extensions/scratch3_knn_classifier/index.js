const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const KnnClassifiers = require('./knn_classifier.js');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3KnnClassifier {
    constructor(runtime) {
        this.runtime = runtime
        this.knn = new KnnClassifiers(runtime, runtime.getVideoEl())
        this.name = null
    }

    getInfo() {
        return {
            id: "knnClassifier",
            name: "机器学习",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "init",
                    text: "初始化KNN分类器",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "classify",
                    text: "KNN将摄像头画面分类为[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'tag1'
                        }
                    }
                },
                {
                    opcode: "forecast",
                    text: "KNN识别摄像头画面分类",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "getResult",
                    text: "KNN识别分类结果",
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "clearTag",
                    text: "KNN清除分类标签[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'tag1'
                        }
                    }
                },
                {
                    opcode: "keepClasses",
                    text: "KNN保存分类模型",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "loadClasses",
                    text: "KNN加载分类模型",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "clearAll",
                    text: "KNN清除分类模型数据",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "clearClassifier",
                    text: "释放knn分类器",
                    blockType: BlockType.COMMAND,
                },
            ]
        }
    }

    async init() {
        await this.knn.knnInit()
        return 'success'
    }

    classify(args) {
        this.knn.knnClassify(args.ONE)
    }

    async forecast() {
        const data = await this.knn.knnForecast()
        this.name = data.label
        return 'success'
    }

    clearTag(args) {
        this.knn.clearTag(args.ONE)
    }

    clearAll() {
        this.knn.clearAll()
        this.name = null
    }

    clearClassifier() {
        this.knn.clearClassifier()
        this.name = null
    }

    getResult() {
        return this.name
    }

    keepClasses() {
        this.knn.keepClasses()
    }

    loadClasses() {
        this.knn.loadClasses()
    }
}

module.exports = Scratch3KnnClassifier