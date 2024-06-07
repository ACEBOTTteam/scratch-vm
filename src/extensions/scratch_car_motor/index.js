const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3CarMotor {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "carMotor",
            name: '智能车',
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "carMove",
                    text: '小车向[ONE]运动,速度[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'DIRECTION',
                            defaultValue: 'front'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                    }
                },
                {
                    opcode: "carStop",
                    text: '小车停止',
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "carInit",
                    text: '小车网络初始化',
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "spiderExecute",
                    text: '小车运动',
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                {
                    opcode: "carGetInstruct",
                    text: '小车获取指令',
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "cargetInstructData",
                    text: '指令取值',
                    blockType: BlockType.REPORTER
                }
            ],
            menus: {
                DIRECTION: {
                    items: [
                        {
                            text: '前',
                            value: "front"
                        },
                        {
                            text: '后',
                            value: "back"
                        },
                        {
                            text: '左',
                            value: "left"
                        },
                        {
                            text: '右',
                            value: "right"
                        },
                        {
                            text: '左前',
                            value: "leftUp"
                        },
                        {
                            text: '左后',
                            value: "leftDown"
                        },
                        {
                            text: '右前',
                            value: "rightUp"
                        },
                        {
                            text: '右后',
                            value: "rightDown"
                        },
                        {
                            text: '顺时针',
                            value: "clockwise"
                        },
                        {
                            text: '逆时针',
                            value: "anticlockwise"
                        }
                    ]
                }
            }
        }
    }

    carMove() {

    }

    carRotate() {

    }

    carStop() {

    }

    carSetSpeed() {

    }
}

module.exports = Scratch3CarMotor