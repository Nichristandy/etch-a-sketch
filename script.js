// variables and the DOM
const canvas = document.querySelector(".container");
const clearButton = document.getElementById("clear-button");
const sizeButton = document.getElementById("size-button");
// console.log(canvas);

let isRandomColor = false;

document.getElementById("color-toggle").addEventListener("click", () => {
  isRandomColor = !isRandomColor;
  const buttonText = isRandomColor ? "Black Color" : "Random Color";
  document.getElementById("color-toggle").innerText = buttonText;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function createGrid(size) {
  canvas.innerHTML = ""; // Clear existing grid

  // Set the grid layout
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid");

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = isRandomColor ? getRandomColor() : "black";
    });

    canvas.appendChild(cell); // Append cell to the grid container
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".grid");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function changeGridSize() {
  let size;
  do {
    size = prompt("Enter the number of squares per side (1-100):");
  } while (size < 1 || size > 100);

  createGrid(size);
}

clearButton.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", changeGridSize);

// button to get input from user
// generate the div container width
// generate the custom div for the cursor

// cursor pointer
