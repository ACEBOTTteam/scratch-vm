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
        }
    }

    clearCounter() {
        this._counter = 0;
    }

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
}

module.exports = Scratch3RobotBlocks;