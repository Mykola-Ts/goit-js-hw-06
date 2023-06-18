const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerValidation);

/**
 *Перевіряє вміст input#validation-input щодо правильної кількості введених символів.
 Якщо введена правильна кількість символів, додає клас valid, 
 якщо неправильна кількість - invalid
 * @param {InputEvent} event
 */
function handlerValidation(event) {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue.length === Number(input.dataset.length)) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");

    console.log("true");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");

    console.log("false");
  }
}
