$(document).ready(() => {

  $(window).bind("scroll", () => {

    const pageBottom = $(window).scrollTop() + $(window).height()

    const artist = $(".artist-left-slide")
    const artistDelta = pageBottom - $(artist).offset().top
    const newLeftMargin = -artist.height() - 200 + artistDelta

    if (newLeftMargin < 0) {
      artist.css("margin-left", newLeftMargin)
    }

    const logo = $(".logo-right-slide")
    const logoDelta = pageBottom - $(logo).offset().top
    const newRightMargin = -logo.height() - 400 + logoDelta

    if (newRightMargin < 0) {
      logo.css("margin-right", newRightMargin)
    }


  })
})