const navbar = document.getElementById("navbar");

// Funzione per aggiungere o rimuovere la classe 'scrolled' alla navbar
window.onscroll = function () {
  if (window.scrollY > 50) {
    // Quando si scorre oltre 50px (puoi modificare questo valore)
    navbar.classList.add("scrolled"); // Aggiungi la classe che cambia il colore
  } else {
    navbar.classList.remove("scrolled"); // Rimuovi la classe se l'utente torna in cima
  }
};

/*Bottone*/
// const navbar = document.getElementById("navbar");

// // Funzione per aggiungere o rimuovere la classe 'scrolled' alla navbar
// window.onscroll = function () {
//   if (window.scrollY > 50) {
//     // Quando si scorre oltre 50px (puoi modificare questo valore)
//     navbar.classList.add("scrolled"); // Aggiungi la classe che cambia il colore della navbar e del bottone
//   } else {
//     navbar.classList.remove("scrolled"); // Rimuovi la classe se l'utente torna in cima
//   }
// };
