const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');


const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3FacialRecognitionBlocks {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            id: "facialRecognition",
            name: formatMessage({id:'facialRecognition'}),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openCamera",
                    text: formatMessage({id:'facial_recognition.camera'}),
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
                    text: formatMessage({id:'facial_recognition.gather'}),
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
                    text: formatMessage({id:'facial_recognition'}),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getFaceResult",
                    text: formatMessage({id:'facial_recognition.getFaceResult'}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getFaceReliability",
                    text: formatMessage({id:'facial_recognition.getFaceReliability'}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "faceTracking",
                    text: formatMessage({id:'facial_recognition.faceTracking'}),
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
                    text: formatMessage({id:'facial_recognition.initFaceGender'}),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "faceGender",
                    text: formatMessage({id:'facial_recognition.faceGender'}),
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
                            text: formatMessage({id:'open'}),
                            value: "OPEN"
                        },
                        {
                            text: formatMessage({id:'close'}),
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