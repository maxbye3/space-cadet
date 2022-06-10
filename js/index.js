const mainVideo = document.getElementById('mainVideo')
let initialClick = true;
mainVideo.volume = 0.2;

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
  if(document.getElementById('clickContainer')){
    document.getElementById('clickContainer').remove();
    document.getElementById('soundboardDisclaimerMsg').style.opacity = 1;
    // play video
    mainVideo.play();
  }
  if(document.getElementById('disclaimer')){
    document.getElementById('disclaimer').remove();
  }
  console.log("play video");
  initialClick = false;
}

const intAudio = (id) => {
  console.log('audio: ', id);
  document.getElementById(id).play();
}

const initSoundboard = () => {
  document.getElementById('soundboardDisclaimerMsg').style.opacity = 0;
  document.getElementById("soundboard").style.opacity = 1;
  console.log(1);
}

const removeSoundboard = () => {
  console.log(2);
  document.getElementById("soundboard").style.opacity = 0;
  document.getElementById('soundboardDisclaimerMsg').style.opacity = 1;
}

const removeDisclaimer = () => {
  document.getElementById('soundboardDisclaimerMsg').style.opacity = 0;
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
