var _main = function() {
    // 当前时间
    var currentTime = function() {
        var d = new Date()
        var month = d.getMonth() + 1
        var date = d.getDate()
        var hours = d.getHours()
        var minutes = d.getMinutes()
        var seconds = d.getSeconds()
        var timeString = `${month}月${date}日`
        return timeString
    }

    // 选择头像
    var bindEventImg = function() {
       $('.img-chose').on('click', function(event) {
           var target = $(event.target)
           $('.img-chose').removeClass('active-img')
           target.addClass('active-img')
       })
    }

    // 统计字数
    var bindEventCount = function() {
        $('textarea').on('input', function(event) {
            var length = document.querySelector('textarea').textLength
            var remain = 140 - length
            if (remain >= 0) {
                $('.text-count').text(`${remain}`)
            }else {
                var t =`
                <div class="div-submit">
                    <span class="vertical-center">已超过<span class="text-count over">${-remain}</span>个字</span>
                    <button type="button" name="button" class=" btn-submit">提交</button>
                </div>
                `
            $('.div-submit').remove()
            $('.div-submit-container').append(t)
            }
        })
    }

    // 提交按钮
    var bindEventSubmit = function() {
        $('.btn-submit').on('click', function(event) {
            var inputText = $('textarea').val()
            if (inputText !== '') {
                var name = $('.input-name').val()
                if (name === '') {
                    name = '匿名'
                }
                var img = $('.active-img').attr('src')
                var time = currentTime()
                $('.div-insert-container').append(inputInsert(name, img, inputText, time))
                $('textarea').val('')
                $('.input-name').val('')
                $('textarea').blur()
                $('.text-count').text(140)
                $('.img-chose').removeClass('active-img')
                $($('.img-chose')[0]).addClass('active-img')
            }
        })
    }

    // 插入新发言
    var inputInsert = function(name, img, inputText, time) {
        var t = `
            <div class="div-insert">
                <div class="div-img">
                    <img width=50 height=50 src="${img}" alt="头像" />
                </div>
                <div class="div-comments">
                    <p class="p-comment-name">${name}</p>
                    <p class="p-comment-text">${inputText}</p>
                    <div class="div-comment-time">${time}</div>
                </div>
            </div>
        `
        return t
    }

    // Events
    var bindEvents = function() {
        bindEventSubmit()
        bindEventCount()
        bindEventImg()
    }

    bindEvents()
    }

_main()
