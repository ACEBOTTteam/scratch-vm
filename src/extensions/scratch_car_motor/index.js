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
            name: formatMessage({ id: 'carMotor.categoryName' }),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
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
                    opcode: "carStop",
                    text: formatMessage({ id: 'carMotor.stop' }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "carInit",
                    text: formatMessage({ id: 'carMotor.carInit' }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "carGetInstruct",
                    text: formatMessage({ id: 'carMotor.carGetInstruct' }),
                    blockType: BlockType.BOOLEAN,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'CARTYPE',
                            defaultValue: 'forward'
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
                {
                    opcode: "cargetInstructData",
                    text: formatMessage({ id: 'carMotor.cargetInstructData' }),
                    blockType: BlockType.REPORTER
                }
            ],
            menus: {
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
                            value: "forward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.backward' }),
                            value: "backward"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.leftMove' }),
                            value: "left"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.rightMove' }),
                            value: "right"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.clockwise' }),
                            value: "clockwise"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.anticlockwise' }),
                            value: "anticlockwise"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.speed' }),
                            value: "speed"
                        },
                        {
                            text: formatMessage({ id: 'carMotor.move.stop' }),
                            value: "stop"
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
                            text: formatMessage({ id: 'carMotor.track' }),
                            value: "track"
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
}

module.exports = Scratch3CarMotor