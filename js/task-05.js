"use strict";
const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

output.textContent;

input.addEventListener("input", function () {
  if (this.value.length > 0) {
    output.textContent = this.value;
  } else if (this.value.length === 0) {
    output.textContent = "Anonymous";
  }
});
