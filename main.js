"use strict";

const inputSpacing = document.getElementById("spacing");
const inputBlur = document.getElementById("blur");
const inputBorder = document.getElementById("border-radius");
console.log(inputSpacing, inputBlur, inputBorder);
const img = document.querySelector("img");
console.log(img);
const inputColor = document.getElementById("base");
const span = document.querySelector(".js");

function spacingHandler(ev) {
  const spacingValue = ev.target.value;
  img.style.setProperty("padding", `${spacingValue}` + "px");
}

inputSpacing.addEventListener("mousemove", spacingHandler);

function blurHandler(ev) {
  const blurValue = ev.target.value;
  console.log(blurValue);
  img.style.setProperty("filter", `blur(${blurValue}` + "px)");
}

inputBlur.addEventListener("mousemove", blurHandler);

function borderHandler(ev) {
  const borderValue = ev.target.value;
  img.style.setProperty("border-radius", `${borderValue}` + "px");
}

inputBorder.addEventListener("mousemove", borderHandler);

function colorHandler(ev) {
  const colorValue = ev.target.value;
  console.log(colorValue);
  img.style.setProperty("background", `${colorValue}`);
  span.style.setProperty("color", `${colorValue}`);
}

inputColor.addEventListener("change", colorHandler);
