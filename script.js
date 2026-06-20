const jokes = [
  "¿Por qué el libro fue al baile? Porque tenía muchas páginas para pasarla bien.",
  "La coreografía salió tan sincronizada que hasta el WiFi se conectó por respeto.",
  "Yo leyendo bailo igual: empiezo suave y termino perdido en otro capítulo.",
  "Ese paso estuvo tan fuerte que el piso pidió cinco minutos de descanso.",
  "La lectura y el baile se parecen: si pierdes el ritmo, respiras, sonríes y finges que era parte del show."
];

const jokeButton = document.querySelector("#jokeButton");
const jokeText = document.querySelector("#jokeText");

jokeButton.addEventListener("click", () => {
  const index = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[index];
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");

document.querySelectorAll(".photo-card").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function hideLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

closeLightbox.addEventListener("click", hideLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    hideLightbox();
  }
});
