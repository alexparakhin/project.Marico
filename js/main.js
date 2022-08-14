"use strict";

const burger = document.querySelector("#burger");
const slider = document.querySelector("#slider");
const nav = document.querySelector("#nav").cloneNode(1);
const body = document.body;

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  slider.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderSlider();
}

function renderSlider() {
  slider.appendChild(nav);
}
