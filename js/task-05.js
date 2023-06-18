const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", hendlerInputValue);

/**
 * Підставляє поточне значення input#name-input в span#name-output
 * @param {InputEvent} event
 */
function hendlerInputValue(event) {
  const inputValue = event.currentTarget.value.trim();

  span.textContent = inputValue ? event.currentTarget.value : "Anonymous";
}
