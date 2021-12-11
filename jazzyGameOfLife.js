
function gridFunction(size) {
  grid = document.getElementById("grid");
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
      box.style.height = 10;
      box.style.width = 10;
      box.style.background = "black";
      box.style.borderRadius = "10px"
      if (Math.random() > 0.94) {
        box.style.background = "teal";

      }
      row.appendChild(box);
    }
  }
  return grid;
}

function neighborCount(grid, xx, yy) {
  let count = 0;
  for (let y = yy - 1; y <= yy + 1; y++) {
    for (let x = xx - 1; x < xx + 2; x++) {
      if (x != xx || y != yy) {
        if (grid.childNodes[y] != null) {
          if (grid.childNodes[y].childNodes[x] != null) {
            if (grid.childNodes[y].childNodes[x].style.background == "teal") count++;

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
      if (currentBox.style.background == "teal" && (count < 2 || count > 3))
        currentBox.style.background = "black";
      else if (currentBox.style.background == "black" && count == 3) currentBox.style.background = "teal";
    }
  }
}

let runListener = function () {
  document.querySelector("#runButton").addEventListener("click", () => { run() })
}

let autoRunListener = function () {
  document.querySelector("#autoRunButton").addEventListener("click", () => {
    if (running) {
      clearInterval(running);
      running = false;
    } else {
      running = setInterval(run, 100);
    }
  })
}

let restartListener = function () {
  document.querySelector("#restartButton").addEventListener("click", () => {
    window.location.reload();
  });
}

let grid;

function runGameOfLife() {
  console.log(document.body)
  console.log("yo")
  gridFunction(70);
  runListener();
  running = false;
  autoRunListener();
  restartListener();
  run()
}



