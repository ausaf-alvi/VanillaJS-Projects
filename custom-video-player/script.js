const video = document.getElementById('video');
const play = document.getElementById('play');
const stopper = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play & Pause Video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
    return true;
}

//Update the play/pause Icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
    return true;
}

//Update progress and timestamp
function updateProgress(){
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime/video.duration)*100;
    

    //Get Minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10 ){
        mins = '0' + String(mins);
    }

    //Get Seconds
    let secs = Math.floor(video.currentTime%60);
    if(secs < 10 ){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`
    return true;
}

//Set Video Time to Progress
function setVideoProgress(){
    video.currentTime = (+progress.value*video.duration)/100
    return true;
}

//Stop the Video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click',toggleVideoStatus);

stopper.addEventListener('click', stopVideo);

progress.addEventListener('change',setVideoProgress);
