grid = document.querySelector("#grid");
grid.style.height = "300px";
grid.style.width = "300px";

let draw = false;
document.addEventListener("click", function () {
  draw = !draw;
});

function createGrid(squareSize) {
  for (let j = 0; j < squareSize; j++) {
    row = document.createElement("div");
    console.log("row" + j);
    row.id = "row" + j;
    row.className = "flex";

    for (let i = 0; i < squareSize; i++) {
      col = document.createElement("div");
      col.id = "col" + i;
      console.log("col" + i);
      col.className = "border-rose-500 border-solid border-2";
      col.style.backgroundColor = "white";
      //console.log(grid.style);
      console.log(
        grid.style.height,
        grid.style.width,
        parseInt(grid.style.height),
        parseInt(grid.style.width),
        toString(parseInt(grid.style.height) / squareSize) + "px"
      );
      col.style.height = parseInt(grid.style.height) / squareSize + "px";
      col.style.width = parseInt(grid.style.width) / squareSize + "px";
      console.log(col.style.height, col.style.width);

      col.onmouseover = (function (col) {
        return function () {
          if (draw) {
            col.style.backgroundColor = "indigo";
          }
        };
      })(col);

      row.appendChild(col);
      console.log(
        grid.style.height,
        grid.style.width,
        parseInt(col.style.height),
        parseInt(col.style.width)
      );
    }
    console.log("grid");
    grid.appendChild(row);
    console.log("grid added");
  }
}

createGrid(10);
