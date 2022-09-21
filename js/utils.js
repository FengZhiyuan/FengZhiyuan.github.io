const log = console.log.bind(console)

const $ = document.querySelector.bind(document)

const Ajax = function(request) {
    let req = {
        url: request.url,
        // 传对象 自动转JSON
        data: JSON.stringify(request.data) || null,
        method: request.method || 'POST',
        header: request.header || {},
        contentType: request.contentType || 'application/json',
        callback: request.callback || function(res) {
            console.log('读取成功！')
        }
    }
    let r = new XMLHttpRequest()
    let promise = new Promise(function(resolve, reject) {
        r.open(req.method, req.url, true)
        r.setRequestHeader('Content-Type', req.contentType)
        // setHeader
        Object.keys(req.header).forEach(key => {
            r.setRequestHeader(key, req.header[key])
        })
        r.onreadystatechange = function() {
            if (r.readyState === 4) {
                let res = r.response
                // 回调函数
                req.callback(res)
                // Promise 成功
                resolve(res)
            }
        }
        r.onerror = function (err) {
            reject(err)
        }
        if (req.method === 'GET') {
            r.send()
        } else {
            // POST
            r.send(req.data)
        }
    })
    return promise
}
