var myImg = document.getElementById("myImg");

myImg.onclick = function(){
    if(clouds.style.webkitAnimationPlayState == "paused"){
        clouds.style.webkitAnimationPlayState = "running"
        airplane.style.webkitAnimationPlayState = "running"
        hotairballon.style.webkitAnimationPlayState = "running"
        myImg.src = "pause.png";
    }
    else{
        clouds.style.webkitAnimationPlayState = "paused"
        airplane.style.webkitAnimationPlayState = "paused"
        hotairballon.style.webkitAnimationPlayState = "paused"
        myImg.src ="play.png";
    }
}