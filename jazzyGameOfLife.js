let backgroundColor = "transparent";
let boxColor = "white";
let shadowColor = "white"

function gridFunction(size) {
  let grid = document.getElementById("grid");

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.style.display = "flex"
    row.style.margin = "0px";
    row.style.padding = "0px";
    grid.appendChild(row);
    for (let j = 0; j < size; j++) {
      let box = document.createElement("p");
      box.style.margin = "0px";
      box.style.padding = "0px";
      box.style.height = "10px";
      box.style.width = "10px";
      box.style.background = backgroundColor;
      box.style.boxShadow = "";
      box.style.borderRadius = "10px"
      if (Math.random() > 0.94) {
        console.log("yes")
        console.log(box.height)
        box.style.background = boxColor;
      }
      row.appendChild(box);
    }
  }
  console.log(grid)
  return grid;
}

function neighborCount(grid, xx, yy) {
  let count = 0;
  for (let y = yy - 1; y <= yy + 1; y++) {
    for (let x = xx - 1; x < xx + 2; x++) {
      if (x != xx || y != yy) {
        if (grid.childNodes[y] != null) {
          if (grid.childNodes[y].childNodes[x] != null) {
            if (grid.childNodes[y].childNodes[x].style.background == boxColor) count++;

          }
        }
      }
    }
  }

  return count;
}

function run() {
  for (let y = 0; y < grid.childNodes.length; y++) {
    for (let x = 0; x < grid.childNodes[y].childNodes.length; x++) {
      let currentBox = grid.childNodes[y].childNodes[x];
      count = neighborCount(grid, x, y);
      if (currentBox.style.background == boxColor && (count < 2 || count > 3)){
        currentBox.style.background = backgroundColor;
        currentBox.style.boxShadow = "";
      }
      else if (currentBox.style.background == backgroundColor && count == 3) {
        currentBox.style.background = boxColor;
        currentBox.style.boxShadow = "0px 0px 15px gold";
      }
    }
  }
}

  document.querySelector("#runButton").addEventListener("click", () => { run() })

document.querySelector("#autoRunButton").addEventListener("click", () => {
  if (running) {
    clearInterval(running);
    running = false;
  } else {
    running = setInterval(run, 100);
  }
})

document.querySelector("#restartButton").addEventListener("click", () => {
  window.location.reload();
});

let running = false;

runGameOfLife = function () {
  let grid = gridFunction(70);
}



