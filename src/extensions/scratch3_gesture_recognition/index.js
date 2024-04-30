const formatMessage = require('format-message');
const html2canvas = require('html2canvas');
const ArgumentType = require('../../extension-support/argument-type.js');
const BlockType = require('../../extension-support/block-type.js');
const setImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI0MDE1ODI3OTQ0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMDIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTc2LjIxMzMzMyA0MjAuOTc3Nzc4Yy0yLjI3NTU1Ni0xOC4yMDQ0NDQtMTMuNjUzMzMzLTM0LjEzMzMzMy0zNC4xMzMzMzMtMzguNjg0NDQ1aC0yLjI3NTU1NmMtNDAuOTYtOS4xMDIyMjItNzAuNTQyMjIyLTMxLjg1Nzc3OC05My4yOTc3NzctNzAuNTQyMjIyLTIwLjQ4LTM0LjEzMzMzMy0yNy4zMDY2NjctNzcuMzY4ODg5LTEzLjY1MzMzNC0xMTYuMDUzMzMzIDYuODI2NjY3LTE1LjkyODg4OSAyLjI3NTU1Ni0zNi40MDg4ODktMTMuNjUzMzMzLTUwLjA2MjIyMi00My4yMzU1NTYtNDAuOTYtOTUuNTczMzMzLTcyLjgxNzc3OC0xNTQuNzM3Nzc4LTkzLjI5Nzc3OC0xNS45Mjg4ODktNi44MjY2NjctMzQuMTMzMzMzLTIuMjc1NTU2LTUwLjA2MjIyMiAxMy42NTMzMzNDNTg5LjM2ODg4OSA5Ny44NDg4ODkgNTUwLjY4NDQ0NCAxMTMuNzc3Nzc4IDUwNy40NDg4ODkgMTEzLjc3Nzc3OGMtMzguNjg0NDQ0IDAtNzUuMDkzMzMzLTE4LjIwNDQ0NC0xMDYuOTUxMTExLTUwLjA2MjIyMi0xOC4yMDQ0NDQtMTguMjA0NDQ0LTM2LjQwODg4OS0xNS45Mjg4ODktNTAuMDYyMjIyLTExLjM3Nzc3OC01OS4xNjQ0NDQgMjUuMDMxMTExLTEwOS4yMjY2NjcgNTQuNjEzMzMzLTE1Mi40NjIyMjMgOTEuMDIyMjIyLTE1LjkyODg4OSAxMS4zNzc3NzgtMjIuNzU1NTU2IDMxLjg1Nzc3OC0xNS45Mjg4ODkgNTAuMDYyMjIyIDExLjM3Nzc3OCA0My4yMzU1NTYgNi44MjY2NjcgODQuMTk1NTU2LTEzLjY1MzMzMyAxMjAuNjA0NDQ1LTE4LjIwNDQ0NCAzMS44NTc3NzgtNTIuMzM3Nzc4IDU2Ljg4ODg4OS05My4yOTc3NzggNjguMjY2NjY2LTIuMjc1NTU2IDAtMi4yNzU1NTYgMC00LjU1MTExMSAyLjI3NTU1Ni0xMy42NTMzMzMgNi44MjY2NjctMjIuNzU1NTU2IDE4LjIwNDQ0NC0yOS41ODIyMjIgMzQuMTMzMzMzdjIuMjc1NTU2Yy02LjgyNjY2NyAzNC4xMzMzMzMtOS4xMDIyMjIgNjMuNzE1NTU2LTkuMTAyMjIyIDkzLjI5Nzc3OCAwIDI5LjU4MjIyMiAyLjI3NTU1NiA2My43MTU1NTYgOS4xMDIyMjIgOTEuMDIyMjIyIDIuMjc1NTU2IDE4LjIwNDQ0NCAxMy42NTMzMzMgMzQuMTMzMzMzIDM0LjEzMzMzMyAzOC42ODQ0NDRoMi4yNzU1NTZjNDAuOTYgOS4xMDIyMjIgNzAuNTQyMjIyIDMxLjg1Nzc3OCA5My4yOTc3NzggNzAuNTQyMjIyIDIwLjQ4IDM0LjEzMzMzMyAyNy4zMDY2NjcgNzcuMzY4ODg5IDEzLjY1MzMzMyAxMTYuMDUzMzM0LTYuODI2NjY3IDE1LjkyODg4OS0yLjI3NTU1NiAzNi40MDg4ODkgMTMuNjUzMzMzIDUwLjA2MjIyMiA0My4yMzU1NTYgNDAuOTYgOTUuNTczMzMzIDcyLjgxNzc3OCAxNTcuMDEzMzM0IDkzLjI5Nzc3OCAyLjI3NTU1NiAwIDQuNTUxMTExIDIuMjc1NTU2IDkuMTAyMjIyIDIuMjc1NTU1aDYuODI2NjY3YzExLjM3Nzc3OCAwIDI1LjAzMTExMS00LjU1MTExMSAzNi40MDg4ODgtMTUuOTI4ODg5IDI1LjAzMTExMS0yOS41ODIyMjIgNjMuNzE1NTU2LTQ3Ljc4NjY2NyAxMDYuOTUxMTEyLTQ3Ljc4NjY2NiAzOC42ODQ0NDQgMCA3NS4wOTMzMzMgMTguMjA0NDQ0IDEwNi45NTExMTEgNTAuMDYyMjIyIDkuMTAyMjIyIDkuMTAyMjIyIDIwLjQ4IDE1LjkyODg4OSAzMS44NTc3NzcgMTUuOTI4ODg5IDQuNTUxMTExIDAgMTEuMzc3Nzc4IDAgMTUuOTI4ODg5LTIuMjc1NTU2IDU5LjE2NDQ0NC0yNS4wMzExMTEgMTA5LjIyNjY2Ny01NC42MTMzMzMgMTUyLjQ2MjIyMy05MS4wMjIyMjIgMTUuOTI4ODg5LTkuMTAyMjIyIDIyLjc1NTU1Ni0zMS44NTc3NzggMTUuOTI4ODg4LTUwLjA2MjIyMi0xMS4zNzc3NzgtNDMuMjM1NTU2LTYuODI2NjY3LTg0LjE5NTU1NiAxMy42NTMzMzQtMTIwLjYwNDQ0NSAxOC4yMDQ0NDQtMzEuODU3Nzc4IDUyLjMzNzc3OC01Ni44ODg4ODkgOTMuMjk3Nzc4LTY4LjI2NjY2NiAyLjI3NTU1NiAwIDIuMjc1NTU2IDAgNC41NTExMTEtMi4yNzU1NTYgMTMuNjUzMzMzLTYuODI2NjY3IDIyLjc1NTU1Ni0xOC4yMDQ0NDQgMjkuNTgyMjIyLTM0LjEzMzMzM3YtMi4yNzU1NTZjNi44MjY2NjctMzQuMTMzMzMzIDkuMTAyMjIyLTYzLjcxNTU1NiA5LjEwMjIyMi05My4yOTc3NzctMi4yNzU1NTYtMzEuODU3Nzc4LTQuNTUxMTExLTYzLjcxNTU1Ni0xMS4zNzc3NzgtOTMuMjk3Nzc4eiBtLTQ2OC43NjQ0NDQgMjUwLjMxMTExMWMtODguNzQ2NjY3IDAtMTU5LjI4ODg4OS03MC41NDIyMjItMTU5LjI4ODg4OS0xNTkuMjg4ODg5czcwLjU0MjIyMi0xNTkuMjg4ODg5IDE1OS4yODg4ODktMTU5LjI4ODg4OSAxNTkuMjg4ODg5IDcwLjU0MjIyMiAxNTkuMjg4ODg5IDE1OS4yODg4ODktNzAuNTQyMjIyIDE1OS4yODg4ODktMTU5LjI4ODg4OSAxNTkuMjg4ODg5eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMTEwMyI+PC9wYXRoPjwvc3ZnPg=='
const iconURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRF////fIel5ufolZ62/2YavsPS+YZOkJmy9/j53+Hk6+zs6N/b6dfO////tDhMHAAAAA50Uk5T/////////////////wBFwNzIAAAA6ElEQVR42uzX2w6DIBAEUGDVtlr//3dLaLwgiwUd2z7MJPJg5EQWiGhGcAxBggQJEiT436CIfqXJPTn3MKNYYMSDFpoAmp24OaYgvwKnFgL2zvVTCwHrMoMi+nUQLFthaNCCa0iwclLkDgYVsQp0mzxuqXgK1MRzoCLWgkPXNN2wI/q6Kvt7u/cX0HtejN8x2sXpnpb8J8D3b0Keuhh3X975M+i0xNVbg3s1TIasgK21bQyGO+s2PykaGMYbge8KrNrssvkOWDXkErB8UuBHETjoYLkKBA8ZfuDkbwVBggQJEiR4MC8BBgDTtMZLx2nFCQAAAABJRU5ErkJggg==';

class scratch3GestureRecognition {
    constructor(runtime) {
        this.runtime = runtime
        this.Key = 'jMq8vtlI7x4nKgifJIV9BWY4BcAYVNPb'
        this.Secret = '352eeGCKseiOfKNUVId5MKaLpTifzRjj'
        this.recognizeResult = null,
        this.video = this.runtime.getVideoEl()
    }

    getInfo() {
        return {
            id: "gestureRecognition",
            name: formatMessage({ id: "gestureRecognition" }),
            blockIconURL: iconURI,
            showStatusButton: false,
            blocks: [
                {
                    opcode: "openCamera",
                    text: formatMessage({ id: 'facial_recognition.camera' }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: 'OPEN_CLOSE',
                            defaultValue: 'OPEN'
                        }
                    }
                },
                {
                    opcode: "init",
                    text: formatMessage({ id: "gestureRecognition.init" }),
                    blockType: BlockType.COMMAND,
                    arguments:{
                        ONE:{
                            type:ArgumentType.STRING,
                            defaultValue:'jMq8vtlI7x4nKgifJIV9BWY4BcAYVNPb'
                        },
                        TWO:{
                            type:ArgumentType.STRING,
                            defaultValue:'352eeGCKseiOfKNUVId5MKaLpTifzRjj'
                        },
                    }
                },
                {
                    opcode: "getGestureInfo",
                    text: formatMessage({ id: "gestureRecognition.gesture.recognition" }),
                    blockType: BlockType.COMMAND,
                },
                {
                    opcode: "getProbability",
                    text: formatMessage({ id: "gestureRecognition.result" }),
                    blockType: BlockType.REPORTER,
                    arguments: {
                        ONE: {
                            type: ArgumentType.STRING,
                            menu: "GESTURE",
                            defaultValue: 'heart_a'
                        }
                    }
                }
            ],
            menus: {
                GESTURE: {
                    acceptReporters: true,
                    items: [
                        {
                            text: formatMessage({ id: "gestureRecognition.heart_a" }),
                            value: "heart_a"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.heart_b" }),
                            value: "heart_b"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.heart_c" }),
                            value: "heart_c"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.heart_d" }),
                            value: "heart_d"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.OK" }),
                            value: "ok"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.hand_open" }),
                            value: "hand_open"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.thumb_up" }),
                            value: "thumb_up"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.thumb_down" }),
                            value: "thumb_down"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.rock" }),
                            value: "rock"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.namaste" }),
                            value: "namaste"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.palm_up" }),
                            value: "palm_up"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.fist" }),
                            value: "fist"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.index_finger_up" }),
                            value: "index_finger_up"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.double_finger_up" }),
                            value: "double_finger_up"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.victory" }),
                            value: "victory"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.big_v" }),
                            value: "big_v"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.phonecall" }),
                            value: "phonecall"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.beg" }),
                            value: "beg"
                        },
                        {
                            text: formatMessage({ id: "gestureRecognition.thanks" }),
                            value: "thanks"
                        }
                    ]
                },
                OPEN_CLOSE: {
                    acceptReporters: true,
                    items: [
                        {
                            text: formatMessage({ id: 'open' }),
                            value: "OPEN"
                        },
                        {
                            text: formatMessage({ id: 'close' }),
                            value: "CLOSE"
                        },
                    ]
                }
            }
        }
    }

    openCamera(args) {
        console.log(args)
        if ('OPEN' === args.ONE) {
            this.runtime.vm.emit('openCamera')
        } else {
            this.runtime.vm.emit('closeCamera')
        }
    }


    init(args) {
        this.Key = args[ONE]
        this.Secret = args[TOW]
    }

    async getGestureInfo() {
        let isOpen = true
        this.runtime.vm.emit('getIsOpenCamera',(data)=>{
            isOpen = data
        })
        if(!isOpen){
            return
        }
        console.log('打开视频')
        let base64 = ''
        //获取当前摄像头画面
        const canvas = await html2canvas(this.video)

        base64 = canvas.toDataURL('image/png', 1);
        //创建请求参数
        let data = new FormData();
        data.append('api_key', this.Key);
        data.append('api_secret', this.Secret);
        data.append('image_base64', base64);
        const url = `https://api-cn.faceplusplus.com/humanbodypp/v1/gesture`
        //发送请求
        await fetch(url, {
            method: "POST",
            body: data
        })
            .then((response) => { console.log(response, 'response'); return response.json() })
            .then((data) => {
                if (data.hands.length) {
                    this.recognizeResult = data.hands[0].gesture
                }
            })
        return 'success'
    }

    getProbability(args) {
        if (this.recognizeResult) {
            return this.recognizeResult[args.ONE]
        }
        return null
    }
}

module.exports = scratch3GestureRecognition