"use strict";

const h22 = document.querySelectorAll("h2");
console.log(`Number of categories: ${h22.length}`);
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  const aaaa = item.lastElementChild;
  console.log("Elements:", aaaa.children.length);
});
