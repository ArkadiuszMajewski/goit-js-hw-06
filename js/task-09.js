function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const widget = document.querySelector(".widget");

const span = document.querySelector(".color");

const button = document.querySelector(".change-color");

const eventHandler = () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;

  span.textContent = hexColor;
};

button.addEventListener("click", eventHandler);
