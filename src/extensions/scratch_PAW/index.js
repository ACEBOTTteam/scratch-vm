const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Video = require('../../io/video');
const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3PAW {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "PAW",
            name: "机械爪",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openBle",
                    text: "开启蓝牙[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ESP32-BLE'
                        }
                    }
                },
                {
                    opcode: "connectBle",
                    text: "连接蓝牙[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'ESP32-BLE'
                        }
                    }
                },
                {
                    opcode: "MPU6050_init",
                    text: "机械爪初始化",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "MPU6050_getData",
                    text: "机械爪初获取数据",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "MPU6050_sendData",
                    text: "机械爪初发送数据[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            // menu: 'OPERATE',
                            defaultValue: 'forward'
                        }
                    }
                },
                {
                    opcode: "getXYZData",
                    text: '获取[ONE]加速度',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'AXIS',
                            defaultValue: 'X'
                        }
                    }
                },
                // {
                //     opcode: "XYZcomparison",
                //     text: 'x[ONE][TWO][THREE] y电位器[FOUR][FIVE][SIX] z[SEVEN][EIGHT]',
                //     blockType: BlockType.REPORTER,
                //     arguments: {
                //         ONE: {
                //             type: ArgumentType.STRING,
                //             menu: 'COMPARISON',
                //             defaultValue: '>'
                //         },
                //         TWO:{
                //             type: ArgumentType.NUMBER,
                //             defaultValue: '100'
                //         },
                //         THREE:{
                //             type: ArgumentType.NUMBER,
                //             menu: 'GATE',
                //             defaultValue: '&&'
                //         },

                //         FOUR: {
                //             type: ArgumentType.STRING,
                //             menu: 'COMPARISON',
                //             defaultValue: '>'
                //         },
                //         FIVE:{
                //             type: ArgumentType.NUMBER,
                //             defaultValue: '100'
                //         },
                //         SIX:{
                //             type: ArgumentType.NUMBER,
                //             menu: 'GATE',
                //             defaultValue: '&&'
                //         },

                //         SEVEN: {
                //             type: ArgumentType.STRING,
                //             menu: 'COMPARISON',
                //             defaultValue: '>'
                //         },
                //         EIGHT:{
                //             type: ArgumentType.NUMBER,
                //             defaultValue: '100'
                //         },
                //         NINE:{
                //             type: ArgumentType.NUMBER,
                //             menu: 'GATE',
                //             defaultValue: '&&'
                //         }
                //     }
                // },
                {
                    opcode: "getAngle",
                    text: '获取电位器[ONE]偏转角度',
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'RP',
                            defaultValue: 'potValue1'
                        }
                    }
                },
                {
                    opcode: "RPcomparison",
                    text: '1电位器[ONE][TWO][THREE] 2电位器[FOUR][FIVE][SIX] 3电位器[SEVEN][EIGHT][NINE] 4电位器[TEN][ELEVEN][TWELEV] 5电位器[THIRTEEN][FOURTEEN]',
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'COMPARISON',
                            defaultValue: '>'
                        },
                        TWO:{
                            type: ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        THREE:{
                            type: ArgumentType.NUMBER,
                            menu: 'GATE',
                            defaultValue: '&&'
                        },

                        FOUR: {
                            type: ArgumentType.STRING,
                            menu: 'COMPARISON',
                            defaultValue: '>'
                        },
                        FIVE:{
                            type: ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        SIX:{
                            type: ArgumentType.NUMBER,
                            menu: 'GATE',
                            defaultValue: '&&'
                        },

                        SEVEN: {
                            type: ArgumentType.STRING,
                            menu: 'COMPARISON',
                            defaultValue: '>'
                        },
                        EIGHT:{
                            type: ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        NINE:{
                            type: ArgumentType.NUMBER,
                            menu: 'GATE',
                            defaultValue: '&&'
                        },

                        TEN: {
                            type: ArgumentType.STRING,
                            menu: 'COMPARISON',
                            defaultValue: '>'
                        },
                        ELEVEN:{
                            type: ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        TWELEV:{
                            type: ArgumentType.NUMBER,
                            menu: 'GATE',
                            defaultValue: '&&'
                        },

                        THIRTEEN: {
                            type: ArgumentType.STRING,
                            menu: 'COMPARISON',
                            defaultValue: '>'
                        },
                        FOURTEEN:{
                            type: ArgumentType.NUMBER,
                            defaultValue: '100'
                        },
                        FIFTEEN:{
                            type: ArgumentType.NUMBER,
                            menu: 'GATE',
                            defaultValue: '&&'
                        }
                    }
                },
                {
                    opcode: "getK1Button",
                    text: 'K1按键被按下',
                    blockType: BlockType.BOOLEAN,
                    setEditable: true,
                },
                {
                    opcode: "getData",
                    text: "接收数据",
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "getCommand",
                    text: "获取[ONE]指令",
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            // menu: 'OPERATE_VAL',
                            defaultValue: "forward"
                        },
                    }
                }
            ],
            menus: {
                OPERATE: {
                    items: [
                        {
                            text: formatMessage({ id: 'carMotor.forward' }),
                            value: "forward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.backward' }),
                            value: "backward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.leftMove' }),
                            value: "moveleft"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.rightMove' }),
                            value: "moveright"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.clockwise' }),
                            value: "clockwise"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.anticlockwise' }),
                            value: "contrarotate"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.move.stop' }),
                            value: "stop"
                        }
                    ]
                },
                OPERATE_VAL: {
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
                            text: formatMessage({ id: 'carMotor.clockwise' }),
                            value: "5"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.anticlockwise' }),
                            value: "6"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.move.stop' }),
                            value: "0"
                        },
                    ]
                },
                AXIS: {
                    items: [
                        {
                            text: "x",
                            value: "X"
                        },
                        {
                            text: "y",
                            value: "Y"
                        },
                        {
                            text: "z",
                            value: "Z"
                        },
                    ]
                },
                RP: {
                    items: [
                        {
                            text: "1旋转电位器",
                            value: "potValue1"
                        },
                        {
                            text: "2旋转电位器",
                            value: "potValue2"
                        },
                        {
                            text: "3旋转电位器",
                            value: "potValue3"
                        },
                        {
                            text: "4旋转电位器",
                            value: "potValue4"
                        },
                        {
                            text: "5旋转电位器",
                            value: "potValue5"
                        }
                    ]
                },
                GATE:{
                    items:[
                        {text:"与",value:"&&"},
                        {text:"或",value:"||"}
                    ]
                },
                COMPARISON:{
                    items:[
                        {text:"大于",value:">"},
                        {text:"小于",value:"<"}
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

    openBle(arg) {

    }
}

module.exports = Scratch3PAW