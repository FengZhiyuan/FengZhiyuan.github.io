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

function isIosSystem() {
    //获取浏览器的userAgent,并转化为小写
    var ua = navigator.userAgent.toLowerCase()
    //判断是否是苹果手机，是则是true
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1)
    return isIos
}

class Base {
    static new() {
        return new this()
    }
}


class FaceAuthenticationAndroid extends Base {
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

        const imgData = this.canvas.toDataURL('image/jpeg', 0.8)

        const size = showSize(imgData)
        document.getElementById("photo").style.backgroundImage = `url(${imgData})`

        $('.input-test').value = `${this.video.videoWidth} * ${this.video.videoHeight}, ${size}KB`
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
        alert('错误代码: [CODE ' + error.code + ']')
    }

}

class FaceAuthenticationIOS extends Base {
    constructor() {
        super()
    }
    init() {
        log('ios init')
        const items = document.querySelectorAll('.wrapper-ios')
        log("items ", items)

        Array.from(items).forEach((item) => {
            item.classList.remove('hide')
        })
    }
}

const __main = function () {
    log('__main run')

    let instance
    // if (isIosSystem()) {
    //     instance = FaceAuthenticationIOS.new()
    // } else {
    //     instance = FaceAuthenticationAndroid.new()
    // }
    instance = FaceAuthenticationAndroid.new()
    instance.init()
}

__main()
