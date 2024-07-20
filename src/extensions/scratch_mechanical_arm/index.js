const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

const servo = [
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '12', value: '12' },
    { text: '13', value: '13' },
    { text: '14', value: '14' },
    { text: '16', value: '16' },
    { text: '17', value: '17' },
    { text: '18', value: '18' },
    { text: '19', value: '19' },
    { text: '23', value: '23' },
    { text: '25', value: '25' },
    { text: '26', value: '26' },
    { text: '27', value: '27' },
    { text: '32', value: '32' },
    { text: '33', value: '33' }
]

const ASSIGN_pin = [
    { text: '32', value: '32' },
    { text: '33', value: '33' },
    { text: '34', value: '34' },
    { text: '35', value: '35' },
    { text: '36', value: '36' },
    { text: '39', value: '39' }
]

class Scratch3MechanicalArm {
    constructor(runtime) {
        this.runtime = runtime
    }

    getInfo() {
        return {
            id: "mechanicalArm",
            name: "机械臂",
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openArmWebServer",
                    text: "启动机械臂[ONE]服务",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "SERVER",
                            defaultValue: "app"
                        }
                    }
                },
                {
                    opcode: "armInit",
                    text: "机械臂初始化 chassis[ONE]shoulder[TWO]elbow[THREE]claws[FOUR]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "4"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "4"
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "4"
                        },
                        FOUR: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "4"
                        },
                    }
                },
                {
                    opcode: "joystick",
                    text: "摇杆[ONE]角度[TWO]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "JOYSTICK",
                            defaultValue: "chassis"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        }
                    }
                },
                // {
                //     opcode: "setJoystickPin",
                //     text: "摇杆引脚设置[ONE][TWO][THREE]",
                //     blockType: BlockType.COMMAND,
                //     arguments: {
                //         ONE: {
                //             type: ArgumentType.STRING,
                //             menu: "JOYSTICK_PIN",
                //             defaultValue: "32"
                //         },
                //         TWO: {
                //             type: ArgumentType.STRING,
                //             menu: "JOYSTICK_PIN",
                //             defaultValue: "32"
                //         },
                //         THREE: {
                //             type: ArgumentType.STRING,
                //             menu: "JOYSTICK_PIN",
                //             defaultValue: "32"
                //         },
                //     }
                // },
                // {
                //     opcode: "getJoystickData",
                //     text: "摇杆[ONE]",
                //     blockType: BlockType.REPORTER,
                //     arguments: {
                //         ONE: {
                //             type: ArgumentType.STRING,
                //             menu: "JOYSTICK_TYPE",
                //             defaultValue: "x"
                //         }
                //     }
                // },
                {
                    opcode: "armMemory",
                    text: "机械臂摇杆记忆模式[ONE][TWO]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        }
                    }
                },
                {
                    opcode: "armCoord",
                    text: "机械臂坐标控制 x[ONE]y[TWO]z[THREE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: -10
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: "getJoystickCoord",
                    text: "3轴坐标[ONE]获取",
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            menu: "COORD",
                            defaultValue: "x"
                        }
                    }
                },
                {
                    opcode: "armError",
                    text: "机械臂基座误差调整[ONE][TWO][THREE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 8
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2
                        }
                    }
                },
                {
                    opcode: "setArthrosis",
                    text: "关节[ONE]角度[TWO]速度[THREE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "JOYSTICK",
                            defaultValue: "chassis"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: "armMotion",
                    text: "机械臂动作[ONE]",
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ARM_MOTION",
                            defaultValue: "keep"
                        }
                    }
                },
                {
                    opcode: "armReset",
                    text: "机械臂复位",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "armNetInit",
                    text: "机械臂串口初始化",
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "getAppCommand",
                    text: "获取[ONE]信号",
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            menu: "SIGNAL",
                            defaultValue: "1"
                        }
                    }
                },
                {
                    opcode: "getAppCommandData",
                    text: "[ONE]指令[TWO]值",
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE:{
                            type:ArgumentType.STRING,
                            menu:"SERVER",
                            defaultValue: "app"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "SIGNALDATA",
                            defaultValue: "Claws_Silde_Angle"
                        }
                    }
                },
                // {
                //     opcode: "armRunAction",
                //     text: "机械臂执行动作",
                //     blockType: BlockType.CONDITIONAL,
                //     arguments: {
                //         ONE: {
                //             type: ArgumentType.STRING,
                //             defaultValue: 'callback'
                //         },
                //     }
                // }
            ],
            menus: {
                SERVER:{
                    items:[
                        { text: 'app', value: 'app' },
                        { text: '网页', value: 'web' }
                    ]
                },
                SERVO_PIN: {
                    items: servo
                },
                JOYSTICK: {
                    items: [
                        { text: 'chassis', value: 'chassis' },
                        { text: 'shoulder', value: 'shoulder' },
                        { text: 'elbow', value: 'elbow' },
                        { text: 'claws', value: 'claws' }
                    ]
                },
                // JOYSTICK_PIN: {
                //     items: ASSIGN_pin
                // },
                // JOYSTICK_TYPE: {
                //     items: [
                //         { text: "x", value: "x" },
                //         { text: "y", value: "y" },
                //         { text: "sw", value: "sw" }
                //     ]
                // },
                COORD: {
                    items: [
                        { text: "x", value: "x" },
                        { text: "y", value: "y" },
                        { text: "z", value: "z" }
                    ]
                },
                ARM_MOTION: {
                    items: [
                        { text: "保存", value: "keep" },
                        { text: "运行", value: "run" },
                        { text: "清除", value: "clear" }
                    ]
                },
                SIGNAL:{
                    // items:[
                    //     {text:"爪子打开",value:"Claws_open"},
                    //     {text:"爪子关闭",value:"Claws_close"},
                    //     {text:"底盘向左",value:"Chassis_left"},
                    //     {text:"底盘向右",value:"Chassis_right"},
                    //     {text:"肩部向上",value:"Shoulder_up"},
                    //     {text:"肩部向下",value:"Shoulder_down"},
                    //     {text:"肘部向上",value:"Elbow_Silde"},
                    //     {text:"肘部向下",value:"Elbow_Silde"},
                    //     {text:"爪子",value:"Claws_Silde"},
                    //     {text:"肘部",value:"Elbow_Silde"},
                    //     {text:"肩部",value:"Shoulder_Silde"},
                    //     {text:"底盘",value:"Chassis_Silde"},
                    //     {text:"速度",value:"Speed_Silde"},
                    //     {text:"模式",value:"Mode"},
                    //     {text:"空间坐标",value:"PTP"},
                    //     {text:"复位",value:"Zero"},
                    //     {text:"保存状态",value:"keepType"},
                    //     {text:"结束",value:"end"},
                    //     {text:"开始",value:"start"},
                    //     {text:"运行",value:"run"},
                    //     {text:"模式1",value:"model1"},
                    //     {text:"模式2",value:"model2"},
                    //     {text:"模式3",value:"model3"},
                    //     {text:"模式4",value:"model4"},
                    //     {text:"模式5",value:"model5"},
                    //     {text:"模式6",value:"model6"},
                    //     {text:"x赋值",value:"x"},
                    //     {text:"y赋值",value:"y"},
                    //     {text:"z赋值",value:"z"},
                    //     {text:"xyz传入执行",value:"xyz"},
                    //     {text:"归零",value:"zero"}
                    // ]
                    items:[
                        {text:"爪子打开",value:"1"},
                        {text:"爪子关闭",value:"2"},
                        {text:"底盘向左",value:"4"},
                        {text:"底盘向右",value:"5"},
                        {text:"肩部向上",value:"6"},
                        {text:"肩部向下",value:"7"},
                        {text:"肘部向上",value:"9"},
                        {text:"肘部向下",value:"8"},
                        {text:"爪子",value:"28"},
                        {text:"肘部",value:"27"},
                        {text:"肩部",value:"26"},
                        {text:"底盘",value:"25"},
                        {text:"速度",value:"20"},
                        // {text:"模式",value:"Mode"},
                        // {text:"空间坐标",value:"PTP"},
                        {text:"复位",value:"35"},
                        {text:"保存状态",value:"31"},
                        {text:"结束",value:"32"},
                        {text:"开始",value:"33"},
                        {text:"运行",value:"34"},
                        {text:"模式1",value:"41"},
                        {text:"模式2",value:"42"},
                        {text:"模式3",value:"43"},
                        {text:"模式4",value:"44"},
                        {text:"模式5",value:"45"},
                        {text:"模式6",value:"46"},
                        // {text:"x赋值",value:"51"},
                        // {text:"y赋值",value:"52"},
                        // {text:"z赋值",value:"53"},
                        {text:"xyz传入执行",value:"54"},
                        {text:"归零",value:"60"}
                    ]
                },
                SIGNALDATA:{
                    items:[
                        {text:"爪子",value:"Claws_Silde_Angle"},
                        {text:"肘部",value:"Elbow_Silde_Angle"},
                        {text:"肩部",value:"Shoulder_Silde_Angle"},
                        {text:"底盘",value:"Chassis_Silde_Angle"},
                        {text:"速度",value:"Speeds"},
                        // {text:"模式",value:"mode"},
                        {text:"空间坐标x",value:"PTP_X"},
                        {text:"空间坐标y",value:"PTP_Y"},
                        {text:"空间坐标z",value:"PTP_Z"}
                    ]
                },
            }
        }
    }

    armInit = () => { }
    joystick = () => { }
    setJoystickPin = () => { }
    getJoystickData = () => { }
    armMemory = () => { }
    armCoord = () => { }
    getJoystickCoord = () => { }
    armError = () => { }
    setArthrosis = () => { }
    armMotion = () => { }
    armReset = () => { }
    openArmWebServer = () => { }
    armRunAction = () => { }
}

module.exports = Scratch3MechanicalArm