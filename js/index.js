class FaceAuthentication {
    constructor() {
        this.canvas = document.getElementById("canvas")
        this.context = this.canvas.getContext("2d")
        this.video = document.getElementById("video");
        this.width = 320
        this.height= 240
    }

    static new() {
        return new this()
    }

    init() {
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
        };
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
            layer.msg('拍照完成')
        }
    }

    takePhoto() {
        this.context.drawImage(this.video, 0, 0, this.width, this.height);
        const imgData = this.canvas.toDataURL('image/jpeg')
        log('imgData length ', imgData.length)
        document.getElementById("photo").style.backgroundImage = `url(${imgData})`;
    }

    playVideoByStream(stream) {
        const video = this.video
        if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = stream;
        } else {
            video.srcObject = stream;
        }
        video.play();
    }

    playVideoError(error) {
        // Display a friendly "sorry" message to the user
        alert('错误代码: [CODE ' + error.code + ']');
    }
}

const __main = function () {
    log('__main run')
    const instance = FaceAuthentication.new()
    instance.init()
}

__main()
