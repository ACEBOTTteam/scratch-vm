const formatMessage = require('format-message');
const ArgumentType = require('../../extension-support/argument-type.js');
const BlockType = require('../../extension-support/block-type.js');


const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class scratch3GetWeather {
    constructor(runtime) {
        this.runtime = runtime
        this.appid = 'fc46e13dc616d72fdba8047996c7435c'
        this.weather = null
    }

    getInfo() {
        return {
            id: "getWeather",
            name: formatMessage({id:"weather.getWeather"}),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "getWeatherInfo",
                    text: formatMessage({id:"weather.getWeatherInfo"}),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'New York'
                        },
                    }
                },
                {
                    opcode: "getWeather",
                    text: formatMessage({id:"weather.weather"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getMaxTemp",
                    text: formatMessage({id:"weather.maxTemp"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getMinTemp",
                    text: formatMessage({id:"weather.minTemp"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getPressure",
                    text: formatMessage({id:"weather.pressure"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getHumidity",
                    text: formatMessage({id:"weather.humidity"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getSpeed",
                    text: formatMessage({id:"weather.speed"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getDeg",
                    text: formatMessage({id:"weather.deg"}),
                    blockType: BlockType.REPORTER,
                },
                {
                    opcode: "getVisibility",
                    text: formatMessage({id:"weather.visibility"}),
                    blockType: BlockType.REPORTER,
                }
            ]
        }
    }

    async getWeatherInfo(args) {
        let placeName = args.ONE
        let item = null
        const language = this.runtime.getCurrentLocale()
        const coordinateUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${placeName}&appid=${this.appid}`
        await fetch(coordinateUrl)
            .then((response) => response.json())
            .then((data) => { item = data[0] });

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=${this.appid}&units=metric&lang=${language}`
        await fetch(weatherUrl)
            .then((response) => response.json())
            .then((data) => {
                this.weather = data
            });
    }

    getWeather() {
        if (this.weather) {
            return this.weather.weather[0].description
        }
        return null
    }

    getMaxTemp() {
        if (this.weather) {
            return this.weather.main.temp_max
        }
    }

    getMinTemp() {
        if (this.weather) {
            return this.weather.main.temp_min
        }
    }

    getPressure() {
        // 'hPa'
        if (this.weather) {
            return this.weather.main.pressure
        }
    }

    getHumidity() {
        // '%'
        if (this.weather) {
            return this.weather.main.humidity
        }
    }

    getSpeed() {
        // 'm/s'
        if (this.weather) {
            return this.weather.wind.speed
        }
    }

    getDeg() {
        if (this.weather) {
            return this.weather.wind.deg
        }
    }

    getVisibility() {
        if (this.weather) {
            return this.weather.visibility
        }
    }

}

module.exports = scratch3GetWeather