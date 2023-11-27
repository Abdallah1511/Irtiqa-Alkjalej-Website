// toggler button (navigation mobile)
let togglerButton = document.querySelector("button.navbar-toggler");
let mainMenu = document.getElementById("navbarSupportedContent");
togglerButton.addEventListener("click", () => {
  mainMenu.classList.toggle("d-block");
  mainMenu.style.transition = "0.5s";
});
