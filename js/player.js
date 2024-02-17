const albumTitle = document.querySelector("h3.album-title").innerText;
const albumCoverSrc = document.querySelector("img.cover").getAttribute("src");
const albumTracks = Array.from(document.querySelectorAll("span.track:not(.unavailable)[audio]"));
const audioHtmlTag = document.querySelector("audio");
const pauseButton = document.querySelector("#pause-button");

// ******* EVENT HANDLERS **********

albumTracks.forEach((track) => {
  track.addEventListener("click", (e) => {
    const trackToPlay = e.currentTarget;
    playTrack(trackToPlay);
    showPauseButton();
  });
});

navigator.mediaSession.setActionHandler('play', () => audioPlay());
navigator.mediaSession.setActionHandler('pause', () => audioPause());
navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
//navigator.mediaSession.setActionHandler('previoustrack', () => previousTrack());
audioHtmlTag.addEventListener("ended", () => nextTrack());
pauseButton.addEventListener("click", () => toggleAudioPlayPause());

// ******* END EVENT HANDLERS **********

function playTrack(trackToPlay) {
  const trackAudioSrc = trackToPlay.getAttribute('audio');
  audioHtmlTag.setAttribute("src", trackAudioSrc);
  audioPlay();

  albumTracks.forEach((t) => t.classList.remove("playing"));
  trackToPlay.classList.add("playing");

  const trackTitle = trackToPlay.querySelector('h3').innerText
  const trackArtist = trackToPlay.querySelector('h5').innerText
  navigator.mediaSession.metadata = new MediaMetadata({
    title: trackTitle,
    artist: trackArtist,
    album: albumTitle,
    artwork: [{ src: albumCoverSrc, type: 'image/png' }]
  });
}

function nextTrack() {
  const playingTrack = document.querySelector("span.track.playing");
  const playingTrackIndex = albumTracks.indexOf(playingTrack);
  const nextTrackIndex = (playingTrackIndex + 1) % albumTracks.length;
  const nextTrack = albumTracks[nextTrackIndex];
  playTrack(nextTrack);
}

function toggleAudioPlayPause() {
  if(audioHtmlTag.paused) {
    audioPlay();
    return;
  }
  audioPause();
}

function audioPlay() {
  audioHtmlTag.play();
  pauseButton.classList.remove('play');
  pauseButton.classList.add('pause');
}

function audioPause() {
  audioHtmlTag.pause();
  pauseButton.classList.remove('pause');
  pauseButton.classList.add('play');
}

function showPauseButton() {
  pauseButton.classList.remove("hidden");
}
