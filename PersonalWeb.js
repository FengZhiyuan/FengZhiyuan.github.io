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
                            能够编写语义化的 <span class='span-skill-hl'>HTML</span>，模块化的 <span class='span-skill-hl'>CSS</span>，实现常用的布局与动画
                        </p>
                        <p class="p-skill-detail"><span class="glyphicon glyphicon-star"></span>
                            熟悉标准化的 <span class='span-skill-hl'>HTML5/CSS3</span> 新特性，实验项目中能尝试使用位为泛使用的新标准
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
                            对 <span class='span-skill-hl'>React/Node.js</span> 等常见技术有一定了解
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

                        <h5 class='resume-thx'>感谢花时间阅读我的简历，期待与您共事</p>
                    </p>
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
