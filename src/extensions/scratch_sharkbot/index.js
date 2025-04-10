const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3Sharkbot {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "sharkbot",
            name: "sharkbot",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "app_init",
                    text: "sharkbot app 初始化",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "get_commant",
                    text: "sharkbot 获取指令[ONE]",
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "COMMANT",
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: "get_commantData",
                    text: "sharkbot 获取指令[ONE]值",
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "COMMANT_DATA",
                            defaultValue: 'forward_dis'
                        }
                    }
                },
                {
                    opcode: "execute",
                    text: "sharkbot 运动",
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                {
                    opcode: "setRGB_color",
                    text: "RGB灯[ONE][TWO]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "PLACES",
                            defaultValue: '0'
                        },
                        TWO: {
                            type: ArgumentType.COLOR
                        }
                    }
                },
                {
                    opcode: "setRGB",
                    text: "RGB灯[ONE]红色[TWO]绿色[THREE]蓝色[FOUR]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "PLACES",
                            defaultValue: '0'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 255
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 255
                        },
                        FOUR: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 255
                        }
                    }
                },
                {
                    opcode: "IR_getData",
                    text: "红外接收模块接收到[ONE]被按下",
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "BUTTONS",
                            defaultValue: '12'
                        }
                    }
                },
                {
                    opcode: "Ultrasonic_launch",
                    text: "超声波发射",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "Ultrasonic_get_time",
                    text: "超声波传播时间",
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "P_Buzzer",
                    text: '蜂鸣器频率[ONE]hz 持续时间[TWO]s',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 500
                        }
                    }
                },
                {
                    opcode: "Trace_getData",
                    text: '巡线传感器[ONE]的取值',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'TRACE',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: "speed_move",
                    text: '以[ONE]的PWM值[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "RUN",
                            defaultValue: "forward"
                        }
                    }
                },
                {
                    opcode: "time_move",
                    text: '以[ONE]的PWM值[TWO],持续[THREE]秒',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "RUN",
                            defaultValue: "forward"
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: "setPWM",
                    text: '设置PWM值 左电机[ONE]右电机[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: "encoder_init",
                    text: '[ONE]编码器初始化',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ALL_WHELL",
                            defaultValue: "M2"
                        }
                    }
                },
                {
                    opcode: "encoder_num",
                    text: '[ONE]编码器脉冲数',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ALL_WHELL",
                            defaultValue: "M2"
                        }
                    }
                },
                {
                    opcode: "encoder_reset",
                    text: '[ONE]编码器重置',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ALL_WHELL",
                            defaultValue: "M2"
                        }
                    }
                },
                {
                    opcode: "encoder_turn",
                    text: '[ONE][TWO]°',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "TURN",
                            defaultValue: "turnLeft"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 180
                        }
                    }
                },
                {
                    opcode: "encoder_move",
                    text: '[ONE][TWO]cm',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "MOVE",
                            defaultValue: "forward"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: "rotationAngle",
                    text: '左编码电机转动[ONE]圈 右编码电机转动[TWO]圈',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: "rotationAngle_time",
                    text: '编码电机以[ONE]速度[TWO],持续[THREE]秒',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "RUN",
                            defaultValue: "forward"
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: "rotationAngle_speed",
                    text: '编码电机以[ONE]速度[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "RUN",
                            defaultValue: "forward"
                        },
                    }
                },
                {
                    opcode: "ASR_init",
                    text: '语音识别初始化',
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "ASR_get_command",
                    text: '语音识别获取指令',
                    blockType: BlockType.REPORTER
                },
            ],
            menus: {
                PLACES: {
                    items: [
                        {
                            text: "左",
                            value: "0"
                        },
                        {
                            text: "右",
                            value: "1"
                        },
                        {
                            text: "全部",
                            value: "2"
                        }
                    ]
                },
                BUTTONS: {
                    items: [
                        {
                            text: "up",
                            value: "12"
                        },
                        {
                            text: "down",
                            value: "13"
                        },
                        {
                            text: "left",
                            value: "14"
                        },
                        {
                            text: "right",
                            value: "15"
                        },
                        {
                            text: "ok",
                            value: "16"
                        },
                        {
                            text: "0",
                            value: "0"
                        },
                        {
                            text: "1",
                            value: "1"
                        },
                        {
                            text: "2",
                            value: "2"
                        },
                        {
                            text: "3",
                            value: "3"
                        },
                        {
                            text: "4",
                            value: "4"
                        },
                        {
                            text: "5",
                            value: "5"
                        },
                        {
                            text: "6",
                            value: "6"
                        },
                        {
                            text: "7",
                            value: "7"
                        },
                        {
                            text: "8",
                            value: "8"
                        },
                        {
                            text: "9",
                            value: "9"
                        },
                        {
                            text: "*",
                            value: "10"
                        },
                        {
                            text: "#",
                            value: "11"
                        }
                    ]
                },
                TRACE: {
                    items: [
                        { text: "1", value: "1" },
                        { text: "2", value: "2" },
                        { text: "3", value: "3" },
                        { text: "4", value: "4" }
                    ]
                },
                RUN: {
                    items: [
                        { text: "前进", value: "forward" },
                        { text: "后退", value: "backward" },
                        { text: "左转", value: "turnLeft" },
                        { text: "右转", value: "turnRight" }
                    ]
                },
                WHELL: {
                    items: [
                        { text: "左轮", value: "left" },
                        { text: "右轮", value: "right" }
                    ]
                },
                ALL_WHELL: {
                    items: [
                        { text: "左轮", value: "M2" },
                        { text: "右轮", value: "M1" },
                        // {text:"全部",value:"all"}
                    ]
                },
                MOVE: {
                    items: [
                        { text: "前进", value: "forward" },
                        { text: "后退", value: "backward" }
                    ]
                },
                TURN: {
                    items: [
                        { text: "左转", value: "turnLeft" },
                        { text: "右转", value: "turnRight" }
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
                            text: formatMessage({ id: 'carMotor.leftMove' }),
                            value: "3"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.rightMove' }),
                            value: "4"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.move.stop' }),
                            value: "0"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' }) + '1',
                            value: "5"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' }) + '2',
                            value: "6"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' }) + '3',
                            value: "7"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' }) + '4',
                            value: "8"
                        },
                        {
                            text: "巡线",
                            value: "10"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.follow' }),
                            value: "11"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.slider' }),
                            value: "12"
                        },
                        {
                            text: "全部灯",
                            value: "13"
                        },
                        {
                            text: "左灯",
                            value: "14"
                        },
                        {
                            text: "右灯",
                            value: "15"
                        },
                        {
                            text: "前进输入",
                            value: "16"
                        },
                        {
                            text: "后退输入",
                            value: "17"
                        },
                        {
                            text: "左转输入",
                            value: "18"
                        },
                        {
                            text: "右转输入",
                            value: "19"
                        },
                    ]
                },
                COMMANT_DATA: {
                    items: [
                        {
                            text: "前进输入",
                            value: "forward_dis"
                        },
                        {
                            text: "后退输入",
                            value: "backward_dis"
                        },
                        {
                            text: "左转输入",
                            value: "left_degree"
                        },
                        {
                            text: "右转输入",
                            value: "right_degree"
                        },
                        {
                            text: "速度",
                            value: "Car_Speed"
                        },
                        {
                            text: "R",
                            value: "R"
                        },
                        {
                            text: "G",
                            value: "G"
                        },
                        {
                            text: "B",
                            value: "B"
                        },
                    ]
                }
            }
        }
    }
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

module.exports = Scratch3Sharkbot