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

class Scratch3CarMotor {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "carMotor",
            name: formatMessage({ id: 'carMotor.categoryName' }),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                // {
                //     opcode: "aaaaa",
                //     text: "创建动作[TWO]",
                //     blockType: BlockType.HAT,
                //     arguments:{
                //         TWO: {
                //             type: ArgumentType.STRING,
                //             menu:'DEMO',
                //             defaultValue: 100
                //         },
                //     }
                // },
                {
                    opcode: "carMove",
                    text: formatMessage({ id: 'carMotor.move' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'DIRECTION',
                            defaultValue: 'forward'
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                    }
                },
                {
                    opcode: "carStop",
                    text: formatMessage({ id: 'carMotor.stop' }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "carMode",
                    text: formatMessage({ id: 'carMotor.mode.fun' }),
                    blockType: BlockType.HAT,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'CARMODE',
                            defaultValue: 'roundTrack'
                        }
                    }
                },
                {
                    opcode: "carExecute",
                    text: formatMessage({ id: 'carMotor.execute.mode' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'CARMODE',
                            defaultValue: 'roundTrack'
                        }
                    }
                },
                {
                    opcode: "carRunMode",
                    text: formatMessage({ id: 'carMotor.mode.fun' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'CARMODE',
                            defaultValue: 'roundTrack'
                        }
                    }
                },
                {
                    opcode: "carInit",
                    text: formatMessage({ id: 'carMotor.carInit' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'SERVER',
                            defaultValue: 'app'
                        }
                    }
                },
                {
                    opcode: "carGetInstruct",
                    text: formatMessage({ id: 'carMotor.carGetInstruct' }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'CARTYPE',
                            defaultValue: '63'
                        }
                    }
                },
                {
                    opcode: "getCarAppCommandData",
                    text: formatMessage({ id: 'ROBOT_ARM_GET_COMMAND_DATA'}),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "CARSIGNALDATA",
                            defaultValue: "Car_Speed"
                        }
                    }
                },
                {
                    opcode: "spiderExecute",
                    text: formatMessage({ id: 'carMotor.run' }),
                    blockType: BlockType.CONDITIONAL,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'callback'
                        },
                    }
                },
                // {
                //     opcode: "cargetInstructData",
                //     text: formatMessage({ id: 'carMotor.cargetInstructData' }),
                //     blockType: BlockType.REPORTER
                // },

                {
                    func:"aabutton",
                    text:formatMessage({ id: 'carMotor.car.armExpand' }),
                    blockType:BlockType.BUTTON
                },
                //机械臂
                {
                    opcode: "armError",
                    text: formatMessage({ id: 'ROBOT_ARM_ERROR'}),
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
                    opcode: "armInit",
                    text: formatMessage({ id: 'arm_car.arm.init' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "25"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "26"
                        },
                        THREE: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "27"
                        },
                        FOUR: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "33"
                        },
                        FIVE: {
                            type: ArgumentType.STRING,
                            menu: "SERVO_PIN",
                            defaultValue: "4"
                        },
                    }
                },
                {
                    opcode: "setArmAngle",
                    text: formatMessage({ id: 'arm_car.arm.setAngle' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "PART",
                            defaultValue: "chassis"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 90
                        }
                    }
                },
                {
                    opcode: "setArmAngleSpeed",
                    text: formatMessage({ id: 'carMotor.setArmAngleSpeed' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "PART",
                            defaultValue: "chassis"
                        },
                        TWO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 90
                        },
                        THREE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50
                        },
                    }
                },
                {
                    opcode: "getArmAngle",
                    text: formatMessage({ id: 'ROBOT_ARM_GET_ARM_ANGLE' }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "PART",
                            defaultValue: "chassis"
                        }
                    }
                },
                {
                    opcode: "armCoord",
                    text: formatMessage({ id: 'ROBOT_ARM_COORD' }),
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
                    opcode: "armReset",
                    text: formatMessage({ id: 'ROBOT_ARM_RESET' }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "armMotion",
                    text: formatMessage({ id: 'ROBOT_ARM_MOTION'}),
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
                    opcode: "getAppCommand",
                    text: formatMessage({ id: 'ROBOT_ARM_GET_COMMAND' }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.NUMBER,
                            menu: "SIGNAL",
                            defaultValue: "28"
                        }
                    }
                },
                {
                    opcode: "getAppCommandData",
                    text: formatMessage({ id: 'ROBOT_ARM_GET_COMMAND_DATA'}),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "SIGNALDATA",
                            defaultValue: "Claws_Silde_Angle"
                        }
                    }
                },
            ],
            menus: {
                SERVER:{
                    items:[
                        {text:formatMessage({ id: 'ROBOT_ARM_WEB_SERVER' }),value:"web"},
                        {text:"app",value:"app"},
                    ]
                },
                DIRECTION: {
                    items: [
                        {
                            text: formatMessage({ id: 'carMotor.front' }),
                            value: "forward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.back' }),
                            value: "backward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.left' }),
                            value: "left"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.right' }),
                            value: "right"
                        },
                        // {
                        //     text: formatMessage({ id: 'carMotor.lf' }),
                        //     value: "leftUp"
                        // },
                        // {
                        //     text: formatMessage({ id: 'carMotor.lr' }),
                        //     value: "leftDown"
                        // },
                        // {
                        //     text: formatMessage({ id: 'carMotor.rf' }),
                        //     value: "rightUp"
                        // },
                        // {
                        //     text: formatMessage({ id: 'carMotor.rr' }),
                        //     value: "rightDown"
                        // },
                        {
                            text: formatMessage({ id: 'carMotor.clockwise' }),
                            value: "clockwise"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.anticlockwise' }),
                            value: "anticlockwise"
                        }
                    ]
                },
                CARMODE: {
                    items: [
                        {
                            text: formatMessage({ id: 'carMotor.move.value' }),
                            value: "move"
                        },
                        {
                            text: 'LED',
                            value: "led"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' }),
                            value: "buzzer"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.roundTrack' }),
                            value: "roundTrack"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.8track' }),
                            value: "8track"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.avoidance' }),
                            value: "avoidance"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.follow' }),
                            value: "follow"
                        }
                    ]
                },
                CARTYPE: {
                    items: [
                        {
                            text: formatMessage({ id: 'carMotor.forward' }),
                            value: "63"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.backward' }),
                            value: "65"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.leftMove' }),
                            value: "61"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.rightMove' }),
                            value: "62"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.clockwise' }),
                            value: "66"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.anticlockwise' }),
                            value: "64"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.speed' }),
                            value: "58"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.move.stop' }),
                            value: "60"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.openLED' }),
                            value: "82"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.closeLED' }),
                            value: "83"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' })+'1',
                            value: "84"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' })+'2',
                            value: "85"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' })+'3',
                            value: "86"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.buzzer' })+'4',
                            value: "87"
                        },
                        { text: formatMessage({ id: 'carMotor.roundTrack' }), value: "67" },
                        { text: formatMessage({ id: 'carMotor.8track' }), value: "59" },
                        {
                            text: formatMessage({ id: 'carMotor.avoidance' }),
                            value: "69"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.follow' }),
                            value: "68"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.slider' }),
                            value: "81"
                        }
                    ]
                },
                PART: {
                    items: [
                        { text: 'chassis', value: 'chassis' },
                        { text: 'shoulder', value: 'shoulder' },
                        { text: 'elbow', value: 'elbow' },
                        { text: 'claws', value: 'claws' },
                        { text: 'wrist', value: 'wrist' }
                    ]
                },
                ARM_MOTION: {
                    items: [
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE1'}), value: "1" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE2'}), value: "2" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE3'}), value: "3" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE4'}), value: "4" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE5'}), value: "5" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE6'}), value: "6" },
                        { text: formatMessage({ id: 'ROBOT_ARM_KEEP'}), value: "keep" },
                        { text: formatMessage({ id: 'ROBOT_ARM_RUN'}), value: "run" },
                        { text: formatMessage({ id: 'ROBOT_ARM_CLEAR'}), value: "clear" }
                    ]
                },
                SERVO_PIN: {
                    items: servo
                },
                SIGNALDATA: {
                    items: [
                        { text: formatMessage({ id: 'ROBOT_ARM_CLAWS'}), value: "Claws_Silde_Angle" },
                        { text: formatMessage({ id: 'ROBOT_ARM_ELBOW'}), value: "Elbow_Silde_Angle" },
                        { text: formatMessage({ id: 'ROBOT_ARM_SHOULDER'}), value: "Shoulder_Silde_Angle" },
                        { text: formatMessage({ id: 'ROBOT_ARM_CHASSIS'}), value: "Chassis_Silde_Angle" },
                        { text: formatMessage({ id: 'arm_car.arm.wrist'}), value: "Wrist_Silde_Angle" },
                        { text: formatMessage({ id: 'ROBOT_ARM_X'}), value: "PTP_X" },
                        { text: formatMessage({ id: 'ROBOT_ARM_Y'}), value: "PTP_Y" },
                        { text: formatMessage({ id: 'ROBOT_ARM_Z'}), value: "PTP_Z" },
                        // {text: "小车速度", value: "Car_Speed"}
                    ]
                },
                SIGNAL: {
                    items: [
                        { text: formatMessage({ id: 'ROBOT_ARM_CLAWS_SLIDE' }), value: "28" },
                        { text: formatMessage({ id: 'arm_car.arm.wristSlide' }), value: "30" },
                        { text: formatMessage({ id: 'ROBOT_ARM_ELBOW_SLIDE' }), value: "27" },
                        { text: formatMessage({ id: 'ROBOT_ARM_SHOULDER_SLIDE' }), value: "26" },
                        { text: formatMessage({ id: 'ROBOT_ARM_CHASSIS_SLIDE' }), value: "25" },
                        { text: formatMessage({ id: 'ROBOT_ARM_CLAWS_INPUT' }), value: "24" },
                        { text: formatMessage({ id: 'arm_car.arm.wristInput' }), value: "29" },
                        { text: formatMessage({ id: 'ROBOT_ARM_ELBOW_INPUT' }), value: "23" },
                        { text: formatMessage({ id: 'ROBOT_ARM_SHOULDER_INPUT' }), value: "22" },
                        { text: formatMessage({ id: 'ROBOT_ARM_CHASSIS_INPUT' }), value: "21" },
                        { text: formatMessage({ id: 'ROBOT_ARM_DATA_RESRE' }), value: "35" },
                        { text: formatMessage({ id: 'ROBOT_ARM_KEEP_STATE' }), value: "31" },
                        { text: formatMessage({ id: 'ROBOT_ARM_STOP' }), value: "33" },
                        { text: formatMessage({ id: 'ROBOT_ARM_START' }), value: "32" },
                        { text: formatMessage({ id: 'ROBOT_ARM_RUN' }), value: "34" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE1' }), value: "41" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE2' }), value: "42" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE3' }), value: "43" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE4' }), value: "44" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE5' }), value: "45" },
                        { text: formatMessage({ id: 'ROBOT_ARM_MODE6' }), value: "46" },
                        { text: formatMessage({ id: 'ROBOT_ARM_XYZ' }), value: "54" },
                        { text: formatMessage({ id: 'ROBOT_ARM_ZERO' }), value: "70" }
                    ]
                },
                CARSIGNALDATA:{
                    items:[
                        {text:formatMessage({ id: 'carMotor.speed' }),value:"Car_Speed"},
                        {text:formatMessage({ id: 'carMotor.slider' }),value:"SliderAngle"},
                    ]
                }
            }
        }
    }

    carMove() { }

    carRotate() { }

    carStop() { }

    carSetSpeed() { }

    carMode() { }

    carExecute() { }

    aabutton(){}

    aaaaa(){}
}

module.exports = Scratch3CarMotor