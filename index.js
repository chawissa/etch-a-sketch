const grid = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");

const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function (e) {
  e.target.classList.replace("square", "color");
});

btnReset.addEventListener("click", function () {
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();
