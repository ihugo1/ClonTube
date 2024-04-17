let btnOpen = document.querySelector(".side-menu-btn-open");
let btnClose = document.querySelector(".side-menu-btn-close");
let sideMenu = document.querySelector(".side-menu");
let overlay = document.querySelector(".overlay");

btnOpen.addEventListener("click",
    function(){
        sideMenu.classList.toggle("side-menu-ACTIVE");
        overlay.classList.toggle("activeOverlay");
    }
);
btnClose.addEventListener("click",
    function(){
        sideMenu.classList.toggle("side-menu-ACTIVE");
        overlay.classList.toggle("activeOverlay");
    }
);