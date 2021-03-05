const spinner = document.getElementById('circle-anim');
let spinnerAngle = 0;
let startTime = null;
let desiredFrameRate = 0;
let animationState = true;
const bd = document.getElementsByTagName('body')[0];

bd.addEventListener('click',() => {
    console.log(`Animation State Value: ${animationState}`);
    if(animationState){
        animationState = false;
        cancelAnimationFrame(desiredFrameRate);
    } else {
        animationState = true;
        desiredFrameRate = requestAnimationFrame(draw);
    }
});


function draw(timestamp){
  if(!startTime){
    startTime = timestamp;
  }
 spinnerAngle =  (timestamp-startTime)/3;
  if(spinnerAngle>359){
    spinnerAngle = spinnerAngle%360;
  }
  spinner.style.transform = `rotate(${spinnerAngle}deg)`;
  if(animationState){
      desiredFrameRate = requestAnimationFrame(draw);
  }
//   console.log(desiredFrameRate%60);
}

draw();