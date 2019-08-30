document.addEventListener("DOMContentLoaded", () => {
    let live = document.getElementById("live");
    live.addEventListener("click", () => {
        location.href = "https://www.youtube.com/watch?v=LNLRTteg0CQ"
    })

    let videos = document.getElementById("videos");
    videos.addEventListener("click", () => {
        location.href = "https://www.youtube.com/watch?v=Oi96HnY4EDA"
    })

    let merch = document.getElementById("store");
    merch.addEventListener("click", () => {
        location.href = "https://brevitynyc.bandcamp.com/merch"
    })

})