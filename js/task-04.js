"use strict";
const counter = document.querySelector("#counter");
let value = document.querySelector("#value");
let counterValue = 0;

function decrement() {
  counterValue--;
  value.textContent = counterValue;
}
function increment() {
  counterValue++;
  value.textContent = counterValue;
}

console.log(counter.firstElementChild);
counter.firstElementChild.addEventListener("click", decrement);
counter.lastElementChild.addEventListener("click", increment);
