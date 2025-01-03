// Resetuje skrol poziciju na vrh stranice pri učitavanju
window.onload = function() {
    window.scrollTo(0, 0);
}

// Selektovanje linka za "Početnu stranicu"
const homeLink = document.querySelector('a[href="#home"]');

// Dodavanje event listenera
homeLink.addEventListener('click', (event) => {
  event.preventDefault(); // Sprečava defaultno ponašanje linka
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Dodaje animirani prelaz ka vrhu stranice
  });
});

//hamburger dugme 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Kraj hamburger dugmeta

//Back to top dugme 

document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
      // Prikazivanje dugmeta pri skrolovanju
      window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
              backToTopButton.classList.add("show");
              backToTopButton.classList.remove("hide");
          } else {
              backToTopButton.classList.add("hide");
              backToTopButton.classList.remove("show");
          }
      });

      // Povratak na vrh kada se dugme klikne
      backToTopButton.addEventListener("click", () => {
          window.scrollTo({
              top: 0,
              behavior: "smooth",
          });
      });
  }
});

//Kraj back to top dugmeta


//Porudzbina logika kada se posalje da se resitiraju sva polja 

function handleFormSubmit(event) {
  event.preventDefault(); // Sprečava podrazumevani reload
  const form = event.target;

  // Resetuj polja nakon uspešnog slanja
  form.reset();

  // Prikaz povratne informacije
  alert("Poruka uspešno poslata! Sva polja su resetovana.");

  // Opcionalno: Preusmeravanje nazad ili osvežavanje stranice
  window.location.href = window.location.href; // Reload stranice
}



function handleFormSubmit(event) {
  event.preventDefault(); // Sprečava podrazumevani reload
  const form = event.target;

  // Resetuj polja nakon uspešnog slanja
  form.reset();

  // Prikaži modal
  const modal = document.getElementById("success-modal");
  modal.style.display = "block";
}

function closeModal() {
  // Zatvori modal
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
}
function handleFormSubmit(event) {
  event.preventDefault(); // Sprečava podrazumevani reload
  const form = event.target;

  // Resetuj polja nakon uspešnog slanja
  form.reset();

  // Prikaži modal
  const modal = document.getElementById("success-modal");
  modal.style.display = "block";
}

function closeModal() {
  // Zatvori modal
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
}

function goToHome() {
  console.log("Preusmeravanje na početnu stranicu...");
  window.location.href = "index.html"; // Ova ruta treba da vodi do tvoje početne stranice
}


// Kraj reseta 