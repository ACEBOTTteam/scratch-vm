const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3SpiderRobot {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "fourLeggedBionicSpider",
            name: '四足仿生蜘蛛',
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "spiderInit",
                    text: '蜘蛛[ONE]初始化',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'INITSELECT',
                            defaultValue: 'tcp'
                        }
                    }
                },
                {
                    opcode: "spiderMove",
                    text: '向[ONE]运动',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'DIRECTION',
                            defaultValue: 'front'
                        }
                    }
                },
                {
                    opcode: "spiderMode",
                    text: '启动[ONE]模式',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'MODE',
                            defaultValue: 'standby'
                        }
                    }
                },
                {
                    opcode: "spiderExecute",
                    text: '蜘蛛运动',
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                {
                    opcode: "spiderGetInstruct",
                    text: '蜘蛛获取指令',
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
                            text: '顺时针',
                            value: "clockwise"
                        },
                        {
                            text: '逆时针',
                            value: "anticlockwise"
                        }
                    ]
                },
                INITSELECT: {
                    items: [
                        {
                            text: "网络",
                            value: "tcp"
                        },
                        {
                            text: "串口",
                            value: "uart"
                        },
                    ]
                },
                MODE: {
                    items: [
                        {
                            text: '待机',
                            value: "standby"
                        },
                        {
                            text: '趴地',
                            value: "lying"
                        },
                        {
                            text: '睡眠',
                            value: "sleep"
                        },
                        {
                            text: '打招呼',
                            value: "greet"
                        },
                        {
                            text: '俯卧撑',
                            value: "pushup"
                        },
                        {
                            text: '战斗',
                            value: "fighting"
                        },
                        {
                            text: '跳舞',
                            value: "dancing"
                        },
                        {
                            text: '摇摆',
                            value: "swing"
                        },
                        {
                            text: '耍帅',
                            value: "handsome"
                        },
                    ]
                },
            }
        }
    }

    spiderMove() {

    }

    spiderRotate() {

    }

    spiderMode() {

    }

    spiderInit() {

    }

    spiderExecute() {

    }
}

module.exports = Scratch3SpiderRobot