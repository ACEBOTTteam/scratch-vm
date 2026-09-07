const readAnalogPin = require('../util/read-analog-pin.js')

class Scratch3R4Blocks {
    constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;

        /**
         * The "counter" block value. For compatibility with 2.0.
         * @type {number}
         */
        this._counter = 0;

        this.runtime.on('RUNTIME_DISPOSED', this.clearCounter.bind(this));
    }

    binaryToHexGroups(binary) {
        // 去掉空格
        binary = binary.replace(/\s/g, '');

        // 每 4 位二进制转成 1 位十六进制
        const hex = binary
            .match(/.{4}/g)
            .map(bits => parseInt(bits, 2).toString(16).toUpperCase())
            .join('');

        // 每 3 位十六进制分组
        return hex.match(/.{3}/g).join(' ');
    }

    getPrimitives() {
        return {
            delayMS: this.delayMS,
            SERIAL_IS_READ: this.SERIAL_IS_READ,
            SERIAL_READ: this.SERIAL_READ,
            SERIAL_READ_TYPE: this.SERIAL_READ_TYPE,
            GET_NUMBER_PIN: this.GET_NUMBER_PIN,
            GET_SIMULATION_PIN: this.GET_SIMULATION_PIN,
            PWM_PIN_OUTPUT: this.PWM_PIN_OUTPUT,
            NUMBER_PIN_OUTPUT: this.NUMBER_PIN_OUTPUT,
            SYSTEM_RUN_TIME: this.SYSTEM_RUN_TIME,
            R4_RFID_Module: this.R4_RFID_Module,
            R4_IR_Receiver_Module: this.R4_IR_Receiver_Module,
            R4_IR_Receiver_get: this.R4_IR_Receiver_get,
            R4_SixAxis_Attitude_Sensor: this.R4_SixAxis_Attitude_Sensor,
            R4_Ultrasonic_Sensor: this.R4_Ultrasonic_Sensor,
            R4_Ultrasonic_Sensor_send: this.R4_Ultrasonic_Sensor_send,
            R4_Ultrasonic_Sensor_time: this.R4_Ultrasonic_Sensor_time,
            R4_getJoystickData: this.R4_getJoystickData,
            R4_Button_Module: this.R4_Button_Module,
            R4_tilt_sensor: this.R4_tilt_sensor,
            R4_Potentiometer_Module: this.R4_Potentiometer_Module,
            R4_Photoresistor_Sensor: this.R4_Photoresistor_Sensor,
            R4_Thermistor_Sensor: this.R4_Thermistor_Sensor,
            R4_Sound_Sensor: this.R4_Sound_Sensor,
            R4_PIR_Motion_Sensor: this.R4_PIR_Motion_Sensor,
            R4_DHT11_Humidity_Temperature_Sensor: this.R4_DHT11_Humidity_Temperature_Sensor,
            R4_7segment_digital_tube_init: this.R4_7segment_digital_tube_init,
            R4_7segment_digital_tube_showNumber: this.R4_7segment_digital_tube_showNumber,
            R4_7segment_digital_tube_showString: this.R4_7segment_digital_tube_showString,
            R4_7segment_digital_tube_clear: this.R4_7segment_digital_tube_clear,
            R4_7segment_digital_tube_register_init: this.R4_7segment_digital_tube_register_init,
            R4_7segment_digital_tube_register_showNumber: this.R4_7segment_digital_tube_register_showNumber,
            R4_7segment_digital_tube_register_showString: this.R4_7segment_digital_tube_register_showString,
            R4_7segment_digital_tube_register_clear: this.R4_7segment_digital_tube_register_clear,
            R4_I2C_1602_LCD_String: this.R4_I2C_1602_LCD_String,
            R4_I2C_1602_LCD_Number: this.R4_I2C_1602_LCD_Number,
            R4_I2C_1602_LCD_Clear: this.R4_I2C_1602_LCD_Clear,
            R4_I2C_1602_LCD_Model: this.R4_I2C_1602_LCD_Model,
            R4_I2C_1602_LCD_flash_mode: this.R4_I2C_1602_LCD_flash_mode,
            R4_Servo_Module: this.R4_Servo_Module,
            R4_Relay_Module: this.R4_Relay_Module,
            R4_Lattice: this.R4_Lattice,
            R4_Lattice_clear: this.R4_Lattice_clear,
            R4_Lattice_Show_Img: this.R4_Lattice_Show_Img,
            R4_Lattice_Write: this.R4_Lattice_Write,
            R4_Lattice_set_roll: this.R4_Lattice_set_roll
        }
    }

    clearCounter() {
        this._counter = 0;
    }

    //等待事件
    delayMS(args, util) {
        if (util.stackTimerNeedsInit()) {
            const duration = Math.max(0, Cast.toNumber(args.DURATION));

            util.startStackTimer(duration);
            this.runtime.requestRedraw();
            util.yield();
        } else if (!util.stackTimerFinished()) {
            util.yield();
        }
    }

    //串口是否有数据
    SERIAL_IS_READ(args) {
        let code = `R1`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //读取串口数据
    SERIAL_READ(args) {
        let code = `R2`
        let variable = readAnalogPin(code, 'string')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //从串口读取一个整数/小数
    SERIAL_READ_TYPE(args) {
        let code = `R3 ${args.TYPE}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //读取数字引脚
    GET_NUMBER_PIN(args) {
        let code = `R4 ${args.PIN}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //读取模拟引脚
    GET_SIMULATION_PIN(args) {
        let code = `R5 ${args.PIN}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //设置PWM引脚输出
    async PWM_PIN_OUTPUT(args) {
        let code = `R6 ${args.PIN_LIST} ${args.OUTPUT}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //设置数字引脚输出高、低电平
    async NUMBER_PIN_OUTPUT(args) {
        let code = `R7 ${args.PIN_LIST} ${args.OUTPUT}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //设置数字引脚输出高、低电平
    SYSTEM_RUN_TIME(args) {
        let code = `R8`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //RFID
    R4_RFID_Module(args) {
        let code = `R9`
        let variable = readAnalogPin(code, 'string')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //红外接收模块接收按键是否被按下
    R4_IR_Receiver_Module(args) {
        let code = `R10 ${args.PIN_LIST} ${args.PIN_TYPE}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //红外接收模块接收值
    R4_IR_Receiver_get(args) {
        let code = `R11 ${args.PIN_LIST} ${args.PIN_TYPE}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //六轴姿态传感器
    R4_SixAxis_Attitude_Sensor(args) {
        let code = `R12 ${args.TYPE} ${args.DIRECTION}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //超声波传感器
    R4_Ultrasonic_Sensor(args) {
        let code = `R13 ${args.PIN_LIST_1} ${args.PIN_LIST_2}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //发射超声波
    async R4_Ultrasonic_Sensor_send(args) {
        let code = `R14 ${args.PIN_LIST_1} ${args.PIN_LIST_2}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //超声波传播时间
    R4_Ultrasonic_Sensor_time(args) {
        let code = `R15 ${args.PIN_LIST_1} ${args.PIN_LIST_2}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //获取摇杆的x、y、sw值
    R4_getJoystickData(args) {
        let code = `R16 ${args.xPIN} ${args.yPIN}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //按键模块
    R4_Button_Module(args) {
        let code = `R17 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //获取倾斜传感器的值
    R4_tilt_sensor(args) {
        let code = `R18 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //滑动电阻
    R4_Potentiometer_Module(args) {
        let code = `R19 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //光敏传感器
    R4_Photoresistor_Sensor(args) {
        let code = `R20 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //热敏传感器
    R4_Thermistor_Sensor(args) {
        let code = `R21 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //声音传感器
    R4_Sound_Sensor(args) {
        let code = `R22 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //人体红外传感器
    R4_PIR_Motion_Sensor(args) {
        let code = `R23 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //DHT11温湿度传感器
    R4_DHT11_Humidity_Temperature_Sensor(args) {
        let code = `R24 ${args.PIN_LIST_1} T`
        if ('相对湿度' === args.TYPE) {
            code = `R24 ${args.PIN_LIST_1} H`
        }
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //7段数码管
    async R4_7segment_digital_tube_init(args) {
        let code = `R25 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3} ${args.PIN_LIST_4} ${args.PIN_LIST_5} ${args.PIN_LIST_6} ${args.PIN_LIST_7} ${args.PIN_LIST_8}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //7段数码管显示数字
    async R4_7segment_digital_tube_showNumber(args) {
        let code = `R26 ${args.VALUE}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }


    //7段数码管显示数字
    async R4_7segment_digital_tube_showString(args) {
        let code = `R27 ${args.STRING}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //7段数码管显示清空
    async R4_7segment_digital_tube_clear(args) {
        let code = `R28`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //7段数码管 寄存器
    async R4_7segment_digital_tube_register_init(args) {
        let code = `R29 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //7段数码管显示数字 寄存器
    async R4_7segment_digital_tube_register_showNumber(args) {
        let code = `R30 ${args.VALUE}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }


    //7段数码管显示数字
    async R4_7segment_digital_tube_register_showString(args) {
        let code = `R31 ${args.STRING}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //7段数码管显示清空
    async R4_7segment_digital_tube_register_clear(args) {
        let code = `R32`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //LCD模块显示字符
    async R4_I2C_1602_LCD_String(args) {
        let code = `R33 ${args.X} ${args.Y} ${args.STRING}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //LCD模块显示数字
    async R4_I2C_1602_LCD_Number(args) {
        let code = `R34 ${args.X} ${args.Y} ${args.NUMBER}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //LCD模块清空
    async R4_I2C_1602_LCD_Clear(args) {
        let code = `R35`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //LCD模块滚动显示字符
    async R4_I2C_1602_LCD_Model(args) {
        let code = `R36 ${args.LEFT} ${args.RIGHT} ${args.STRING} ${args.NUMBER}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //LCD模块 背光开关
    async R4_I2C_1602_LCD_flash_mode(args) {
        let code = `R37 ${args.MODEL}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //设置SG90舵机角度
    async R4_Servo_Module(args) {
        let code = `R38 ${args.PIN_LIST} ${args.ANGLE}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //直流电机
    async R4_BLDC(args) {
        let code = `R39 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.SPEED}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //控制继电器开关
    async R4_Relay_Module(args) {
        let code = `R40 ${args.PIN_LIST} ${args.TYPE}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //R4点阵屏
    async R4_Lattice(args) {

        const str = args.MATRIX2
            .match(/.{4}/g)
            .map(v => parseInt(v, 2).toString(16).toUpperCase())
            .join('')
            .match(/.{3}/g)
            .join('  ');

        let code = `A16 ${str}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //点阵屏显示
    async R4_Lattice_Show_Img(args) {

        const imgArr = ['LEDMATRIX_BLUETOOTH', 'LEDMATRIX_BOOTLOADER_ON', 'LEDMATRIX_CHIP', 'LEDMATRIX_CLOUD_WIFI', 'LEDMATRIX_DANGER', 'LEDMATRIX_EMOJI_BASIC', 'LEDMATRIX_EMOJI_HAPPY', 'LEDMATRIX_EMOJI_SAD', 'LEDMATRIX_HEART_BIG', 'LEDMATRIX_HEART_SMALL', 'LEDMATRIX_LIKE', 'LEDMATRIX_MUSIC_NOTE', 'LEDMATRIX_RESISTOR', 'LEDMATRIX_UNO']
        const index = imgArr.indexOf(args.R4_Lattice_Img)

        let code = `A17 ${index + 1}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //R4点阵屏清空
    async R4_Lattice_clear(args) {
        let code = `A18`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //点阵屏显示文字
    async R4_Lattice_Write(args) {
        let code = `A19 ${args.X} ${args.Y} ${args.VALUE}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }

    //点阵屏设置文字滚动
    async R4_Lattice_set_roll(args) {
        let DIRECTION = ""
        if (args.DIRECTION === "SCROLL_RIGHT") {
            DIRECTION = "right"
        } else if (args.DIRECTION === "SCROLL_LEFT") {
            DIRECTION = "left"
        }else{
            DIRECTION = "stop"
        }
        let code = `A20 ${args.SPEED} ${DIRECTION}`
        await window.electronAPI.clientSend('send', code + '\r\n')
    }
}

module.exports = Scratch3R4Blocks;