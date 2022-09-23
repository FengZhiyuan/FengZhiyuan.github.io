//获取base64图片大小，返回kb数字
function showSize(base64url) {
    //把头部去掉
    var str = base64url.replace('data:image/pngbase64,', '')
    // 找到等号，把等号也去掉
    var equalIndex = str.indexOf('=')
    if(str.indexOf('=')>0) {
        str=str.substring(0, equalIndex)
    }
    // 原来的字符流大小，单位为字节
    var strLength=str.length
    // 计算后得到的文件流大小，单位为字节
    var fileLength=parseInt(strLength-(strLength/8)*2)
    // 由字节转换为kb
    var size = ""
    size = (fileLength / 1024).toFixed(2)
    var sizeStr = size + "" //转成字符串
    var index = sizeStr.indexOf(".") //获取小数点处的索引
    var dou = sizeStr.substr(index + 1, 2) //获取小数点后两位的值
    if (dou == "00") { //判断后两位是否为00，如果是则删除00
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
    return size
}

class Base {
    constructor() {
        this.load = null
    }

    static new() {
        return new this()
    }

    showMessage(message)  {
        layui.use('layer', function(){
            const layer = layui.layer
            layer.msg(message)
        })
    }
    showLoading() {
        this.load = layer.load(1, {
            content: '',
            shade: [0.4, '#393D49'],
        })
    }

    hideLoading() {
        layer.close(this.load)
    }
}

class FaceAuthentication extends Base {
    constructor() {
        super()
        this.canvas = document.getElementById("canvas")
        this.context = this.canvas.getContext("2d")
        this.video = document.getElementById("video")
        this.width = 320
        this.height= 240
    }

    init() {
        // this.setup()

        window.onload = () => {
            try {
                // 动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持
                document.createElement("canvas").getContext("2d")
                //
                this.bindEvents()
                this.initCamera()
            }
            catch (e) {
                document.getElementById("support").innerHTML = "浏览器不支持HTML5 CANVAS"
            }
        }
    }

    setup() {
        const url = new URL(location.href)
        const searchParams = url.searchParams

        const width = searchParams.get('width')
        if (width) {
            this.width = width
        }

        const height = searchParams.get('height')
        if (height) {
            this.height = height
        }
    }

    initCamera() {
        if (navigator.mediaDevices.getUserMedia) {
            const constraints = {video: true}

            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                this.playVideoByStream(stream)
            }).catch((err) => {
                this.playVideoError(err)
            })
        } else {
            alert('浏览器不支持getUserMedia.')
        }
    }

    bindEvents() {
        this.bindEventSnap()
    }

    bindEventSnap() {
        document.getElementById("id-js-button-snap").onclick = () => {
            this.takePhoto()
            // layer.msg('拍照完成')
        }
    }

    takePhoto() {
        const videoWidth = this.video.videoWidth
        const videoHeight = this.video.videoHeight
        this.canvas.width = videoWidth
        this.canvas.height = videoHeight

        this.context.drawImage(this.video, 0, 0, videoWidth, videoHeight)

        // 根据不同系统配置图片质量，也可从请求中取值
        const defaultQuality = 0.8
        let quality = this.isIosSystem() ? 0.5 : defaultQuality
        const qualityFromQuery = this.searchParamsOfPage().get('quality')
        const qualityFromQueryNumber = Number(qualityFromQuery)
        if (qualityFromQuery && qualityFromQueryNumber > 0 && qualityFromQueryNumber <= 0.92) {
            quality = qualityFromQueryNumber
        }
        //
        const imgData = this.canvas.toDataURL('image/jpeg', quality)

        const size = showSize(imgData)
        document.getElementById("photo").style.backgroundImage = `url(${imgData})`

        $e ('.input-test').value = `${this.video.videoWidth} * ${this.video.videoHeight}, ${size}KB`
    }

    playVideoByStream(stream) {
        const video = this.video
        if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = stream
        } else {
            video.srcObject = stream
        }
        video.play()
    }

    playVideoError(error) {
        // Display a friendly "sorry" message to the user
        log('错误代码: [CODE ' + error.code + ']')
        // alert('错误代码: [CODE ' + error.code + ']')
    }

    isIosSystem() {
        //获取浏览器的userAgent,并转化为小写
        const ua = navigator.userAgent.toLowerCase()
        //判断是否是苹果手机，是则是true
        const result = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1)
        return result
    }

    searchParamsOfPage() {
        const url = new URL(location.href)
        const searchParams = url.searchParams
        return searchParams
    }
}

class Main extends Base {
    constructor() {
        super()
        this.expertList = []
        this.selectedExpert = null
    }

    init() {
        this.getExpertInfo()
        this.bindEvents()
    }

    bindEvents() {
        this.bindEventButtonSignInClick()
    }

    bindEventSelectExpertChange() {
        layui.use(['layer','jquery','form'],function(){
            var layer = layui. layer,
                $=layui.jquery,
                form=layui.form;
            form.on('select(select-expert)', function (data) {
                log('select expert change run', data)
                $e('#id-input-expert-idcard').value = data.value
            });
        });
    }

    bindEventButtonSignInClick() {
        const button = $e('#id-button-sign-in')
        button.addEventListener('click', (event) => {
            const name = $e('#id-expert-name').value
            if (!name) {
                this.showMessage('请选择专家')
                return
            }
            const idCard = $e('#id-input-expert-idcard').value
            const obj = {
                expertTrueName: name,
                expertCertNum: idCard,
            }
            const target = this.expertList.find(item => item.expertCertNum === obj.expertCertNum) || {}
            log("target ", target)
            this.selectedExpert = target
        })
    }

    getExpertInfo() {
        this.showLoading()
        const request = {
            //todo mock
            url: 'http://127.0.0.1:3000/ess/review/manage/getExpertAttestation',
            method: 'GET',
        }
        Ajax(request).then(res => {
            log('getExpertAttestation', res)
            this.expertList = res
            this.insertExpertOptions()
        }).finally(() => {
            this.hideLoading()
        })
    }

    insertExpertOptions() {
        const optionsHtml = this.expertList.map(item => {
            const html = `<option value = ${item.expertCertNum}>${item.expertTrueName}</option>`
            return html
        })
        log("optionsHtml ", optionsHtml)
        $e('#id-expert-name').innerHTML = `<option value="">请选择专家</option>\n` + optionsHtml.join('\n')
        layui.form.render('select')
        this.bindEventSelectExpertChange()
    }
}

const __main = function () {
    log('__main run')

    const main = Main.new()
    main.init()

    // let instance
    // instance = FaceAuthentication.new()
    // instance.init()
}

__main()
