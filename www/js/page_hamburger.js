
//ハンバーガーメニュー
function link() {
  document.getElementById("menu-btn").classList.toggle("active");
  document.getElementById("menu-content").classList.toggle("active");
}

//カメラ(addEventLisnerはHTML後に読込必要)
document.getElementById('cameraButton').addEventListener('click', function() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true
    });

    function onSuccess(imageData) {
        const image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('失敗しました^^; ' + message);
    }
});