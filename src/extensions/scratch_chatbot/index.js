const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3ChatBot {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            id: "chatbot",
            name: "LumiBot",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "start_ap",
                    text: formatMessage({ id: 'chatbot.start_ap' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ACEBOTT'
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            defaultValue: "12345678"
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            menu: "CHANNEL",
                            defaultValue: 1
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "start_wifi",
                    text: formatMessage({ id: 'chatbot.start_wifi' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ACEBOTT'
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            defaultValue: "12345678"
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "wifi_info",
                    text: "WIFI[ONE]",
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "WIFI_INFO",
                            defaultValue: 'info'
                        },
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "init",
                    text: formatMessage({ id: 'chatbot.init' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "app_init",
                    text: formatMessage({ id: 'chatbot.app_init' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "openCaream",
                    text: formatMessage({ id: 'chatbot.openCaream' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "openStream",
                    text: formatMessage({ id: 'chatbot.openStream' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "loop_push_data",
                    text: formatMessage({ id: 'chatbot.loop_push_data' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "setAudioVolume",
                    text: formatMessage({ id: 'chatbot.setAudioVolume' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.MATH_HALF_VOLUME,
                            defaultValue: '50'
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "showCameraAtScreen",
                    text: formatMessage({ id: 'chartbot.showCameraAtScreen' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getAudioVolume",
                    text: formatMessage({ id: 'chatbot.getAudioVolume' }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "playMusic",
                    text: formatMessage({ id: 'chatbot.playMusic' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "MUSICS",
                            defaultValue: 'little_star'
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getSurroundingVolume",
                    text: formatMessage({ id: 'chatbot.getSurroundingVolume' }),
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "move",
                    text: formatMessage({ id: 'chatbot.move' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "RUN",
                            defaultValue: 'forward'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        }
                    }
                },
                {
                    opcode: "wheel_speed",
                    text: formatMessage({ id: 'chatbot.wheel_speed' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        }
                    }
                },
                {
                    opcode: "stop",
                    text: formatMessage({ id: 'chatbot.stop' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "led",
                    text: formatMessage({ id: 'chatbot.led' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "DIRECTION",
                            defaultValue: 'front'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        THREE: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        },
                        FOUR: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        },
                        FIVE: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        },
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "setFont",
                    text: formatMessage({ id: 'chatbot.setFont' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "FONT",
                            defaultValue: "1"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "FONTSIZE",
                            defaultValue: "1"
                        },
                        THREE: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        },
                        FOUR: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        },
                        FIVE: {
                            type: ArgumentType.FIELD_SLIDER,
                            defaultValue: 255
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "screenShow",
                    text: formatMessage({ id: 'chatbot.screenShow' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.SCREEN_X,
                            defaultValue: 0
                        },
                        TWO: {
                            type: ArgumentType.SCREEN_Y,
                            defaultValue: 0
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            defaultValue: '100'
                        },
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "screenClear",
                    text: formatMessage({ id: 'chatbot.screenClear' }),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "showImg",
                    text: formatMessage({ id: 'chatbot.showImg' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.FIELD_ICON_DROPDOWN,
                            // menu: "ICON_MENU",
                            defaultValue: 'angry'
                        }
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "touchSensor",
                    text: formatMessage({ id: 'chatbot.touchSensor' }),
                    blockType: BlockType.BOOLEAN,
                },
                {
                    opcode: "openAi",
                    text: formatMessage({ id: 'chatbot.openAi' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "AI",
                            defaultValue: 'img'
                        },
                    },
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getAIResult",
                    text: formatMessage({ id: 'chatbot.getAIResult' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "RESULT",
                            defaultValue: 'tag'
                        },
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "getVisualResult",
                    text: formatMessage({ id: 'chatbot.getVisualResult' }),
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "VISUAL_RESULT",
                            defaultValue: 'colour'
                        },
                    },
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "getAppComment",
                    text: formatMessage({ id: 'chatbot.getAppComment' }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "COMMENT",
                            defaultValue: "1"
                        }
                    }
                },
                {
                    opcode: "getAppCommentData",
                    text: formatMessage({ id: 'chatbot.getAppCommentData' }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "GET_COMMENT",
                            defaultValue: "red"
                        }
                    }
                },
                {
                    opcode: "startConversation",
                    text: formatMessage({ id: 'chatbot.startConversation' }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "creatAction",
                    text: formatMessage({ id: 'chatbot.creatAction' }),
                    blockType: BlockType.HAT,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "led"
                        },
                    }
                },
                {
                    opcode: "customizeActions",
                    text: formatMessage({ id: 'chatbot.customizeActions' }),
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                ,
                {
                    opcode: "getConversation",
                    text: formatMessage({ id: 'chatbot.getConversation' }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "OBJECT",
                            defaultValue: "LumiBot"
                        }
                    }
                },
                {
                    opcode: "setMcpDescribe",
                    text: formatMessage({ id: 'chatbot.setMcpDescribe' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "switch the led light"
                        }
                    }
                },
                {
                    opcode: "setMcpState",
                    text: formatMessage({ id: 'chatbot.setMcpState' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "state"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "PARAMETER_TYPE",
                            defaultValue: "int"
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            defaultValue: "0"
                        }
                    }
                },
                {
                    opcode: "getMcpReturn",
                    text: formatMessage({ id: 'chatbot.getMcpReturn' }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "state"
                        }
                    }
                },
                {
                    opcode: "executeMcp",
                    text: formatMessage({ id: 'chatbot.executeMcp' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: "name"
                        }
                    }
                }
            ],
            menus: {
                MUSICS: {
                    items: [
                        { text: "little star", value: "little_star" },
                        { text: "happy birthday", value: "happy_birthday" },
                        { text: "merry christmas", value: "merry_christmas" },
                        { text: "old macdonald", value: "old_macdonald" },
                    ]
                },
                OBJECT: {
                    items: [
                        { text: "TellyBot", value: "LumiBot" },
                        { text: formatMessage({ id: 'chatbot.menu.User' }), value: "User" }
                    ]
                },
                PARAMETER_TYPE: {
                    items: [
                        { text: "int", value: "int64_t" },
                        { text: "string", value: "std::string" },
                        { text: "boolean", value: "bool" },
                    ]
                },
                WIFI_INFO: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.info' }), value: "info" },
                        { text: formatMessage({ id: 'chatbot.menu.ip' }), value: "IP" }
                    ]
                },
                FONT: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.classicFont' }), value: "1" },
                        { text: formatMessage({ id: 'chatbot.menu.smallFont' }), value: "2" },
                        { text: formatMessage({ id: 'chatbot.menu.mediumFont' }), value: "4" },
                    ]
                },
                FONTSIZE: {
                    items: [
                        { text: "1", value: "1" },
                        { text: "2", value: "2" },
                        { text: "3", value: "3" },
                        { text: "4", value: "4" },
                        { text: "5", value: "5" },
                        { text: "6", value: "6" },
                        { text: "7", value: "7" }
                    ]
                },
                CHANNEL: {
                    items: [
                        { text: "1", value: 1 },
                        { text: "2", value: 2 },
                        { text: "3", value: 3 },
                        { text: "4", value: 4 },
                        { text: "5", value: 5 },
                        { text: "6", value: 6 },
                        { text: "7", value: 7 },
                        { text: "8", value: 8 },
                        { text: "9", value: 9 },
                        { text: "10", value: 10 },
                        { text: "11", value: 11 },
                        { text: "12", value: 12 },
                        { text: "13", value: 13 }
                    ]
                },
                GET_COMMENT: {
                    items: [
                        { text: "R", value: "red" },
                        { text: "G", value: "green" },
                        { text: "B", value: "blue" },
                    ]
                },
                COMMENT: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.advance' }), value: "1" },
                        { text: formatMessage({ id: 'chatbot.menu.retreat' }), value: "2" },
                        { text: formatMessage({ id: 'chatbot.menu.trueLeft' }), value: "3" },
                        { text: formatMessage({ id: 'chatbot.menu.trueRight' }), value: "4" },
                        { text: formatMessage({ id: 'chatbot.menu.stop' }), value: "0" },
                        { text: formatMessage({ id: 'chatbot.menu.speed1' }), value: "5" },
                        { text: formatMessage({ id: 'chatbot.menu.speed3' }), value: "6" },
                        { text: formatMessage({ id: 'chatbot.menu.speed5' }), value: "7" },
                        { text: formatMessage({ id: 'chatbot.menu.frontRgb' }), value: "8" },
                        { text: formatMessage({ id: 'chatbot.menu.backRgb' }), value: "9" },
                        { text: "R", value: "10" },
                        { text: "G", value: "11" },
                        { text: "B", value: "12" },
                        { text: formatMessage({ id: 'chatbot.menu.anger' }), value: "17" },
                        { text: formatMessage({ id: 'chatbot.menu.puzzled' }), value: "18" },
                        { text: formatMessage({ id: 'chatbot.menu.cry' }), value: "19" },
                        { text: formatMessage({ id: 'chatbot.menu.slapInTheFace' }), value: "20" },
                        { text: formatMessage({ id: 'chatbot.menu.loveliness' }), value: "21" },
                        { text: formatMessage({ id: 'chatbot.menu.dispirited' }), value: "22" },
                        { text: formatMessage({ id: 'chatbot.menu.sleepy' }), value: "23" },
                        { text: formatMessage({ id: 'chatbot.menu.frown' }), value: "24" },
                        { text: formatMessage({ id: 'chatbot.menu.happy' }), value: "25" },
                        { text: formatMessage({ id: 'chatbot.menu.kiss' }), value: "26" },
                        { text: formatMessage({ id: 'chatbot.menu.laugh' }), value: "27" },
                        { text: formatMessage({ id: 'chatbot.menu.love' }), value: "28" },
                        { text: formatMessage({ id: 'chatbot.menu.snicker' }), value: "29" },
                        { text: formatMessage({ id: 'chatbot.menu.calmness' }), value: "30" },
                        { text: formatMessage({ id: 'chatbot.menu.notToMatter' }), value: "31" },
                        { text: formatMessage({ id: 'chatbot.menu.sadness' }), value: "32" },
                        { text: formatMessage({ id: 'chatbot.menu.sleep' }), value: "33" },
                        { text: formatMessage({ id: 'chatbot.menu.lethargy' }), value: "34" },
                    ]
                },
                ICON_MENU: {
                    items: [
                        // { text: formatMessage({ id: 'chatbot.menu.anger' }), value: "angry" },
                        // { text: formatMessage({ id: 'chatbot.menu.puzzled' }), value: "confused" },
                        // { text: formatMessage({ id: 'chatbot.menu.cry' }), value: "crying" },
                        // { text: formatMessage({ id: 'chatbot.menu.slapInTheFace' }), value: "Cute_cheek_poking" },
                        { text: "angry", value: "angry" },
                        { text: "confused", value: "confused" },
                        { text: "connecting", value: "Connecting" },
                        { text: "crying", value: "crying" },
                        { text: "cute cheek poking", value: "Cute_cheek_poking" },
                        { text: "cute confused", value: "cute_confused" },
                        { text: "dispirited", value: "dispirited" },
                        { text: "feel sleepy", value: "feel_sleepy" },
                        { text: "frown", value: "frown" },
                        { text: "happy", value: "happy" },
                        { text: "kissy", value: "kissy" },
                        { text: "laugh", value: "laugh" },
                        { text: "love", value: "love" },
                        { text: "mischievous grin", value: "Mischievous_grin" },
                        { text: "neutral", value: "neutral" },
                        { text: "not to matter", value: "not_to_matter" },
                        { text: "sad", value: "sad" },
                        { text: "sleep", value: "sleep" },
                        { text: "sleepy", value: "sleepy" }
                    ]
                },
                VISUAL_RESULT: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.colour' }), value: "colour" },
                        { text: formatMessage({ id: 'chatbot.menu.x' }), value: "x" },
                        { text: formatMessage({ id: 'chatbot.menu.y' }), value: "y" },
                        { text: formatMessage({ id: 'chatbot.menu.w' }), value: "w" },
                        { text: formatMessage({ id: 'chatbot.menu.h' }), value: "h" },
                        { text: formatMessage({ id: 'chatbot.menu.vision' }), value: "vision" },
                        { text: 'moving direction', value: "move" },
                    ]
                },
                RESULT: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.tag' }), value: "tag" },

                    ]
                },
                AI: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.img' }), value: "img" },
                        { text: formatMessage({ id: 'chatbot.menu.pose' }), value: "pose" },
                        { text: formatMessage({ id: 'chatbot.menu.gesture' }), value: "gesture" },
                        { text: formatMessage({ id: 'chatbot.menu.face' }), value: "face" },
                        { text: formatMessage({ id: 'chatbot.menu.num' }), value: "num" },
                        { text: formatMessage({ id: 'chatbot.menu.color' }), value: "color" },
                        { text: formatMessage({ id: 'chatbot.menu.colorTracing' }), value: "colorTracing" },
                        { text: "line tracking", value: "lineWalking" },
                    ]
                },

                DIRECTION: {
                    items: [
                        { text: formatMessage({ id: 'chatbot.menu.front' }), value: "front" },
                        { text: formatMessage({ id: 'chatbot.menu.back' }), value: "rear" },
                    ]
                },
                SWITCH: {
                    items: [
                        { text: formatMessage({ id: 'open' }), value: "open" },
                        { text: formatMessage({ id: 'close' }), value: "close" },
                    ]
                },
                RUN: {
                    items: [
                        { text: formatMessage({ id: 'sharnbot.RUN.forward' }), value: "forward" },
                        { text: formatMessage({ id: 'sharnbot.RUN.backward' }), value: "backward" },
                        { text: formatMessage({ id: 'sharnbot.RUN.turnLeft' }), value: "turnLeft" },
                        { text: formatMessage({ id: 'sharnbot.RUN.turnRight' }), value: "turnRight" }
                    ]
                },
                COMMANT: {
                    items: [
                        {
                            text: formatMessage({ id: 'carMotor.forward' }),
                            value: "1"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.backward' }),
                            value: "2"
                        },
                        {
                            text: formatMessage({ id: 'fourLeggedBionicSpider.leftMove' }),
                            value: "3"
                        },
                        {
                            text: formatMessage({ id: 'fourLeggedBionicSpider.rightMove' }),
                            value: "4"
                        },
                    ]
                }
            }
        }
    }

    creatAction() { }
    getK1Button() {

    }
    getAngle() {

    }
    getXYZData() {

    }
    getCommand() {

    }
    getData() {

    }
    connectBle() {

    }
    MPU6050_sendData() {

    }
    MPU6050_getData() {

    }
    MPU6050_init() {

    }
    openBle() {

    }
}

module.exports = Scratch3ChatBot