const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bi = document.getElementsByClassName('bi');
const text = document.getElementsByClassName('container');

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  for (const element of bi) {
    element.style.color = hexColor;
  };
  for (const e of text) {
    e.style.color = hexColor;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}