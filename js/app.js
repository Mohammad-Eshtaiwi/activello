"use strict";
// nav bar menu
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-links");

function toggleNavList() {
    console.log("hi");
    navList.classList.toggle("show-list");
}
menu.addEventListener("click", toggleNavList);
