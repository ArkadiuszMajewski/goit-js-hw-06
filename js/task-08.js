"use strict";
const loginForm = document.querySelector(".login-form");

const email = loginForm["email"];
// const email = document.querySelector(`[name="email"]`);

const password = loginForm["password"];
// const password = document.querySelector(`[name="password"]`);

function handleSubmit(event) {
  event.preventDefault();
  // const {
  //   elements: { email, password },
  // } = event.currentTarget;
  if (email.value.length === 0) {
    alert("Email field must be filled in");
  } else if (password.value.length === 0) {
    alert("Password field must be filled in");
  }
  // console.log(email.value);
  // console.log(password.value);
  const emailPassword = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(emailPassword);

  loginForm.reset();
}

loginForm.addEventListener("submit", handleSubmit);
