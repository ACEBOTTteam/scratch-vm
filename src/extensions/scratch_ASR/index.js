const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3BipedRobot {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "ASR",
            name: "语音识别",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "ASR",
                    text: "语音识别",
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                {
                    opcode: "sound_config",
                    text: "声音配置 发音[ONE]音量[TWO]语速[THREE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'SOUND',
                            defaultValue: '1'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                    }
                },
                {
                    opcode: "turn_on_the_radio",
                    text: '开机播报[ONE]超时时间[TWO]s',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'hello'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: "wakeword",
                    text: '唤醒灵敏度[ONE]唤醒词[TWO] 唤醒回复[THREE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'SENSITIVITY',
                            defaultValue: 'middle'
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'robot'
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'i am here'
                        },
                    }
                },
                {
                    opcode: "exit_reply",
                    text: '超时退出回复[ONE]',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "bye"
                        },
                    }
                },
                {
                    opcode: "initiative_exit",
                    text: '主动退出命令[ONE]回复[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "bye"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            defaultValue: "bye"
                        },
                    }
                },
                {
                    opcode: "command_recognition_sensitivity",
                    text: '命令识别灵敏度[ONE]',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'SENSITIVITY',
                            defaultValue: "middle"
                        },
                    }
                },
                {
                    opcode: "recognition_command",
                    text: '行为名[ONE]ID[TWO]命令词[THREE]回复语[FOUR]端口输出[FIVE]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'open'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'open the light'
                        },
                        FOUR: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ok'
                        },
                        FIVE: {
                            type: ArgumentType.STRING,
                            defaultValue: 1
                        },
                    }
                }
            ],
            menus: {
                SOUND: {
                    items: [
                        { text: 'Dora', value: '1' },
                        { text: 'Rebecca', value: '2' },
                        { text: 'Ana', value: '3' },
                        { text: 'Dane', value: '4' },
                        { text: 'Allen', value: '5' },
                        { text: 'Ava', value: '6' },
                        // { text: '天真男生', value: '7' }
                    ]
                },
                SENSITIVITY: {
                    items: [
                        { text: '低', value: 'low' },
                        { text: '中', value: 'middle' },
                        { text: '高', value: 'high' },
                    ]
                }
            }
        }
    }

    bipedRobotSetPin() { }

    bipedRobotRunAction() { }

    bipedRobotCreatAction() { }

    bipedRobotServe() { }

    bipedRobotRun() { }

    bipedRobotCreatAction() { }
}

module.exports = Scratch3BipedRobot