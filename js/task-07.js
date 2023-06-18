const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handlerShowValue);

/**
 * Змінює інлайн-стиль span#text, оновлюючи властивість font-size
 * поточним значенням input#font-size-control.
 */
function handlerShowValue() {
  const inputValue = input.value;

  span.style.fontSize = `${inputValue}px`;
}
