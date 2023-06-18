const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", handlerDecrementValue);

/**
 *Зменшує значення лічильника та оновлює інтерфейс новим значенням змінної counterValue
 */
function handlerDecrementValue() {
  counterValue -= 1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener("click", handlerIncrementValue);

/**
 * Збільшує значення лічильника та оновлює інтерфейс новим значенням змінної counterValue
 */
function handlerIncrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
