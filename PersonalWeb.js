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
            var position = $('.div-anchor')
            $('.nav-btn').removeClass('active')
            $('.btn-project').addClass('active')
            position.empty()
            position.append(projects())
        })
        // 留言板
        $('.btn-messageBoard').on('click', function(event) {
            // 留言板
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
            var position = $('.div-anchor')
            $('.nav-btn').removeClass('active')
            $('.btn-messageBoard').addClass('active')
            position.empty()
            messageBoard('.div-anchor')
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
