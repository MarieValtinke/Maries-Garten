
// SWIPER

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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

