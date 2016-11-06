var log = function() {
    console.log.apply(console, arguments)
}

// 导航栏事件绑定
var bindEventNav = function() {
    // Home
    var bindEventHome = function() {
        var home = function() {
            var h = `
            <div class="div-home">
                <p class="p-home-welcome">
                    欢迎来到 <span class="span-welcome-name">冯志远</span> 的小站 <br>
                    我是一名 <span class="span-welcome-other">前端</span> 工程师 <br>
                    这里有我的简历与作品 <br>
                    如有兴趣可以与我联系 <br>
                    <span class="span-welcome-other">谢谢</span>
                </p>
                <div class="div-home-show">
                    <div class="div-show-img">
                        <img class="img-home-show" src="http://i.imgur.com/AcJb5au.png" alt="留言板" />
                        <p>
                            留言板
                        </p>
                    </div>
                    <div class="div-show-img">
                        <img class="img-home-show" src="http://i.imgur.com/0mQCeuR.png" alt="TodoLi" />
                        <p>
                            TodoList
                        </p>
                    </div>
                    <div class="div-show-img">
                        <img class="img-home-show" src="http://i.imgur.com/3qY0egQ.png" alt="轮播图" />
                        <p>
                            轮播图
                        </p>
                    </div>
                    <div class="div-show-img">
                        <img class="img-home-show" src="http://i.imgur.com/5Xu51i0.png" alt="LogIn" />
                        <p>
                            LogIn
                        </p>
                    </div>
                </div>
            </div>
            `
            return h
        }
        $('.btn-home').on('click', function(event) {
            var position = $('.div-anchor')
            $('.nav-btn').removeClass('active')
            $('.btn-home').addClass('active')
            position.empty()
            position.append(home())
        })
    }
    // resume
    var bindEventResume = function() {
        var resume = function() {
            var t = `
            <!-- 简历 -->
            <div class="div-resume col-xs-12 col-sm-12">
                <!-- 个人信息 -->
                <div class="div-resume-head">
                    <ul classs="vertical-center col-xs-12">
                        <li>
                            <span class="glyphicon glyphicon-phone"></span>
                            电话：186 5919 0802
                        </li>
                        <li>
                            <span class="glyphicon glyphicon-envelope"></span>
                            邮箱：fengzy21@outlook.com
                        </li>
                        <li>
                            <span class="glyphicon glyphicon-book"></span>
                            GitHub：<a href="https://github.com/FengZhiyuan">https://github.com/FengZhiyuan</a>
                        </li>
                    </ul>
                    <div class="div-resume-name col-xs-12">
                        <span class="span-resume-name">冯志远</span>
                        <span class="span-resume-job">前端工程师</span>
                    </div>
                </div>
                <!-- 个人技能 -->
                <div class="div-resume-skill">
                    <p class="p-resume-skill">
                        <span class="glyphicon glyphicon-wrench"></span>
                        技能
                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">HTML/CSS</span>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            能够编写语义化的 <span class='span-skill-hl'>HTML</span>，熟练使用 <span class='span-skill-hl'>DIV+CSS</span> 实现常用的布局与动画
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟悉标准化的 <span class='span-skill-hl'>HTML5/CSS3</span> 新特性，实验项目中能尝试使用未广泛使用的新标准
                        </p>
                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">ECMAScript(JavaScript)</span>

                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟悉 <span class='span-skill-hl'>ECMAScript(JavaScript)</span>, 对 <span class='span-skill-hl'>JavaScript</span> 引擎及相关技术有一定了解
                        </p>
                        <p class="p-skill-detail">
                            <span class="glyphicon glyphicon-star"></span>
                            了解 <span class='span-skill-hl'>ECMAScript</span> 新标准，并能在项目中使用
                        </p>
                        <p class="p-skill-detail">
                            <span class="glyphicon glyphicon-star"></span>
                            熟悉 <span class='span-skill-hl'>AJAX</span> 模型，并能在项目中使用
                        </p>
                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">DOM/BOM</span>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟悉原生 <span class='span-skill-hl'>DOM</span> 与 <span class='span-skill-hl'>BOM</span> 的使用及相关标准（<span class='span-skill-hl'>W3C/WHATWG</span>）,有桌面/移动端组件的开发经验
                        </p>


                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">库/框架</span>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟练运用 <span class='span-skill-hl'>jQuery</span> 进行定制与扩展
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟悉 <span class='span-skill-hl'>BootStrap/Pure</span> 等常见库的运用
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            对 <span class='span-skill-hl'>Node.js</span> 等常见技术有一定了解
                        </p>
                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">其他</span>

                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            日常使用 <span class='span-skill-hl'>Atom</span> 与 <span class='span-skill-hl'>Git</span> 进行开发，也乐于尝试新工具
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            能够使用 <span class='span-skill-hl'>Photoshop</span> 完成简单的设计
                        </p>
                    </p>

                    <p class="p-skill">
                        <span class="span-skill-title">个人项目</span>

                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            移动端音乐播放器
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            留言板
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            轮播图
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            TodoList
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            LogIn
                        </p>
                    </p>
                    <h5 class='resume-thx'>感谢花时间阅读我的简历，期待与您共事</p>

                </div>
            </div>
            `
            return t
        }
        $('.btn-resume').on('click', function(event) {
            var position = $('.div-anchor')
            $('.nav-btn').removeClass('active')
            $('.btn-resume').addClass('active')
            position.empty()
            position.append(resume())
        })
    }
    // projects
    var bindEventProject = function() {
        var position = $('.div-anchor')
        // 切换页面
        var projects = function() {
            var p = `
                <div class="div-project col-xs-12  col-sm-12 col-md-12">
                        <h4><span class="intro glyphicon glyphicon-cog"></span> 个人作品简介</h4>
                        <div class="project project-messageBoard">
                            <span class="project-title">留言板</span>
                            <img class="project-img" src="http://i.imgur.com/AcJb5au.png" alt="留言板" />
                            <p>
                                留言板，可自定义昵称与头像
                            </p>
                        </div>

                        <div class="project project-todoList">
                            <span class="project-title">TodoList</span>
                            <img class="project-img" src="http://i.imgur.com/0mQCeuR.png" alt="TodoList" />
                            <p>
                                待办清单，功能包括添加，编辑，删除，完成，可利用localStorage本地存储
                            </p>
                        </div>
                        <div class="project project-slideShow">
                            <span class="project-title">轮播图</span>
                            <img class="project-img" src="http://i.imgur.com/3qY0egQ.png" alt="轮播图" />
                            <p>
                                带缩略图的轮播图，可自定义图片组插入页面任意指定位置
                            </p>
                        </div>
                        <div class="project project-slideShow">
                            <span class="project-title">LogIn</span>
                            <img class="project-img" src="http://i.imgur.com/5Xu51i0.png" alt="LogIn" />
                            <p>
                                登录页面
                            </p>
                        </div>

                    </div>
                </div>
                `
            return p
        }
        $('.btn-project').on('click', function(event) {
            $('.nav-btn').removeClass('active')
            $('.btn-project').addClass('active')
            position.empty()
            position.append(projects())
        })

        // 留言板
        $('.btn-messageBoard').on('click', function(event) {
            var messageBoard = function(position) {
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
                                <img class="mb-head-img" width=50 height=50 src="${img}" alt="头像" />
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

                // 建立页面
                var appendMB = function(position) {
                    var main = function() {
                        var m = `
                        <div class="div-container">
                            <div class="div-name">
                                <div class="div-input-name">
                                    <input class="input-name" type="input" placeholder="请输入昵称" name="name" value="">
                                </div>
                                <div class="div-name-img">
                                    <img class="img-chose  active-img" src="http://www.jf258.com/uploads/2015-05-14/190205140.jpg" alt="" />
                                    <img class="img-chose" src="http://picview01.baomihua.com/photos/20120708/m_14_634773404838750000_37844128.jpg" alt="" />
                                    <img class="img-chose" src="http://img4.duitang.com/uploads/blog/201508/23/20150823180803_PXcW2.thumb.700_0.jpeg" alt="" />
                                    <img class="img-chose" src="http://www.duoziwang.com/2016/10/02/1453262447.jpg" alt="" />
                                    <img class="img-chose" src="http://img4.duitang.com/uploads/item/201601/15/20160115155755_irumV.jpeg" alt="" />
                                    <img class="img-chose" src="http://img5.duitang.com/uploads/item/201503/14/20150314210331_sNT8z.jpeg" alt="" />
                                    <img class="img-chose" src="http://img.wxcha.com/file/201605/14/0841295de4.jpg" alt="" />
                                    <img class="img-chose" src="http://img4.duitang.com/uploads/blog/201508/23/20150823180803_PXcW2.thumb.700_0.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="div-text">
                                <textarea name="name" rows="4" cols="40"></textarea>
                            </div>
                            <div class="div-submit-container">
                                <div class="div-submit">
                                    <span class="vertical-center">还能输入<span class="text-count">140</span>个字</span>
                                    <button type="button" name="button" class=" btn-submit">提交</button>
                                </div>
                            </div>
                            <hr>
                            <div class="div-insert-container">
                                <!-- insert -->
                                <div class="div-insert">
                                    <div class="div-img">
                                        <img class="mb-head-img" width=50 height=50 src="http://www.xueshiboke.com/zb_users/upload/2016/08/201608131471067436568880.jpg" alt="头像" />
                                    </div>
                                    <div class="div-comments">
                                        <p class="p-comment-name">林则徐</p>
                                        <p class="p-comment-text">专注禁烟100年</p>
                                        <div class="div-comment-time">10月21日</div>
                                    </div>
                                </div>
                                <!-- insert -->
                            </div>
                        </div>
                        `
                        return m
                    }
                    $(position).append(main())
                }

                //加入CSS
                var appendCSS = function(position) {
                    var css = function() {
                        var c = `
                        <style>
                        .vertical-center {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .div-container {
                            background-color: white;
                            width: 100%;
                            padding: 20px 20px;
                            border-radius: 5px;
                        }

                        .div-name {
                            position: relative;
                            width: 100%;
                            height: 60px;
                        }

                        .div-input-name {
                            display: block;
                        }

                        .input-name {
                            margin: 5px;
                            border-radius: 4px;
                            border: 1px solid lightgray;
                            text-align: center;
                        }

                        .div-name-img {
                            display: block;
                            margin: 4px auto 4px 5px;
                        }

                        .div-name-img img {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                        }

                        .active-img {
                            border: 1px solid black;
                            border-radius: 2px;
                        }

                        textarea {
                            width: 98%;
                            height: 68px;
                            margin: 5px;
                            padding: 0;
                            border-radius: 4px;
                            border: 1px lightgray solid;
                        }

                        .div-submit {
                            position: relative;
                            width: 98%;
                            height: 30px;
                            margin: 0 5px;
                            text-align: right;
                            padding: 0;
                        }

                        .div-submit > span {
                            color: gray;
                            height: auto;
                            font-size: 80%;
                            right: 125px;
                        }

                        .text-count {
                            font-size: 150%;
                        }

                        .over {
                            color: red;
                        }

                        .btn-submit {
                            width: 120px;
                            height: 26px;
                            margin: 2px 0;
                            border: 1px solid orange;
                            background-color: orange;
                            color: white;
                            border-radius: 4px;
                            font-weight: 900;
                            font-size: 110%;
                        }

                        hr {
                            border: 0.5px #fff inset;
                        }

                        .div-insert-container {
                            position: relative;
                            width: 100%;
                        }

                        .div-insert {
                            border-bottom: 1px dashed gray;
                            width: 100%;
                            margin: 5px 0;
                        }

                        .div-img {
                            display: inline-block;
                            vertical-align: top;
                            margin: 5px;
                            padding: 2px;
                            padding-right: 0;
                            margin-right: 0;
                        }

                        .mb-head-img {
                            border: 1px solid lightgray;
                            border-radius: 3px;
                        }

                        .div-comments {
                            display: inline-block;
                            text-align: left;
                            margin-left: 2px;
                            width: 80%;
                            margin: 3px;
                            font-size: 85%;
                        }

                        .p-comment-name {
                            margin-bottom: 5px;
                            overflow: hidden;
                            padding: 2px;
                            overflow: hidden;
                            word-wrap: break-word;
                            font-size: 105%;
                            margin-top: 0;
                            font-weight: 800;

                        }

                        .p-comment-text {
                            margin-top: 0px;
                            font-size: 95%;
                        }

                        .div-comment-time {
                            color: gray;
                            font-size: 80%;
                            margin-top: 10px;
                        }
                        </style>
                        `
                        return c
                    }
                    $(position).append(css())
                }

                // Events
                var bindEvents = function(position) {
                    appendMB(position)
                    appendCSS(position)
                    bindEventSubmit()
                    bindEventCount()
                    bindEventImg()
                }

                bindEvents(position)
            }
            $('.nav-btn').removeClass('active')
            $('.btn-messageBoard').addClass('active')
            position.empty()
            messageBoard('.div-anchor')
        })

        // 移动端音乐播放器
        $('.btn-audioPlayer').on('click', function(event) {
            $('.nav-btn').removeClass('active')
            $('.btn-audioPlayer').addClass('active')
            position.empty()
            var list = [
                {id: '0', type: 'mp3', name: 'ButterFly', artist: '群星',},
                {id: '1', type: 'mp3', name: 'Khanom', artist: '钢琴曲',},
                {id: '2', type: 'mp3', name: 'WavinFlag', artist: 'Knaan',},
                {id: '3', type: 'mp3', name: '海阔天空', artist: 'Beyond',},
            ]
            var player = function(list, position) {
                var playList = {
                    state: 'pause',
                    mode: 'order',
                    list: list,
                    volume: '1',
                    id: '0'
                }

                // 加载页面
                var appendPlayer = function(position) {
                    var html = function() {
                        var h = `
                        <!-- 自定义播放器 -->
                        <div class="div-audio-container">
                            <!-- 音频文件 -->

                            <audio class="music" controls="controls" data-id="null">
                            </audio>

                            <!-- 进度、时间显示条 -->
                            <div class="div-progress">
                                <div class="div-progress-frame">
                                    <div class="div-progress-duration vertical-center">
                                        <div class="div-progress-currentTime">
                                            <span class="span-progress-point vertical-center">
                                                <span class="span-progress-core vertical-center">
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="div-audio-time">
                                        <span class="span-start-time">00:00</span>
                                        <span class="span-end-time"></span>
                                    </div>
                                </div>
                            </div>

                            <!-- 主屏 -->
                            <div class="div-audio-screen">
                                <h1 class="audio-screen-name">歌曲名</h1>
                                <h3 class="audio-screen-artist">歌手</h3>
                            </div>

                            <!-- 音量 -->
                                <div class="div-audio-volume">
                                    <div class="div-volume-less">
                                        <span class="glyphicon glyphicon-volume-down"></span>
                                    </div>
                                    <div class="div-volume-max vertical-center">
                                        <div draggable="true" class="div-volume-current">
                                            <span class="span-volume-point vertical-center"></span>
                                        </div>
                                    </div>
                                    <div class="div-volume-more">
                                        <span class="glyphicon glyphicon-volume-up"></span>
                                    </div>
                                </div>

                            <!-- 媒体控制 -->
                            <div class="div-audio-control">
                                <i class="btn-order btn-mode fa fa-lg fa-sort-amount-asc vertical-center"></i>
                                <i class="btn-random hide btn-mode fa fa-lg fa-random vertical-center"></i>
                                <i class="btn-loop  hide btn-mode fa fa-lg fa-repeat vertical-center"></i>
                                <i class="btn-prev btn-control fa fa-2x fa-step-backward vertical-center"></i>
                                <i class="btn-play btn-control fa fa-3x fa-play vertical-center"></i>
                                <i class="btn-pause btn-control hide fa fa-3x fa-pause vertical-center"></i>
                                <i class="btn-next btn-control fa fa-2x fa-step-forward vertical-center"></i>
                                <i class="btn-volume-off glyphicon glyphicon-volume-off vertical-center"></i>
                                <i class="btn-volume-on hide glyphicon glyphicon-volume-up vertical-center"></i>
                            </div>

                            <!-- 歌曲列表 -->
                            <div class="div-audio-list">
                                <!-- 此处插入歌曲列表 -->
                            </div>

                        </div>
                        `
                        return h
                    }
                    var css = function() {
                        var c = `
                        <style>
                        .vertical-center {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                        }

                        .div-audio-container {
                            position: relative;
                            height: 667px;
                            width: 100%;
                            color: white;
                            border: 1px solid black;
                            margin-top: 5%;
                        }
                        .music {
                            display: none;
                        }
                        /*进度、时间显示条*/
                        .div-progress {
                            position: relative;
                            width: 100%;
                            border: 1px solid black;
                            height: 10%;
                            background-color: black;
                        }
                        /*自定义进度条*/
                        .div-progress-frame {
                            position: relative;
                            width: 100%;
                            height: 95%;
                        }
                        /*进度条总长*/
                        .div-progress-duration {
                            position: relative;
                            background-color: gray;
                            width: 90%;
                            border-radius: 6px;
                            margin: 0 auto;
                        }
                        /*播放进度*/
                        .div-progress-currentTime {
                            position: relative;
                            width: 0;
                            height: 4px;
                            background-color: red;
                            border-radius: 6px;
                            text-align: right;

                        }
                        /*大圆点*/
                        .span-progress-point {
                            right: -10px;
                            width: 20px;
                            height: 20px;
                            border: 1px solid black;
                            background-color: white;
                            border-radius: 50%;
                        }
                        /*小圆点*/
                        .span-progress-core {
                            left: 6px;
                            width: 6px;
                            height: 6px;
                            background-color: red;
                            border-radius: 50%;
                        }
                        /*时间框*/
                        .div-audio-time {
                            position: absolute;
                            /*border: 1px solid blue;*/
                            width: 95%;
                            height: 35%;
                            bottom: 0;
                            left: 2.5%;
                        }
                        /*当前时间*/
                        .span-start-time {
                            color: white;
                        }
                        /*歌曲长度*/
                        .span-end-time {
                            float: right;
                            color: white;

                        }

                        /*主屏*/
                        .div-audio-screen {
                            position: relative;
                            height: 40%;
                            text-align: center;
                            background-color: gray;
                            color: white;

                        }
                        /*歌名*/
                        .audio-screen-name {
                            position: absolute;
                            width: 100%;
                            top: 30%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 250%;
                            font-weight: bold;
                            word-wrap: break-word;
                            word-break: break-all;
                        }
                        /*歌手名*/
                        .audio-screen-artist {
                            position: absolute;
                            width: 100%;
                            top: 60%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 150%;
                        }
                        /*音量*/
                        .div-audio-volume {
                            position: relative;
                            height: 5%;
                            background-color: gray;
                            opacity: 0.7;
                        }
                        .div-volume-max {
                            position: absolute;;
                            display: inline-block;
                            background-color: black;
                            width: 60%;
                            height: 4px;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            margin: 0 auto;
                        }
                        .div-volume-current {
                            /*outline: 1px solid white;*/
                            position: relative;
                            width: 100%;
                            height: 4px;
                            background-color: white;
                            border-radius: 6px;
                            text-align: right;
                        }
                        .span-volume-point {
                            position: absolute;;
                            right: -5px;
                            width: 15px;
                            height: 15px;
                            border: 1px solid lightgray;
                            background-color: white;
                            border-radius: 50%;
                        }
                        .div-volume-less {
                            position: absolute;
                            display: inline-block;
                            top: 50%;
                            left: 10%;
                            transform: translate(-50%,-50%);
                            font-size: 125%;
                            /*border: 1px solid white;*/
                        }
                        .div-volume-more {
                            position: absolute;
                            display: inline-block;
                            float: right;
                            top: 50%;
                            right: 10%;
                            transform: translate(50%,-50%);
                            font-size: 125%;
                            /*border: 1px solid white;*/
                        }

                        /*媒体控制*/
                        .div-audio-control {
                            position: relative;
                            text-align: center;
                            width: 100%;
                            height: 10%;
                            outline: 1px solid black;
                            color: white;
                            background-color: black;
                        }

                        .btn-play {
                            transform: translate(-50%, -50%);
                        }
                        .btn-pause {
                            transform: translate(-50%, -50%);
                        }
                        .btn-prev {
                            left: 27%;
                            transform: translate(-50%, -50%);
                        }
                        .btn-next {
                            right: 27%;
                            transform: translate(50%, -50%);
                        }
                        .hide {
                            display: none;
                        }
                        .btn-mode {
                            left: 7%;
                            transform: translate(50%, -50%);
                        }

                        .btn-volume-off {
                            position: absolute;
                            font-size: 180%;
                            color: white;
                            right: 7%;
                            transform: translateY(-50%);
                        }
                        .btn-volume-on {
                            position: absolute;
                            font-size: 180%;
                            color: white;
                            right: 7%;
                            transform: translateY(-50%);
                        }

                        /*歌曲列表*/
                        .div-audio-list {
                            height: 30%;
                            font-size: 140%;
                            font-weight: 300;
                            color: black;
                            background-color: white;
                            overflow: scroll;
                        }
                        .div-list-item {
                            position: relative;
                            border: 1px solid gray;
                            padding: 1% 5%;
                            height: 20%;
                            overflow: hidden;
                        }
                        .div-list-item span {
                            margin: 1%;
                            /*position: absolute;*/
                            /*margin-left: 10%;*/
                        }

                        .rotateY {
                            animation: rotate 2s infinite;
                            -moz-animation: rotate 2s infinite;
                            -webkit-animation: rotate 2s infinite;
                            animation-timing-function: cubic-bezier(1, 1, 1, 1);

                        }

                        @keyframes rotate {
                            0% {
                                transform: rotateY(0deg);
                            }
                            100% {
                                transform: rotateY(360deg);
                            }
                        }

                        @media (min-width: 415px) {
                          .div-audio-container{
                            width: 414px;
                            height: 736px;
                            margin: 5% auto;
                            /*border: 1px solid black;*/
                          }
                        }
                        <style>
                        `
                        return c
                    }
                    $(position).append(html())
                    $(position).append(css())
                }
                appendPlayer(position)

                // 时间显示(默认time小于一小时)
                var timeConver = function(time) {
                    var m = String(Math.floor(time / 60))
                    var s = String(Math.floor(time % 60))
                    while (m.length < 2) {
                        m = '0' + m
                    }
                    while (s.length < 2) {
                        s = '0' + s
                    }
                    return `${m}:${s}`
                }

                var music = document.querySelector('.music')

                // 根据原始音频进度同步播放器进度，显示歌曲时间，监听切换歌曲
                var ProgressA = function() {
                    var range = $('.div-progress-currentTime')
                    var timeId = setInterval(function() {
                        var cTime = music.currentTime
                        var duration = music.duration
                        var progress = cTime / duration * 100
                        var rangeChange = `${progress}%`
                        range.width(rangeChange)
                        var time = timeConver(cTime)
                        // 显示当前播放时间
                        $('.span-start-time').text(`${time}`)
                        var endTime = timeConver(duration)
                        // 显示歌曲总时长
                        $('.span-end-time').text(`${endTime}`)
                        playMode()
                    }, 200)
                    $('.div-progress-duration').data('timeId', timeId)
                }

                // 点击自定义播放器进度，改变音频进度
                var ProgressB = function() {
                    var range = $('.div-progress-currentTime')
                    var duration = $('.div-progress-duration')
                    duration.on('click', function(event) {
                        var mousePos = event.pageX - $(this).offset().left;
                        var timeId = duration.data('timeId')
                        clearInterval(timeId)
                        var progress = mousePos / duration.width() * 100
                        var rangeChange = `${progress}%`
                        var currentTime = music.duration * progress / 100
                        // log('currentTime is ', currentTime)
                        range.width(rangeChange)
                        music.currentTime = currentTime
                        ProgressA()
                    })
                }

                // 歌曲列表HTML
                var listHtml = function(name, artist, index) {

                    var l =`
                    <div class="div-list-item" data-id="${index}">
                    <i class="hide play-icon fa fa-music"></i>
                        <span class="span-item" data-id="${index}">${name}--${artist}</span>
                    </div>
                    `
                    return l
                }

                // 载入歌曲列表
                var listLoad = function () {
                    $.each(playList.list, function(i, val) {
                        var name = val.name
                        var type = val.type
                        var artist = val.artist
                        var index = val.id
                        $('.div-audio-list').append(listHtml(name, artist, index))
                    })
                    songLoad(0)
                }

                // 载入主屏歌名、歌手名
                var songLoad = function(i) {
                    var song = playList.list[i]
                    var name = song.name
                    var type = song.type
                    var artist = song.artist
                    $('.music').attr('src', `${name}.${type}`)
                    $('.audio-screen-name').text(`${name}`)
                    $('.audio-screen-artist').text(`${artist}`)
                    $('.play-icon').addClass('hide')
                    $($('.play-icon')[i]).removeClass('hide')
                    playList.id = i
                }

                // 变更播放曲目
                var playSwith = function(offset) {
                    var id = playList.id
                    var l = playList.list.length
                    var i = (offset + l + id) % l
                    songLoad(i)
                }

                // 绑定下一曲按钮
                var bindEventNext = function() {
                    $('.btn-next').on('click', function() {
                        var songState= playList.state
                        var songMode = playList.mode
                        if (songMode === 'random') {
                            var len = playList.list.length
                            var i = Math.floor(Math.random() * 100% 4)
                            if (i === 0) {
                                i = i + 1
                            }
                            playSwith(i)
                        }else {
                            playSwith(1)
                        }
                        if (songState === 'play') {
                            music.play()
                        }
                    })
                }

                // 绑定上一曲按钮
                var bindEventPrev = function() {
                    $('.btn-prev').on('click', function() {
                        playSwith(-1)
                    })
                }

                // 绑定播放按钮
                var bindEventPlay = function() {
                    var btn = $('.btn-play')
                    btn.on('click', function() {
                        document.querySelector('.music').play()
                        playList.state = "play"
                        $('.btn-control').removeClass('hide')
                        btn.addClass('hide')
                        $('.play-icon').addClass('rotateY')
                    })
                }

                // 绑定暂停按钮
                var bindEventPause = function() {
                    var btn = $('.btn-pause')
                    btn.on('click', function() {
                        document.querySelector('.music').pause()
                        playList.state = "pause"
                        $('.btn-control').removeClass('hide')
                        btn.addClass('hide')
                        $('.play-icon').removeClass('rotateY')
                    })
                }

                // 点击列表曲目播放
                var bindEventList = function() {
                    $('.div-list-item').on('click', function(e) {
                        var target = $(e.target)
                        var i = target.data('id')
                        songLoad(i)
                    })
                }

                // 音量控制
                var bindEventVolume = function() {
                    p = $('.span-volume-point')
                    $('.div-volume-max').on('click', function(event) {
                        var mousePos = event.pageX - $(this).offset().left;
                        var vol = mousePos / $('.div-volume-max').width()
                        var progress = vol * 100
                        var rangeChange = `${progress}%`
                        $('.div-volume-current').width(rangeChange)
                        music.volume = vol
                    })
                }

                // 静音按钮
                var bindEventVolumeOff = function() {
                    var off = $('.btn-volume-off')
                    off.on('click', function() {
                        off.addClass('hide')
                        $('.btn-volume-on').removeClass('hide')
                        var vol = music.volume
                        playList.volume = vol
                        music.volume = 0
                        $('.div-volume-current').width(0)
                    })
                }

                // 取消静音按钮
                var bindEventVolumeOn = function() {
                    var on = $('.btn-volume-on')
                    on.on('click', function() {
                        on.addClass('hide')
                        $('.btn-volume-off').removeClass('hide')
                        var vol = playList.volume
                        music.volume = vol
                        var range = vol * 100
                        $('.div-volume-current').width(`${range}%`)

                    })
                }

                // 播放随模式切换
                var playMode = function() {
                    var songMode = playList.mode
                    var songState = music.ended
                    if (songState) {
                        if (songMode === 'order') {
                            playSwith(1)
                        }else if (songMode === 'random') {
                            var len = playList.list.length
                            var i = Math.floor(Math.random() * 100 % 4 + 1)
                            if (i === 0) {
                                i = i + 1
                            }
                            playSwith(i)
                        }else {
                            playSwith(0)
                        }
                    }
                }

                // 绑定MODE按钮
                var bindButtonMode = function() {
                    var btnMode = $('.btn-mode')
                    var order = $('.btn-order')
                    var random = $('.btn-random')
                    var loop = $('.btn-loop')
                    order.on('click', function(e) {
                        btnMode.addClass('hide')
                        random.removeClass('hide')
                        playList.mode = 'random'
                    })
                    random.on('click', function(e) {
                        btnMode.addClass('hide')
                        loop.removeClass('hide')
                        playList.mode = 'loop'
                    })
                    loop.on('click', function(e) {
                        btnMode.addClass('hide')
                        order.removeClass('hide')
                        playList.mode = 'order'
                    })
                }

                // 事件绑定
                var bindEvents = function(list) {
                    ProgressA()
                    ProgressB()
                    listLoad(list)
                    bindEventNext()
                    bindEventPrev()
                    bindEventPause()
                    bindEventPlay()
                    bindButtonMode()
                    bindEventList()
                    bindEventVolume()
                    bindEventVolumeOn()
                    bindEventVolumeOff()
                }
                bindEvents()
            }
            player(list, '.div-anchor')
        })

        // TodoList
        $('.btn-todoList').on('click', function(event) {
            $('.nav-btn').removeClass('active')
            $('.btn-todoList').addClass('active')
            position.empty()
            var images = [
                'http://img.hb.aicdn.com/c04068ab0b9098f381fc42cb65cb34c8907d32e313330-8Ql2rF_fw658',
                'http://img.hb.aicdn.com/06d53b3aab780c38648b26f0a0941c85ce15bf44bea8d-NBtbp0_fw658',
                'http://img.hb.aicdn.com/55537e70e4381a5ad1ae55cdaf300001b625a415d1f5-DNVAu8_fw658',
                'http://img.hb.aicdn.com/55562078a2b43afee9defb6852fe9e257b2081bea06a-hwdR8l_fw658',
            ]
            var SlideShow = function(images, position) {
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

                // 下一张
                var playNext = function() {
                    play(1)
                }

                // 上一张
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
                    <style>
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
                    $(position).append(css)
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
        })
    }
    bindEventHome()
    bindEventResume()
    bindEventProject()
}
bindEventNav()

// 边栏事件绑定
var bindEventAside = function() {
    var bindEventActive = function() {
        var btns = $('.aside-btns>a')
        btns.on('click', function(event) {
            var target = $(event.target)
            btns.removeClass('active')
            target.addClass('active')
        })
    }
    //  作品简介
    var bindEventIntro = function() {
        $('.aside-btn-intro').on('click', function(event) {
            $('.btn-project').click()
        })
    }


    bindEventActive()
    bindEventIntro()
}
bindEventAside()
