const audio = document.querySelector("#lauschen-audio");
const animation = document.querySelector(".animationmitkatze");
const vollbildButton = document.querySelector(".button-vollbild");
const lauschen = document.querySelector("#PlitschPlatsch");

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

  vollbildButton.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      if (!document.fullscreenElement) {
        await lauschen.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen konnte nicht aktiviert werden:", error);
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement === lauschen && !audio.paused) {
      animation.classList.add("is-playing");
    } else {
      animation.classList.remove("is-playing");
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
    // AUSSCHALTEN
  const ausschalten = document.querySelector("#ausschalten-btn");
  if (ausschalten) {
    ausschalten.addEventListener("click", function () {
      const blackout = document.createElement("div");
      blackout.style.cssText = `
        position: fixed;
        inset: 0;
        background: black;
        z-index: 999999;
        opacity: 0;
        transition: opacity 1s ease;
        cursor: pointer;
      `;
      document.body.appendChild(blackout);
      // kurz warten damit transition greift
      requestAnimationFrame(() => requestAnimationFrame(() => {
        blackout.style.opacity = "1";
      }));
      // Klick auf die schwarze Fläche macht sie wieder weg
      blackout.addEventListener("click", function () {
        blackout.style.opacity = "0";
        blackout.addEventListener("transitionend", () => blackout.remove(), { once: true });
      });
    });
  }
});

const darkmodeButton = document.getElementById('darkmode-toggle');
const root = document.documentElement;
const storageKey = 'theme';

if (darkmodeButton) {
  const gespeichertesTheme = localStorage.getItem(storageKey);
  if (gespeichertesTheme === 'light' || gespeichertesTheme === 'dark') {
    root.setAttribute('data-theme', gespeichertesTheme);
  }

  darkmodeButton.addEventListener('click', function () {
    const aktuellesTheme = root.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const naechstesTheme = aktuellesTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', naechstesTheme);
    localStorage.setItem(storageKey, naechstesTheme);
  });
}


