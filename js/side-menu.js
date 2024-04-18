let btnOpen = document.querySelector(".side-menu-btn-open");
let btnClose = document.querySelector(".side-menu-btn-close");
let sideMenu = document.querySelector(".side-menu");
let overlay = document.querySelector(".overlay");

function toggleClasses(){
    sideMenu.classList.toggle("side-menu-ACTIVE");
    overlay.classList.toggle("activeOverlay");
}

btnOpen.addEventListener("click", toggleClasses);
btnClose.addEventListener("click", toggleClasses);