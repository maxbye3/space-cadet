const mainVideo = document.getElementById('mainVideo')
let initialClick = true

// setInterval(() => {
//   mapVideo.currentTime = mainVideo.currentTime
// }, 100)

// on mobile
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // some code..
  document.getElementById('interactionType').innerHTML = 'Touch ';
}

const touchdown = () => {
  if(initialClick){
    // play video
    mainVideo.play();
    document.getElementById('soundboardDisclaimerMsg').style.opacity = 1;
    document.getElementById('disclaimer').remove();
    console.log("play video");
    initialClick = false;
  } else {
    // display disclaimer and soundboard
    initSoundboard();
  }
}

const intAudio = (id) => {
  console.log('audio: ', id);
  document.getElementById(id).play();
}

const initSoundboard = () => {
  if(document.getElementById('soundboardDisclaimerMsg')){
    document.getElementById('soundboardDisclaimerMsg').remove();
  }
  console.log(1);
  document.getElementById("soundboard").style.opacity = 1;
}

const removeSoundboard = () => {
  console.log(2);
  document.getElementById("soundboard").style.opacity = 0;
}

const removeDisclaimer = () => {
  document.getElementById('soundboardDisclaimerMsg').remove();
}

const touchup = () => {
  mainVideo.style.opacity = 100
  // console.log('touch up')
}

document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('mousedown', touchdown, false)
  window.addEventListener('mouseup', touchup, false)
  window.addEventListener('touchstart', touchdown, false)
  window.addEventListener('touchend', touchup, false)
})
