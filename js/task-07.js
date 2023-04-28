const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

addEventListener("load", () => {
  text.style.fontSize = "55px";
});
sizeControl.addEventListener("input", function () {
  const numbSizeControl = Number(sizeControl.value);
  text.style.fontSize = `${numbSizeControl}px`;
});
