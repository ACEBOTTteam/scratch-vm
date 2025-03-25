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
                    opcode: "Ultrasonic_getData",
                    text: "超声波测距(cm)",
                    blockType: BlockType.REPORTER
                },
                {
                    opcode: "P_Buzzer",
                    text: '蜂鸣器频率[ONE]持续时间[TWO]拍',
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'FREQUENCY',
                            defaultValue: '31'
                        },
                        TWO:{
                            type: ArgumentType.STRING,
                            menu: 'BEAT',
                            defaultValue: '0.5'
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
                    text: '以[ONE]的速度[TWO]',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.NUMBER,
                            defaultValue:50
                        },
                        TWO:{
                            type:ArgumentType.STRING,
                            menu:"RUN",
                            defaultValue:"forward"
                        }
                    }
                },
                {
                    opcode: "time_move",
                    text: '以[ONE]的速度[TWO],持续[THREE]秒',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.NUMBER,
                            defaultValue:50
                        },
                        TWO:{
                            type:ArgumentType.STRING,
                            menu:"RUN",
                            defaultValue:"forward"
                        },
                        THREE:{
                            type:ArgumentType.NUMBER,
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode: "rotationAngle",
                    text: '编码电机[ONE]转动[TWO]圈',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.STRING,
                            menu:"WHELL",
                            defaultValue:"left"
                        },
                        TWO:{
                            type:ArgumentType.NUMBER,
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode: "rotationAngle_time",
                    text: '编码电机[ONE]以速度[TWO]转动,持续[THREE]秒',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.STRING,
                            menu:"ALL_WHELL",
                            defaultValue:"M2"
                        },
                        TWO:{
                            type:ArgumentType.NUMBER,
                            defaultValue:100
                        },
                        THREE:{
                            type:ArgumentType.NUMBER,
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode: "rotationAngle_speed",
                    text: '编码电机[ONE]以速度[TWO]转动',
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.STRING,
                            menu:"ALL_WHELL",
                            defaultValue:"M2"
                        },
                        TWO:{
                            type:ArgumentType.NUMBER,
                            defaultValue:100
                        }
                    }
                }
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
                FREQUENCY: {
                    items: [
                        { text: 'B0', value: '31' },
                        { text: 'C1', value: '33' },
                        { text: 'D1', value: '37' },
                        { text: 'E1', value: '41' },
                        { text: 'F1', value: '44' },
                        { text: 'G1', value: '49' },
                        { text: 'A1', value: '55' },
                        { text: 'B1', value: '62' },
                        { text: 'C2', value: '65' },
                        { text: 'D2', value: '73' },
                        { text: 'E2', value: '82' },
                        { text: 'F2', value: '87' },
                        { text: 'G2', value: '98' },
                        { text: 'A2', value: '110' },
                        { text: 'B2', value: '123' },
                        { text: 'C3', value: '131' },
                        { text: 'D3', value: '147' },
                        { text: 'E3', value: '165' },
                        { text: 'F3', value: '175' },
                        { text: 'G3', value: '196' },
                        { text: 'A3', value: '220' },
                        { text: 'B3', value: '247' },
                        { text: 'C4', value: '262' },
                        { text: 'D4', value: '294' },
                        { text: 'E4', value: '330' },
                        { text: 'F4', value: '349' },
                        { text: 'G4', value: '392' },
                        { text: 'A4', value: '440' },
                        { text: 'B4', value: '494' },
                        { text: 'C5', value: '523' },
                        { text: 'D5', value: '587' },
                        { text: 'E5', value: '659' },
                        { text: 'F5', value: '698' },
                        { text: 'G5', value: '784' },
                        { text: 'A5', value: '880' },
                        { text: 'B5', value: '988' },
                        { text: 'C6', value: '1047' },
                        { text: 'D6', value: '1175' },
                        { text: 'E6', value: '1319' },
                        { text: 'F6', value: '1397' },
                        { text: 'G6', value: '1568' },
                        { text: 'A6', value: '1760' },
                        { text: 'B6', value: '1976' },
                        { text: 'C7', value: '2093' },
                        { text: 'D7', value: '2349' },
                        { text: 'E7', value: '2637' },
                        { text: 'F7', value: '2794' },
                        { text: 'G7', value: '3136' },
                        { text: 'GS7', value: '3322' },
                        { text: 'A7', value: '3520' },
                        { text: 'B7', value: '3951' },
                        { text: 'C8', value: '4186' },
                        { text: 'D8', value: '4699' }
                    ]
                },
                BEAT:{
                    items:[
                        {text:"二分之一",value:"0.5"},
                        {text:"四分之一",value:"0.25"},
                        {text:"八分之一",value:"0.125"},
                        {text:"整",value:"1"},
                        {text:"双",value:"2"}
                    ]
                },
                TRACE:{
                    items:[
                        {text:"1",value:"1"},
                        {text:"2",value:"2"},
                        {text:"3",value:"3"},
                        {text:"4",value:"4"}
                    ]
                },
                RUN:{
                    items:[
                        {text:"前进",value:"forward"},
                        {text:"后退",value:"backward"},
                        {text:"左转",value:"turnLeft"},
                        {text:"右转",value:"turnRight"}
                    ]
                },
                WHELL:{
                    items:[
                        {text:"左轮",value:"left"},
                        {text:"右轮",value:"right"}
                    ]
                },
                ALL_WHELL:{
                    items:[
                        {text:"左轮",value:"M2"},
                        {text:"右轮",value:"M1"},
                        {text:"全部",value:"all"}
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