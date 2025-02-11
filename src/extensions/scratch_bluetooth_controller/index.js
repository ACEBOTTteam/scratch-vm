const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class Scratch3BluetoothController {
    constructor(runtime) {
        this.runtime = runtime

    }

    getInfo() {
        return {
            id: "bluetoothController",
            name: formatMessage({ id: 'carMotor.bluetoothController.expansion.name'}),
            blockIconURL: iconURI,
            // showStatusButton: true,
            blocks: [
                {
                    opcode: "connectHandShank",
                    text: formatMessage({ id: 'carMotor.bluetoothController.connect'}),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: '20:00:00:00:14:51'
                        }
                    }
                },
                {
                    opcode: "isConnectHandShank",
                    text: formatMessage({ id: 'carMotor.bluetoothController.isConnect'}),
                    blockType: BlockType.BOOLEAN
                },
                {
                    opcode: "handShankButtons",
                    text: formatMessage({ id: 'carMotor.bluetoothController.buttons'}),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "Buttons",
                            defaultValue: "l1"
                        },
                        TWO: {
                            type: ArgumentType.STRING,
                            menu: "Buttons_ACTION",
                            defaultValue: "down"
                        }
                    }
                },
                {
                    opcode: "HandShankDisconnect",
                    text: formatMessage({ id: 'carMotor.bluetoothController.disConnect'}),
                    blockType: BlockType.COMMAND
                },
                {
                    opcode: "handShankIsMove",
                    text: formatMessage({ id: 'carMotor.bluetoothController.move'}),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ROCKER",
                            defaultValue: "left"
                        }
                    }
                },
                {
                    opcode: "getHandShankRockerData",
                    text: formatMessage({ id: 'carMotor.bluetoothController.getData'}),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "ROCKER",
                            defaultValue: "left"
                        },
                        TWO:{
                            type: ArgumentType.STRING,
                            menu: "AXIS",
                            defaultValue: "x"
                        }
                    }
                }
            ],
            menus: {
                Buttons:{
                    items:[
                        {text: "L1",value:"l1"},
                        {text: "L2",value:"l2"},
                        {text: "R1",value:"r1"},
                        {text: "R2",value:"r2"},
                        {text: "UP",value:"up"},
                        {text: "DOWN",value:"down"},
                        {text: "LEFT",value:"left"},
                        {text: "RIGHT",value:"right"},
                        {text: "X",value:"square"},
                        {text: "Y",value:"triangle"},
                        {text: "A",value:"cross"},
                        {text: "B",value:"circle"},
                        {text: "SELECT",value:"select"},
                        {text: "START",value:"start"},
                        {text: "PS",value:"ps"}
                    ]
                },
                ROCKER:{
                    items:[
                        {text: formatMessage({ id: 'ROBOT_ARM_LEFT_ROCKER' }),value:"left"},
                        {text: formatMessage({ id: 'ROBOT_ARM_RIGHT_ROCKER' }),value:"right"}
                    ]
                },
                AXIS:{
                    items:[
                        {text: "x",value:"x"},
                        {text: "y",value:"y"}
                    ]
                },
                Buttons_ACTION:{
                    items:[
                        {text:formatMessage({ id: 'carMotor.bluetoothController.pressDown' }),value:"down"},
                        {text:formatMessage({ id: 'carMotor.bluetoothController.undo' }),value:"up"}
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

module.exports = Scratch3BluetoothController