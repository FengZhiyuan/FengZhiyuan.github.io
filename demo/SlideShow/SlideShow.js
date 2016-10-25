var images = [
    'http://img.hb.aicdn.com/c04068ab0b9098f381fc42cb65cb34c8907d32e313330-8Ql2rF_fw658',
    'http://img.hb.aicdn.com/06d53b3aab780c38648b26f0a0941c85ce15bf44bea8d-NBtbp0_fw658',
    'http://img.hb.aicdn.com/55537e70e4381a5ad1ae55cdaf300001b625a415d1f5-DNVAu8_fw658',
    'http://img.hb.aicdn.com/55562078a2b43afee9defb6852fe9e257b2081bea06a-hwdR8l_fw658',
]
var position = 'body'
var SlideShow = function(images, position) {
    var log = function() {
        console.log.apply(console, arguments)

    }
    // 切换图片
    var play = function(offset) {
        var numberOfImgs = $('.feng-slide-images').data('img')
        var activeIndex = $('.feng-slide-images').data('active')
        var i = (activeIndex + numberOfImgs + offset) % numberOfImgs
        $('.feng-slide-images').data('active', i)
        $('.feng-slide-img').removeClass('feng-slide-active')
        var activeImg = $($('.feng-slide-img')[i])
        activeImg.addClass('feng-slide-active')
        $('.feng-slide-t').removeClass('feng-slide-t-active')
        var activeThumbnail = $($('.feng-slide-t')[i])
        activeThumbnail.addClass('feng-slide-t-active')

    }
    var playNext = function() {
        play(1)
    }
    var playPrev = function() {
         play(-1)
    }

    // 绑定left、right button
    var bindEventButton = function() {
        $('.feng-slide-button').on('click', function(event) {
            var button = $(event.target)
            if (button.hasClass('feng-slide-left')) {
                playPrev()
            }else {
                playNext()
            }
        })
        // 隐藏按钮
        $('.feng-slide-main').hover(function() {
            $('.feng-slide-button').removeClass('feng-slide-button-hide')
        },function() {
            $('.feng-slide-button').addClass('feng-slide-button-hide')
        })
    }

    // 绑定Thumbnail
    var bindEventThumbnail = function() {
        $('.feng-slide-t').on('click mouseover', function(event) {
            var Thumbnail = $(event.target)
            var i = Thumbnail.data('index')
            $('.feng-slide-images').data('active', i)
            var activeImg = $($('.feng-slide-img')[i])
            // $('.feng-slide-active').fadeOut()
            $('.feng-slide-img').removeClass('feng-slide-active')
            activeImg.addClass('feng-slide-active')
            var activeThumbnail = $($('.feng-slide-t')[i])
            $('.feng-slide-t').removeClass('feng-slide-t-active')
            activeThumbnail.addClass('feng-slide-t-active')
            // 鼠标移出后，取消缩略图激活效果，并将激活效果目前展示的图像缩略图
            $('.feng-slide-t').hover(function() {
                // 用mouseover更好
            },function() {
                $('.feng-slide-t').removeClass('feng-slide-t-active')
                $($('.feng-slide-t')[i]).addClass('feng-slide-t-active')
            })
        })
    }

    // 轮播延时设置
    var bindTime = function() {
        var main = $('.feng-slide-main')
        var timeId = setInterval(playNext, 3000)
        main.data('timeId', timeId)
        main.hover(function() {
            var timeId = main.data('timeId')
            clearInterval(timeId)
        },function() {
            var timeId = setInterval(playNext, 3000)
            main.data('timeId', timeId)
        })
    }

    // image 为图片地址数组,position为要插入组件的位置(为DOM参数)
    var craetMain = function(images, position) {
        var css = `
        <style media="screen">
        body {
        }
        .vertical-center {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            /*轮播图主框架*/
            .feng-slide-main {
                position: relative;
                width: 600px;
                height: auto;
                overflow: hidden;
                margin: 50px auto;
                /*border: 1px solid black;*/
            }
            /*图片框架*/
            .feng-slide-images {
                position: relative;
            }
            /*轮播图 图片*/
            .feng-slide-img {
                display: none;
                width: 600px;
                height: 400px;
            }
            /*显示当前图片*/
            .feng-slide-active {
                display: block;
            }
            /*左右按钮*/
            .feng-slide-button-hide {
                display: none;
            }
            .feng-slide-button {
                opacity: 0.7;
                width: 20px;
                padding: 0;
                width: 12px;
                height: 35px;
            }
            /*左 按钮*/
            .feng-slide-left {
                left: 0;
            }
            /*右 按钮*/
            .feng-slide-right {
                right:  0;
            }
            /*缩略图框架*/
            .feng-slide-thumbnail {
                position: relative;
                text-align: center;
                background-color: white;
                width: auto;
                overflow: auto;
                padding: 0;

            }
            /*缩略图*/
            .feng-slide-t {
                width: 66px;
                height: 44px;
                margin: 0px -2px;
                padding: 0px;
                overflow: hidden;
                border: 5px solid white;
            }
            /*激活缩略图*/
            .feng-slide-t-active {
                border: 5px solid #d6b3ff;
            }
        `
        // 插入css
        $('head').append(css)
        var n = images.length
        var main = `
        <div class="feng-slide-main" data-timeId="null">
            <div class="feng-slide-images"  data-active="0" data-img="${n}" >
                <button type="button" class="feng-slide-button feng-slide-left vertical-center feng-slide-button-hide" name="button">&lt</button>
                <button type="button" class="feng-slide-button feng-slide-right vertical-center feng-slide-button-hide" name="button">&gt</button>
            </div>
            <div class="feng-slide-thumbnail">
            </div>
        </div>
        `
        // 插入html主体
        $(position).append(main)
        // 插入图片及thumbnail
        $.each(images, function(i, val) {
            var img = `
            <img src="${val}" class="feng-slide-img" alt="" />
            `
            var thumbnail = `
            <img src="${val}" class="feng-slide-t" data-index="${i}"alt="" />
            `
            $('.feng-slide-images').append(img)
            $('.feng-slide-thumbnail').append(thumbnail)

        })
        $($('.feng-slide-img')[0]).addClass('feng-slide-active')
        $($('.feng-slide-t')[0]).addClass('feng-slide-t-active')
    }

    craetMain(images, position)
    bindEventButton()
    bindEventThumbnail()
    bindTime()
}
SlideShow(images, position)
