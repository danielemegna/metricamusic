const albumTitle = document.querySelector("h3.album-title").innerText;
const albumCoverSrc = document.querySelector("img.cover").getAttribute("src");
const albumTracks = Array.from(document.querySelectorAll("span.track[audio]"));
const audioTag = document.querySelector("audio");

albumTracks.forEach((track) => {
  return; // enable here
  track.addEventListener("click", (e) => {
    const trackToPlay = e.currentTarget;
    albumTracks.forEach((t) => t.classList.remove("playing"));
    trackToPlay.classList.add("playing");
    playTrack(trackToPlay);
  });
});

/*
navigator.mediaSession.setActionHandler('previoustrack', () => previousTrack());
navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
audio.addEventListener("ended", () => nextTrack());
*/

navigator.mediaSession.setActionHandler('play', () => audioTag.play());
navigator.mediaSession.setActionHandler('pause', () => audioTag.pause());

function playTrack(track) {
  const trackAudioSrc = track.getAttribute('audio');
  const trackTitle = track.querySelector('h3').innerText
  const trackArtist = track.querySelector('h5').innerText

  navigator.mediaSession.metadata = new MediaMetadata({
    title: trackTitle,
    artist: trackArtist,
    album: albumTitle,
    artwork: [
      { src: albumCoverSrc, type: 'image/png' },
    ]
  });

  audioTag.setAttribute("src", trackAudioSrc);
  audioTag.play();
}