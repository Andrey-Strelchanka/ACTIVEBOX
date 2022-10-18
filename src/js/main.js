import Carousel from 'bootstrap/js/dist/carousel';

let hamb = document.querySelector(".header__hamb");
let navMenu = document.querySelector(".header__navbar-list");
let headerMenu = document.querySelector(".header__navbar");
let header = document.querySelector(".wrapper-background");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    wrapper-background.classList.toggle("active");
}

const navLink = document.querySelectorAll(".header__navbar-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headerMenu.classList.remove("active");
    wrapper-background.classList.remove("active");
}