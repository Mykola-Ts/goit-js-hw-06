const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", handlerChangeColor);

/**
 * Змінює колір фону <body> через інлайн-стиль і виводить значення кольору в span.color
 */
function handlerChangeColor() {
  const color = getRandomHexColor();

  span.textContent = color;
  body.style.backgroundColor = color;
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
