// for (let i = 0; i < 16; i++) {
//   let row = document.createElement("div");
//   for (let j = 0; j < 16; j++) {
//     let cell = document.createElement("div");
//     cell.classList.add("cell");
//     row.appendChild(cell);
//   }
//   document.getElementById("container").appendChild(row);
// }

const grid = document.querySelector(".container");

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

createGrid();
