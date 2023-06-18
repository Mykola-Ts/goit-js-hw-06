const form = document.querySelector(".login-form");
const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const objValueInput = {};

form.addEventListener("submit", handlerFormValidation);

/**
 *Оброблює відправлення form.login-form та збирає значення полів в об'єкт, 
 якщо користувач заповнив усі поля і відправив форму.
 * @param {InputEvent} event
 */
function handlerFormValidation(event) {
  event.preventDefault();

  if (inputEmail.value && inputPassword.value) {
    objValueInput[`${inputEmail.name}`] = inputEmail.value;
    objValueInput[`${inputPassword.name}`] = inputPassword.value;

    console.log(objValueInput);

    event.currentTarget.reset();
  } else {
    alert("Всі поля повинні бути заповнені!");
  }
}
