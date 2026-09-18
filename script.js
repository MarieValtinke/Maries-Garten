

// Removed stray HTML meta tag that doesn't belong in a JavaScript file


// SWIPER

//Lauschen Button und Vollbild

const audio = document.querySelector("#lauschen-audio");
const animation = document.querySelector(".lausch-animation");
const vollbildButton = document.querySelector(".button-vollbild");
const lauschen = document.querySelector("#lauschen");

if (audio && animation && vollbildButton && lauschen) {

  audio.addEventListener("play", () => {
    animation.classList.add("is-playing");
  });

  audio.addEventListener("pause", () => {
    animation.classList.remove("is-playing");
  });

  audio.addEventListener("ended", () => {
    animation.classList.remove("is-playing");
  });

  vollbildButton.addEventListener("click", async () => {

    if (!document.fullscreenElement) {
      await lauschen.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }

  });

}

document.addEventListener("DOMContentLoaded", function () {

  const bier = document.querySelector(".BierKlick");
  const apfel = document.querySelector(".ApfelKlick");
  const zigarette = document.querySelector(".ZigaretteKlick");

  const bierOverlay = document.querySelector("#bier-overlay");
  const apfelOverlay = document.querySelector("#apfel-overlay");
  const zigaretteOverlay = document.querySelector("#zigarette-overlay");


  // BIER
  bier.addEventListener("pointerdown", function () {
    bierOverlay.classList.add("offen");
  });


  // APFEL
  apfel.addEventListener("pointerdown", function () {
    apfelOverlay.classList.add("offen");
  });


  // ZIGARETTE
  zigarette.addEventListener("pointerdown", function () {
    zigaretteOverlay.classList.add("offen");
  });


  // Beim Loslassen Overlay schließen
  document.addEventListener("pointerup", function () {

    bierOverlay.classList.remove("offen");
    apfelOverlay.classList.remove("offen");
    zigaretteOverlay.classList.remove("offen");

  });


  const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.swiper-pagination' },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});
});
