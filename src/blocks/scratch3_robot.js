const readAnalogPin  = require('../util/read-analog-pin.js')

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
            Humidifier_Moudule: this.Humidifier_Moudule,
            Water_Sensor: this.Water_Sensor,
            Digit_Tube_Display_Module_Number: this.Digit_Tube_Display_Module_Number,
            Digit_Tube_Display_Module_String: this.Digit_Tube_Display_Module_String,
            Color_Sensor_light: this.Color_Sensor_light,
            Color_Sensor_Colors: this.Color_Sensor_Colors,
            RFID_RC522_I2C_Module: this.RFID_RC522_I2C_Module,
            BLDC: this.BLDC,

        }
    }

    clearCounter() {
        this._counter = 0;
    }

    //单色LED
    homochromyLED(args, util) {
        let num = null
        if ('open' === args.PIN_TYPE) {
            num = 1
        } else {
            num = 0
        }
        let code = `A2 ${args.PIN_LIST} ${num}\r\n`
        window.electronAPI.clientSend('send', code).then(() => {
        })

    }

    //超声波传感器
    Ultrasonic_Sensor(args, util) {
        let code = `A6 ${args.PIN_LIST_1} ${args.PIN_LIST_2}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //DHT11温湿度传感器
    DHT11_Humidity_Temperature_Sensor(args, util) {
        let code = `A7 ${args.PIN_LIST_1} T`
        if ('相对湿度' === args.TYPE) {
            code = `A7 ${args.PIN_LIST_1} H`
        }
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //130 电机模块
    DC_Motor_Module(args, util) {
        let code = `A5 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.SPEED}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    //按键模块
    Button_Module(args, util) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'boolean')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //光敏传感器
    Photoresistor_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //声音传感器
    Sound_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //人体红外传感器
    PIR_Motion_Sensor(args, util) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //土壤湿度传感器
    Moisture_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //雨滴传感器
    Raindrop_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //SG90舵机模块
    SG90_Module(args, util) {
        let code = `A8 ${args.PIN_LIST} ${args.ANGLE}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    //激光模块
    Laser_Module(args, util) {
        let code = `A2 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.PIN_TYPE) {
            code = `A2 ${args.PIN_LIST} 0\r\n`
        }
        window.electronAPI.clientSend('send', code)
    }

    //无源蜂鸣器模块
    P_Buzzer_Module(args, util) {
        let code = `A9 ${args.PIN_LIST} ${args.FREQUENCY} ${args.TIME}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    //MQ-4气体传感器
    MQ4_Gas_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //三路巡线传感器
    Trace_Sensor_Set(args, util) {
        let code = `A16 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    Trace_Sensor_Get(args, util) {
        let code = `A17 ${args.SELECT}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //电位器模块
    Potentiometer_Module(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //触摸传感器
    Touch_Sensor(args, util) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'boolean')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //火焰传感器
    Flame_Sensor(args, util) {
        let code = `A1 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //RGB模块
    RGB_Moudule(args, util) {
        let code = `A15 ${args.PIN_LIST_1} ${args.PIN_LIST_2} ${args.PIN_LIST_3} ${args.RED} ${args.GREEN} ${args.BLUE}\r\nA1 \r\n`
        window.electronAPI.clientSend('send', code)
    }

    //加湿器模块
    Humidifier_Moudule(args, util) {
        let code = `A10 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.TYPE) {
            code = `A10 ${args.PIN_LIST} 0\r\n`
        }
        window.electronAPI.clientSend('send', code)
    }

    //水位传感器
    Water_Sensor(args, util) {
        let code = `A3 ${args.PIN_LIST}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //四位数码管模块
    Digit_Tube_Display_Module_Number(args, util) {
        let code = `A11 ${args.NUMBER}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    Digit_Tube_Display_Module_String(args, util) {
        let code = `A11 ${args.STRING}\r\n`
        window.electronAPI.clientSend('send', code)
    }

    //颜色传感器
    Color_Sensor_light(args, util) {
        let code = `A2 ${args.PIN_LIST} 1\r\n`
        if ('close' === args.TYPE) {
            code = `A2 ${args.PIN_LIST} 0\r\n`
        }
        window.electronAPI.clientSend('send', code)
    }

    Color_Sensor_Colors(args, util) {
        let code = `A12 ${args.TYPE}`
        let variable = readAnalogPin(code,'number')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //RFID模块
    RFID_RC522_I2C_Module(args, util) {
        let code = `A13`
        let variable = readAnalogPin(code,'string')
        window.electronAPI.clientSend('send', code+'\r\n')
        return variable
    }

    //BLDC
    BLDC(args, util) {
        let code = `A14 ${args.PIN_LIST} ${args.SPEED}\r\n`
        window.electronAPI.clientSend('send', code)
    }
}

module.exports = Scratch3RobotBlocks;