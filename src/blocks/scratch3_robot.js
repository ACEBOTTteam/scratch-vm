const readAnalogPin = require('../util/read-analog-pin.js')

class Scratch3RobotBlocks {
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

    getPrimitives() {
        return {
            homochromyLED: this.homochromyLED,
            IR_Receiver_Module: this.IR_Receiver_Module,
            LED_luminance: this.LED_luminance,
            Ultrasonic_Sensor: this.Ultrasonic_Sensor,
            DHT11_Humidity_Temperature_Sensor: this.DHT11_Humidity_Temperature_Sensor,
            DC_Motor_Module: this.DC_Motor_Module,
            Button_Module: this.Button_Module,
            Photoresistor_Sensor: this.Photoresistor_Sensor,
            Sound_Sensor: this.Sound_Sensor,
            PIR_Motion_Sensor: this.PIR_Motion_Sensor,
            Moisture_Sensor: this.Moisture_Sensor,
            Raindrop_Sensor: this.Raindrop_Sensor,
            SG90_Module: this.SG90_Module,
            Laser_Module: this.Laser_Module,
            P_Buzzer_Module: this.P_Buzzer_Module,
            MQ4_Gas_Sensor: this.MQ4_Gas_Sensor,
            Trace_Sensor_Set: this.Trace_Sensor_Set,
            Trace_Sensor_Get: this.Trace_Sensor_Get,
            Potentiometer_Module: this.Potentiometer_Module,
            Touch_Sensor: this.Touch_Sensor,
            Flame_Sensor: this.Flame_Sensor,
            RGB_Moudule: this.RGB_Moudule,
            set_tape_lights: this.set_tape_lights,
            tape_lights: this.tape_lights,
            Humidifier_Moudule: this.Humidifier_Moudule,
            Water_Sensor: this.Water_Sensor,
            Digit_Tube_Display_Module_Number: this.Digit_Tube_Display_Module_Number,
            Digit_Tube_Display_Module_String: this.Digit_Tube_Display_Module_String,
            BLDC: this.BLDC,
            Color_Sensor_light: this.Color_Sensor_light,
            Color_Sensor_Colors: this.Color_Sensor_Colors,
            RFID_RC522_I2C_Module: this.RFID_RC522_I2C_Module,
            I2C_1602_LCD_String: this.I2C_1602_LCD_String,
            I2C_1602_LCD_Number: this.I2C_1602_LCD_Number,
            I2C_1602_LCD_Clear: this.I2C_1602_LCD_Clear,
            I2C_1602_LCD_Model: this.I2C_1602_LCD_Model,
            I2C_1602_LCD_flash_mode: this.I2C_1602_LCD_flash_mode,
            MP3_Module: this.MP3_Module,
            MP3_Module_Play: this.MP3_Module_Play,
            MP3_Module_Volume: this.MP3_Module_Volume,
            MP3_Module_Playover: this.MP3_Module_Playover,
            Voice_Recognition_Module_Init: this.Voice_Recognition_Module_Init,
            Voice_Recognition_Module: this.Voice_Recognition_Module,
            Relay_Module: this.Relay_Module,
            OLED_Set: this.OLED_Set,
            OLED_String: this.OLED_String,
            OLED_Number: this.OLED_Number,
            OLED_Clear: this.OLED_Clear,
            KEY_BOARD: this.KEY_BOARD,
            Vibration: this.Vibration
        }
    }

    clearCounter() {
        this._counter = 0;
    }

    //红外接收模块
    IR_Receiver_Module(args) {
        let code = `A30 ${args.PIN_LIST} ${args.PIN_TYPE}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //单色LED
    async homochromyLED(args) {
        let num = null
        if ('open' === args.PIN_TYPE) {
            num = 1
        } else {
            num = 0
        }
        let code = `A2 ${args.PIN_LIST} ${num}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async LED_luminance(args) {
        let code = `A4 ${args.PIN_LIST} ${args.LUMINANCE}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //超声波传感器
    Ultrasonic_Sensor(args) {
        let code = `A6 ${args.PIN_LIST_1} ${args.PIN_LIST_2}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //DHT11温湿度传感器
    DHT11_Humidity_Temperature_Sensor(args) {
        let code = `A7 ${args.PIN_LIST_1} T`
        if ('相对湿度' === args.TYPE) {
            code = `A7 ${args.PIN_LIST_1} H`
        }
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //130 电机模块
    async DC_Motor_Module(args) {
        let code = `A5 ${args.PIN_LIST_2} ${args.PIN_LIST_1} ${args.SPEED}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //按键模块
    Button_Module(args) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //光敏传感器
    Photoresistor_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //声音传感器
    Sound_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //人体红外传感器
    PIR_Motion_Sensor(args) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //土壤湿度传感器
    Moisture_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //雨滴传感器
    Raindrop_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //SG90舵机模块
    async SG90_Module(args) {
        let code = `A8 ${args.PIN_LIST} ${args.ANGLE}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //激光模块
    async Laser_Module(args) {
        let code = `A2 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.PIN_TYPE) {
            code = `A2 ${args.PIN_LIST} 0\r\n`
        }
        await window.electronAPI.clientSend('send', code)
    }

    //无源蜂鸣器模块
    async P_Buzzer_Module(args) {
        let code = `A9 ${args.PIN_LIST} ${args.FREQUENCY} ${args.TIME}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //MQ-4气体传感器
    MQ4_Gas_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //三路巡线传感器
    async Trace_Sensor_Set(args) {
        let code = `A16 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    Trace_Sensor_Get(args) {
        let code = `A17 ${args.SELECT}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //电位器模块
    Potentiometer_Module(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //触摸传感器
    Touch_Sensor(args) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //火焰传感器
    Flame_Sensor(args) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //RGB模块
    async RGB_Moudule(args) {
        let code = `A15 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3} ${args.RED} ${args.GREEN} ${args.BLUE}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //灯带
    async set_tape_lights(args) {
        let color = args.COLOR.replace(/#/g, "");
        color = parseInt(color, 16)
        let code = `A18 ${args.PIN_LIST} ${args.COUNT} ${color}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async tape_lights(args) {
        let code = `A19 ${args.PIN_LIST} ${args.COUNT} ${args.RED} ${args.GREEN} ${args.BLUE}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //加湿器模块
    async Humidifier_Moudule(args) {
        let code = `A10 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.TYPE) {
            code = `A10 ${args.PIN_LIST} 0\r\n`
        }
        await window.electronAPI.clientSend('send', code)
    }

    //水位传感器
    Water_Sensor(args) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //四位数码管模块
    async Digit_Tube_Display_Module_Number(args) {
        let code = `A11 ${args.NUMBER}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async Digit_Tube_Display_Module_String(args) {
        let code = `A11 ${args.STRING}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //颜色传感器
    async Color_Sensor_light(args) {
        let code = `A2 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.TYPE) {
            code = `A2 ${args.PIN_LIST} 0\r\n`
        }
        await window.electronAPI.clientSend('send', code)
    }

    Color_Sensor_Colors(args) {
        let code = `A12 ${args.TYPE}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //RFID模块
    RFID_RC522_I2C_Module() {
        let code = `A13`
        let variable = readAnalogPin(code, 'string')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //BLDC
    async BLDC(args) {
        console.log(args.PIN_LIST, args.SPEED, 'args.SPEED')
        let code = `A14 ${args.PIN_LIST} ${args.SPEED}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    //I2C 1602 LCD模块
    async I2C_1602_LCD_String(args) {
        let code = `A23 ${args.X} ${args.Y} ${args.STRING}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async I2C_1602_LCD_Number(args) {
        let code = `A23 ${args.X} ${args.Y} ${args.NUMBER}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async I2C_1602_LCD_Clear(args) {
        let code = `A26 0\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async I2C_1602_LCD_Model(args) {
        let code = `A24 ${args.LEFT} ${args.RIGHT} ${args.NUMBER * 1000} ${args.STRING}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async I2C_1602_LCD_flash_mode(args) {
        let code = `A25 1\r\n`
        if (args.MODEL === 'close') {
            code = `A25 0\r\n`
        }
        await window.electronAPI.clientSend('send', code)
    }

    //MP3
    async MP3_Module(args) {
        let num = 0
        switch (args.TYPE) {
            case "start":
                num = 1
                break;
            case "pause":
                num = 2
                break;
            case "before":
                num = 3
                break;
            default:
                num = 4
                break;
        }
        let code = `A27 ${args.PIN_LIST_2} ${args.PIN_LIST_1} ${num}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async MP3_Module_Play(args) {
        let code = `A28 ${args.PIN_LIST_2} ${args.PIN_LIST_1} ${args.NUM}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async MP3_Module_Volume(args) {
        let code = `A29 ${args.PIN_LIST_2} ${args.PIN_LIST_1} ${args.NUM}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    MP3_Module_Playover(args) {
        let code = `A32 ${args.PIN_LIST_2} ${args.PIN_LIST_1}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //语音识别模块
    async Voice_Recognition_Module_Init(args) {
        let code = `A35 ${args.PIN_LIST_2}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    Voice_Recognition_Module(args) {
        let code = `A36 ${args.PIN_LIST_2}`
        let variable = readAnalogPin(code, 'number')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    //继电器
    async Relay_Module(args) {
        let code = `A2 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.TYPE) {
            code = `A2 ${args.PIN_LIST} 0\r\n`
        }
        await window.electronAPI.clientSend('send', code)
    }

    //OLED
    async OLED_Set(args) {
        let code = `A20 ${args.SIZE}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async OLED_String(args) {
        let code = `A21 ${args.X} ${args.X} ${args.STRING}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async OLED_Number(args) {
        let code = `A21 ${args.X} ${args.X} ${args.NUMBER}\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async OLED_Clear() {
        let code = `A22 0\r\n`
        await window.electronAPI.clientSend('send', code)
    }

    async KEY_BOARD(args) {
        let code = `A33 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3} ${args.PIN_LIST_4} ${args.PIN_LIST_5} ${args.PIN_LIST_6} ${args.PIN_LIST_7} ${args.PIN_LIST_8}`
        let variable = readAnalogPin(code, 'string')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }

    async Vibration(args) {
        const code = `A34 ${args.PIN_LIST}`
        let variable = readAnalogPin(code, 'boolean')
        window.electronAPI.clientSend('send', code + '\r\n')
        return variable
    }
}

module.exports = Scratch3RobotBlocks;