const mainVideo = document.getElementById('mainVideo')
const mapVideo = document.getElementById('mapVideo')
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

const initSoundboard = () => {
   document.getElementById('soundboardDisclaimerMsg').remove();
  document.getElementById("soundboard").style.opacity = 1;
}

const removeSoundboard = () => {
  document.getElementById("soundboard").style.opacity = 0;
}

const removeDisclaimer = () => {
  document.getElementById('soundboardDisclaimerMsg').remove()
}

const touchup = () => {
  mainVideo.style.opacity = 100
  // console.log('touch up')
}

document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('mousedown', initSoundboard, false)
  window.addEventListener('mouseup', touchup, false)
  window.addEventListener('touchstart', initSoundboard, false)
  window.addEventListener('touchend', touchup, false)
})
