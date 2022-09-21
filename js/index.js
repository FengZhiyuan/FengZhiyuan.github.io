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
        document.getElementById("snap").onclick = () => {
            this.takePhoto()
        }
    }

    takePhoto() {
        this.context.drawImage(this.video, 0, 0, 320, 240);
        const imgData = this.canvas.toDataURL('image/jpeg')
        document.getElementById("photo").style.backgroundImage = `url(${imgData})`;
    }

    playVideoByStream(stream) {
        const video = this.video
        // Set the source of the video element with the stream from the camera
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
