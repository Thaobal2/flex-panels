"use strict";

const targets = document.querySelectorAll(".box");
const removal = document.querySelectorAll(".removal");
const texts = document.querySelectorAll(".upper-text");
let dataKey0 = document.querySelector(`[data-key="0"]`);
let dataKey1 = document.querySelector(`[data-key="1"]`);
let dataKey2 = document.querySelector(`[data-key="2"]`);
let dataKey3 = document.querySelector(`[data-key="3"]`);
let dataKey4 = document.querySelector(`[data-key="4"]`);
let dataKey5 = document.querySelector(`[data-key="5"]`);
let dataKey6 = document.querySelector(`[data-key="6"]`);
let dataKey7 = document.querySelector(`[data-key="7"]`);
let dataKey8 = document.querySelector(`[data-key="8"]`);
let dataKey9 = document.querySelector(`[data-key="9"]`);
const middles = document.querySelectorAll(".middle-text");
let toggle = true;

targets.forEach((target) =>
  target.addEventListener("click", () => {
    if (target.contains(dataKey0)) {
      dataKey0.style.display = toggle ? "none" : "block";
      dataKey5.style.display = toggle ? "none" : "block";
      toggle = !toggle;
    } else if (target.contains(dataKey1)) {
      dataKey1.style.display = toggle ? "none" : "block";
      dataKey6.style.display = toggle ? "none" : "block";
      toggle = !toggle;
    } else if (target.contains(dataKey2)) {
      dataKey2.style.display = toggle ? "none" : "block";
      dataKey7.style.display = toggle ? "none" : "block";
      toggle = !toggle;
    } else if (target.contains(dataKey3)) {
      dataKey3.style.display = toggle ? "none" : "block";
      dataKey8.style.display = toggle ? "none" : "block";
      toggle = !toggle;
    } else if (target.contains(dataKey4)) {
      dataKey4.style.display = toggle ? "none" : "block";
      dataKey9.style.display = toggle ? "none" : "block";
      toggle = !toggle;
    }
  })
);
