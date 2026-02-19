const playpause = document.getElementById("playpause-btn");
const audio = document.getElementById("mu");

function playPauseTrack() {
  if (audio.paused == true) {
    audio.play();
    playpause.innerHTML =
      "| |";
  } else if (audio.paused == false) {
    audio.pause();
    playpause.innerHTML =
      "▷";
  }
}