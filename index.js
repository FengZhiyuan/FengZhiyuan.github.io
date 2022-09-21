const log = console.log.bind(console)

//拍照主函数
function takePhotos() {
    //这段代 主要是获取摄像头的视频流并显示在Video 签中
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    const video = document.getElementById("video");

    function successCallback(stream) {
        // Set the source of the video element with the stream from the camera
        if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = stream;
        } else {
            video.srcObject = stream;
        }
        video.play();
    }

    function errorCallback(error) {
        alert('错误代码: [CODE ' + error.code + ']');
        // Display a friendly "sorry" message to the user
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    // Call the getUserMedia method with our callback functions
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, successCallback, errorCallback);
    } else {
        alert('浏览器不支持getUserMedia.');
        // Display a friendly "sorry" message to the user
    }


    //这个是拍照按钮的事件，
    document.getElementById("snap").onclick = function(){
        context.drawImage(video, 0, 0, 320, 320);
        //获取浏览器页面的画布对象
        var canvans = document.getElementById("canvas");
        //以下开始编 数据
        var imgData = canvans.toDataURL();
        //将图像转换为base64数据
        var base64Data = imgData.substr(22);
        //将获得的base64数据设置为photo的背景图
        document.getElementById("photo").style.backgroundImage="url(data:image/png;base64,"+base64Data+")";
        document.getElementById("text").innerHTML=base64Data;


    }
}

//判断浏览器是否支持HTML5 Canvas
const checkCanvasSupported = () => {
    window.onload = function () {
        try {
            //动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持
            document.createElement("canvas").getContext("2d")
            //
            document.getElementById("support").innerHTML = "浏览器支持HTML5 CANVAS"
            //
            takePhotos();
        }
        catch (e) {
            document.getElementById("support").innerHTML = "浏览器不支持HTML5 CANVAS"
        }
    };
}

const __main = function () {
    log('__main run')
    checkCanvasSupported()
}

__main()
