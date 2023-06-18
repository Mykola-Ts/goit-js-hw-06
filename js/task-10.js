const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const arrMarkupBoxes = [];

btnCreate.addEventListener("click", handlerCreate);

/**
 *Створює таку кількість <div>, яку користувач ввів у input і додає їх у div#boxes
 */
function handlerCreate() {
  const markupBoxes = createBoxes(inputNumber.value);

  divBoxes.insertAdjacentHTML("beforeend", markupBoxes);

  arrMarkupBoxes.splice(0, arrMarkupBoxes.length);

  inputNumber.value = 0;
}

/**
 * Створює розмітку для такої кількості <div>, яка вказана в amount
 * @param {Number} amount
 */
function createBoxes(amount) {
  let widthBox = 20;
  let heightBox = 20;

  for (let i = 0; i < amount; i += 1) {
    widthBox += 10;
    heightBox += 10;

    const markupBox = `<div style="width: ${widthBox}px; height: ${heightBox}px; background-color: ${getRandomHexColor()}" class="box"></div>`;
    arrMarkupBoxes.push(markupBox);
  }

  return arrMarkupBoxes.join("");
}

btnDestroy.addEventListener("click", handlerDestroy);

/**
 *Очищає вміст div#boxes, видаляючи всі створені елементи
 */
function handlerDestroy() {
  divBoxes.innerHTML = "";

  arrMarkupBoxes.splice(0, arrMarkupBoxes.length);

  inputNumber.value = 0;
}

/**
 * Генерує випадковий колір у форматі HEX
 * @returns {String} Випадковий колір
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
