class FaceAuthentication {
    constructor() {
        this.canvas = document.getElementById("canvas")
        this.context = this.canvas.getContext("2d")
        this.video = document.getElementById("video");
    }

    static new() {
        return new this()
    }

    init() {
        window.onload = () => {
            try {
                //动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持
                document.createElement("canvas").getContext("2d")
                //
                // document.getElementById("support").innerHTML = "浏览器支持HTML5 CANVAS"
                //
                this.bindEvents()
                this.initCamera()
            }
            catch (e) {
                document.getElementById("support").innerHTML = "浏览器不支持HTML5 CANVAS"
            }
        };
    }

    initCamera() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

        // Call the getUserMedia method with our callback functions
        if (navigator.getUserMedia) {
            const callbackSuccess = this.successCallback.bind(this)
            const callbackError = this.errorCallback.bind(this)
            navigator.getUserMedia({video: true}, callbackSuccess, callbackError)
        } else {
            alert('浏览器不支持getUserMedia.');
        }
    }

    bindEvents() {
        this.bindEventSnap()
    }

    bindEventSnap() {
        document.getElementById("snap").onclick = () => {
            this.context.drawImage(this.video, 0, 0, 320, 320);
            //以下开始编 数据
            const imgData = this.canvas.toDataURL();
            //将图像转换为base64数据
            const base64Data = imgData.substr(22);
            //将获得的base64数据设置为photo的背景图
            document.getElementById("photo").style.backgroundImage="url(data:image/png;base64,"+base64Data+")";
            document.getElementById("text").innerHTML=base64Data;
        }
    }

    successCallback(stream) {
        const video = this.video
        // Set the source of the video element with the stream from the camera
        if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = stream;
        } else {
            video.srcObject = stream;
        }
        video.play();
    }

    errorCallback(error) {
        // Display a friendly "sorry" message to the user
        alert('错误代码: [CODE ' + error.code + ']');
    }

    // 压缩图片
    compressImage(base64Data, width=480, height=320) {
        const image = new Image()
        image.src = base64Data
        image.onload = function () {
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')
            canvas.width = image.width
            canvas.height = image.height
            context.drawImage(image, 0, 0, width, height)
            const data = canvas.toDataURL('image/jpeg', 0.5)
            console.log('data', data)
        }
    }
}

const __main = function () {
    log('__main run')
    const instance = FaceAuthentication.new()
    instance.init()
}

__main()
