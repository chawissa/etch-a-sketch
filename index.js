const grid = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");

const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

function updateGrid() {
  const numSquare = prompt("Enter how many squares each row/column:", "16");
  const userInput = +numSquare;

  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(${userInput}, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(${userInput}, 2fr)`);
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function (e) {
  e.target.classList.replace("square", "color");
});

btnReset.addEventListener("click", updateGrid);
createGrid();
