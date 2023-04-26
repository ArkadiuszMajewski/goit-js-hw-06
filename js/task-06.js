const input = document.querySelector("#validation-input");

const neededLength = input.dataset.length;

const check = () => {
  if (input.value.length === Number(neededLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (input.value.length !== Number(neededLength)) {
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", check);
