const albumTitle = document.querySelector("h3.album-title").innerText;
const albumCoverSrc = document.querySelector("img.cover").getAttribute("src");
const albumTracks = Array.from(document.querySelectorAll("span.track[audio]"));
const audioTag = document.querySelector("audio");
const pauseButton = document.querySelector("#pause-button");

albumTracks.forEach((track) => {
  track.addEventListener("click", (e) => {
    const trackToPlay = e.currentTarget;
    albumTracks.forEach((t) => t.classList.remove("playing"));
    trackToPlay.classList.add("playing");
    pauseButton.classList.remove("hidden");
    playTrack(trackToPlay);
  });
});

//navigator.mediaSession.setActionHandler('previoustrack', () => previousTrack());
navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
audioTag.addEventListener("ended", () => nextTrack());

navigator.mediaSession.setActionHandler('play', () => audioPlay());
navigator.mediaSession.setActionHandler('pause', () => audioPause());
pauseButton.addEventListener("click", () => toggleAudioPlayPause());

function toggleAudioPlayPause() {
  if(audioTag.paused) {
    audioPlay();
    return;
  }
  audioPause();
}

function audioPlay() {
  audioTag.play();
  pauseButton.classList.remove('play');
  pauseButton.classList.add('pause');
}

function audioPause() {
  audioTag.pause();
  pauseButton.classList.remove('pause');
  pauseButton.classList.add('play');
}

function playTrack(track) {
  const trackAudioSrc = track.getAttribute('audio');
  const trackTitle = track.querySelector('h3').innerText
  const trackArtist = track.querySelector('h5').innerText

  navigator.mediaSession.metadata = new MediaMetadata({
    title: trackTitle,
    artist: trackArtist,
    album: albumTitle,
    artwork: [{ src: albumCoverSrc, type: 'image/png' }]
  });

  audioTag.setAttribute("src", trackAudioSrc);
  audioPlay();
}

function nextTrack() {
  const playingTrack = document.querySelector("span.track.playing");
  const playingTrackIndex = albumTracks.indexOf(playingTrack);
  var nextTrackIndex = playingTrackIndex + 1;
  if (nextTrackIndex === albumTracks.length)
    nextTrackIndex = 0;

  const nextTrack = albumTracks[nextTrackIndex];

  playingTrack.classList.remove("playing");
  nextTrack.classList.add("playing");
  playTrack(nextTrack);
}
