const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// console.log(ingredients);
const ulIngridients = document.querySelector("#ingredients");
// // console.log(ulIngridients);

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = `${ingredient}`;
  li.classList.add("item");
  ulIngridients.append(li);
});
