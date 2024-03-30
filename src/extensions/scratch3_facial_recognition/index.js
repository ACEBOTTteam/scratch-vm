const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');


const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

const TypeData = {
    "OPEND": "打开",
    "CLOSE": "关闭"
}

class Scratch3FacialRecognitionBlocks {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            id: "facialRecognition",
            name: "人脸识别",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openCamera",
                    text: "以弹窗形式[ONE]摄像头",
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
                    opcode: "collectFaceData",
                    text: "从摄像头采集人脸数据标记为[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'person1'
                        }
                    }
                },
                {
                    opcode: "recognizeFaces",
                    text: "识别一次摄像头的人脸",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getFaceResult",
                    text: "人脸识别结果",
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getFaceReliability",
                    text: "人脸识别结果可信度",
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "faceTracking",
                    text: "[ONE]人脸追踪",
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
                    opcode: "initFaceGender",
                    text: "初始化性别识别",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "faceGender",
                    text: "[ONE]识别性别",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'OPEN_CLOSE',
                            defaultValue: 'OPEN'
                        }
                    }
                }
            ],
            menus: {
                OPEN_CLOSE: {
                    acceptReporters: true,
                    items: [
                        {
                            text: "打开",
                            value: "OPEN"
                        },
                        {
                            text: "关闭",
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

    async collectFaceData(args) {
        await this.runtime.vm.emit('keepFace', { name: args.ONE })
    }

    async recognizeFaces() {
        await this.runtime.vm.emit('testFace')
    }

    async initFaceGender() {
        await this.runtime.vm.emit('initFaceGender')
        return 'success'
    }

    faceTracking(args) {
        if ('OPEN' === args.ONE) {
            this.runtime.vm.emit('openFaceTracking')
        } else {
            this.runtime.vm.emit('closeFaceTracking')
        }
    }

    faceGender(args) {
        if ('OPEN' === args.ONE) {
            this.runtime.vm.emit('openFaceGender')
        } else {
            this.runtime.vm.emit('closeFaceGender')
        }
    }

    getFaceResult() {
        let label = null
        this.runtime.vm.emit('getFaceResult', (data) => {
            label = data
        })
        return label
    }

    getFaceReliability() {
        let distance = null
        this.runtime.vm.emit('getFaceReliability', (data) => {
            distance = data
        })
        return distance
    }




}

module.exports = Scratch3FacialRecognitionBlocks