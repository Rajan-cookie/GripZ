//window.location.href = "azuriranje.html";


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

async function handleFormSubmit(event) {
  event.preventDefault(); // Spreči podrazumevani reload stranice
  const form = event.target; // Dohvati formu koja je poslata
  const formData = new FormData(form); // Pripremi podatke za slanje

  console.log("Podaci koji se šalju na Web3Forms:", Object.fromEntries(formData)); // Provera podataka

  try {
    // Pošalji podatke na Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    console.log("Odgovor Web3Forms API-ja:", response); // Provera odgovora sa servera

    if (!response.ok) {
      throw new Error("Greška u slanju forme");
    }

    // Ako je sve u redu, prikaži modal
    const modal = document.getElementById("success-modal");
    modal.style.display = "block";

    // Resetuj formu
    form.reset();

    console.log("Uspešno poslato:", await response.json());
  } catch (error) {
    console.error("Došlo je do greške:", error);
    alert("Došlo je do greške pri slanju poruke. Pokušajte ponovo.");
  }
}

function closeModal() {
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
}

function goToHome() {
  window.location.href = "index.html"; // Preusmeravanje na početnu stranicu
}


// Kraj reseta 