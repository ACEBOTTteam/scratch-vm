const readAnalogPin = (command, type) => {
    return new Promise(resolve => {
        let item = []
        window.electronAPI.onUpdateGetDate((args) => {
            let data = args.data
            const decoder = new TextDecoder();
            data = decoder.decode(data);
            if(data.trim()){
                item.push(data.trim())
            }
            //以\r\n为结尾，视为一段语句
            if (data.endsWith('\r\n')) {
                item = item.join(' ')
                //查找命令位置
                let startIndex = item.indexOf(command)
                //查找'OK'位置
                let endIndex = item.indexOf('OK')
                //判断是否存在
                if(-1!==startIndex&&-1!==endIndex&&startIndex<endIndex){
                    //截取命令和OK之前的字符
                    let subStr = item.substring(startIndex + command.length, endIndex);
                    //清除两边空格
                    subStr = subStr.trim()
                    switch (type) {
                        case 'number':
                            resolve(Number(subStr))
                            break;
                        case 'boolean':
                            let boolean = '0' === subStr ? true : false
                            resolve(boolean)
                            break;
                        default:
                            resolve(subStr)
                            break;
                    }
                }else{
                    resolve()
                }
                window.electronAPI.closeUpdateGetDate()
            }
        })
    })
}

module.exports = readAnalogPin