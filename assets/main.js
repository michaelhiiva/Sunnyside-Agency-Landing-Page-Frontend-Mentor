const threeBarMenu = document.querySelector(".header__menu_icon");
const hiddenMenu = document.querySelector(".header__menu_section");

threeBarMenu.addEventListener("click", () => {
    hiddenMenu.classList.toggle("header__menu_section_show");
});