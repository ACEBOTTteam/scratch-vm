// const BluetoothSerialPort = require('bluetooth-serial-port').BluetoothSerialPort;
// const btSerial = new BluetoothSerialPort();

class BuiltInBT {
    constructor(runtime) {
        this._runtime = runtime;
        this._availablePeripherals = {};
    }

    search() {
        btSerial.on('found', (address, name) => {
            this._availablePeripherals[address] = name;
            this._runtime.emit(
                this._runtime.constructor.PERIPHERAL_LIST_UPDATE,
                this._availablePeripherals
            );
        })
        btSerial.inquire(); // 开始搜索设备
    }
}

module.exports = BuiltInBT;