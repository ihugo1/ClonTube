let descriptionBtnOpen = document.querySelector(".description__open-btn");
let descriptionBtnClose = document.querySelector(".description__close-btn");
let descriptionDiv = document.querySelector(".description__content");

function toggleDescription(){
    descriptionDiv.classList.toggle("display-block");
    descriptionBtnOpen.classList.toggle("display-none");
    console.log("Si");
}

descriptionBtnOpen.addEventListener("click", toggleDescription);
descriptionBtnClose.addEventListener("click", toggleDescription);