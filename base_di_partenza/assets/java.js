const navbar = document.getElementById("navbar");
const header = document.querySelector("header");

// Funzione per aggiungere o rimuovere la classe 'scrolled' alla navbar
window.onscroll = function () {
  // Ottieni la posizione dell'header
  const headerBottom = header.getBoundingClientRect().bottom;

  // Cambia il colore della navbar appena l'utente è quasi alla fine dell'header
  if (headerBottom <= 0) {
    // Quando la fine dell'header è fuori dalla vista
    navbar.classList.add("scrolled"); // Aggiungi la classe 'scrolled'
  } else {
    navbar.classList.remove("scrolled"); // Rimuovi la classe 'scrolled' se è ancora visibile
  }
};

// window.addEventListener("load", function () {
//   const navbarHeight = document.querySelector(".navbar").offsetHeight;
//   const discover3 = document.querySelector(".discover3");
//   discover3.style.marginTop = navbarHeight + "px";
// });
