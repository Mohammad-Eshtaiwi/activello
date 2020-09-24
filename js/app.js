"use strict";
// nav bar menu
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-links");

function toggleNavList() {
    console.log("hi");
    navList.classList.toggle("show-list");
}
menu.addEventListener("click", toggleNavList);

// slider
// the slider function will strat work with index one cuz index 0 is already displaayed
let indexOfSlider = 1;
//  add event to the controlers
let controls = document.querySelectorAll(".control");
for (let control = 0; control < controls.length; control++) {
    controls[control].addEventListener("click", sliderControler);
}
function sliderControler() {
    // shall clear the interval other wise you will get very fast refreshing
    clearInterval(sliderTimer);
    sliderTimer = setInterval(refreshSlider, 10000);
    indexOfSlider = event.path[0].dataset.index;
    refreshSlider();
}

function refreshSlider() {
    let elemnets = document.querySelectorAll(".slider > div");
    for (let slide = 0; slide < elemnets.length; slide++) {
        elemnets[slide].classList.add("d-none");
        elemnets[slide].classList.remove("fade-in");
        controls[slide].classList.remove("active");
    }
    elemnets[indexOfSlider].classList.remove("d-none");
    elemnets[indexOfSlider].classList.add("fade-in");
    controls[indexOfSlider].classList.add("active");
    indexOfSlider++;
    if (indexOfSlider === elemnets.length) indexOfSlider = 0;
}

let sliderTimer = setInterval(refreshSlider, 10000);
