const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(sizeControl);
console.log(text);
sizeControl.addEventListener("input", function () {
  const numbSizeControl = Number(sizeControl.value);
  text.style.fontSize = `${numbSizeControl}px`;
});
