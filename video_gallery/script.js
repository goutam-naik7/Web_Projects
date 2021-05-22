var videoPlayer = document.getElementById("videoPlayer");
var myVide0 = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}
