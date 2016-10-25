// 待优化
var log = function() {
    console.log.apply(console, arguments)
}
// 返回检查用户名后的结果
var checkName = function() {
    var nameInput = document.querySelector('#id-input-name')
    var name = nameInput.value
    var len = name.length
    var letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
    // 检查长度
    if (len < 2 || len > 10) {
        return false
    }

    for (var i = 0; i < name.length; i++) {
        var char = name[i]
        // 检查是否包含非要求字符
        if (!all.includes(char)) {
            return false
        }
        // 检查首尾
        if (i === 0) {
            if (!letter.includes(char)) {
                return false
            }
        }else if (i == len - 1) {
            if (char === '_') {
                return false
            }
        }
    }
    return true
}

//返回插入警告的元素代码
var warnLine = function() {
    var warn =`<h1 id='id-h1-warn'>用户名错误</h1>`
    return warn
}

//开关套路
var toggleClass = function(element, cls) {
    if (element.classList.contains(cls)) {
        element.classList.remove(cls)
    }else {
        element.classList.add(cls)
    }
}


// 点击 Log In 按钮，触发检查用户名
var bindEventLogin = function() {
    var loginButton = document.querySelector('#id-button-login')
    loginButton.addEventListener('click', function() {
        var nameCheck = checkName()
        var errorWarn = document.querySelector('.h1-login-warn')
        if (nameCheck) {
            errorWarn.classList.add('warn-hide')
            log('检查合格')
        }else {
            errorWarn.classList.remove('warn-hide')
        }
    })
}


// 事件函数集合
var bindEvents = function() {
    bindEventLogin()
}

// 主函数
var __main = function() {
    bindEvents()
}

__main()
