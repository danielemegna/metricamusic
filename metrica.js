$(document).ready(() => {

  $(window).bind("scroll", () => {

    const artist = $(".artist-left-slide")
    const container = artist.parent()

    const pageBottom = $(window).scrollTop() + $(window).height()
    const elementTop = $(container).offset().top
    const delta = pageBottom - elementTop
    const newMargin = -artist.width() - 200 + delta

    if (newMargin < 0) {
      artist.css("margin-left", newMargin)
    }


  })
})