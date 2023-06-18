const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const items = [];

ingredients.forEach(function createListItem(element) {
  const listItem = document.createElement("li");

  listItem.textContent = `${element}`;
  listItem.classList.add("list");

  items.push(listItem);
});

list.prepend(...items);
