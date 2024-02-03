const readAnalogPin = (command, type) => {
    return new Promise(resolve => {
        let item = []
        window.electronAPI.onUpdateGetDate((args) => {
            let data = args.data
            const decoder = new TextDecoder();
            data = decoder.decode(data);
            item.push(data)
            console.log(data, data.endsWith('\r\n'), 'data')
            //以\r\n为结尾，视为一段语句
            if (data.endsWith('\r\n')) {
                item = item.join(' ')
                let arr = item.split(' ')
                item = ['']
                //拆分为三段
                arr.forEach((element, index) => {
                    if (index < arr.length - 2) {
                        item[0] += element + ' '
                    } else {
                        item.push(element)
                    }
                });
                item[0] = item[0].trim()
                console.log(item, 'item')
                //判断第一句是否与发送的命令一致
                if (item[0] === command) {
                    const returnValue = item[item.length - 2].trim()
                    console.log(returnValue, 'returnValue')
                    switch (type) {
                        case 'number':
                            resolve(Number(returnValue))
                            break;
                        case 'boolean':
                            let boolean = '0' === returnValue ? true : false
                            resolve(boolean)
                        default:
                            resolve(returnValue)
                            break;
                    }
                } else {
                    resolve()
                }
                window.electronAPI.closeUpdateGetDate()
            }
        })
    })
}

module.exports = readAnalogPin