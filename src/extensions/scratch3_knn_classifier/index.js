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
        this.resultPossibility = null
    }

    getInfo() {
        return {
            id: "knnClassifier",
            name: formatMessage({ id: "knn.machine.learning" }),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openCamera",
                    text: formatMessage({ id: 'facial_recognition.camera' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'OPEN_CLOSE',
                            defaultValue: 'OPEN'
                        }
                    }
                },
                {
                    opcode: "init",
                    text: formatMessage({ id: "knn.init" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "classify",
                    text: formatMessage({ id: "knn.classify" }),
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
                    text: formatMessage({ id: "knn.forecast" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "getResult",
                    text: formatMessage({ id: "knn.getResult" }),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getPossibility",
                    text: '识别结果的可能性',
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "clearTag",
                    text: formatMessage({ id: "knn.clearTag" }),
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
                    text: formatMessage({ id: "knn.keepClasses" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "loadClasses",
                    text: formatMessage({ id: "knn.loadClasses" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "clearAll",
                    text: formatMessage({ id: "knn.clearAll" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "clearClassifier",
                    text: formatMessage({ id: "knn.clearClassifier" }),
                    blockType: BlockType.COMMAND,
                },
            ],
            menus: {
                OPEN_CLOSE: {
                    acceptReporters: true,
                    items: [
                        {
                            text: formatMessage({ id: 'open' }),
                            value: "OPEN"
                        },
                        {
                            text: formatMessage({ id: 'close' }),
                            value: "CLOSE"
                        },
                    ]
                }
            }
        }
    }

    openCamera(args) {
        console.log(args)
        if ('OPEN' === args.ONE) {
            this.runtime.vm.emit('openCamera')
        } else {
            this.runtime.vm.emit('closeCamera')
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
        this.resultPossibility = data.confidences[data.label]
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

    getPossibility() {
        return this.resultPossibility
    }

    keepClasses() {
        this.knn.keepClasses()
    }

    loadClasses() {
        this.knn.loadClasses()
    }
}

module.exports = Scratch3KnnClassifier