function createDrawing() {
  /*
    Creates an individual pixel, for drawing
    :D
  */
  const drawingsquare = document.createElement("div");
  drawingsquare.style.borderRadius = "5px";
  drawingsquare.style.height = "20px";
  drawingsquare.style.width = "20px";
  drawingsquare.style.backgroundColor = "bisque";
  drawingsquare.className = "drawing";

  return drawingsquare;
}
let modeToggle = true;
let drawToggle = true;
const erasebtn = document.querySelector("button");
const modebtn = document.querySelector("#mode");
const container = document.querySelector(".bigthing");
const modetext = document.querySelector("h3");

// creates the individual pixels
for (let i = 0; i < 340; i++) {
  container.appendChild(createDrawing());
}
const draw = document.querySelectorAll(".drawing");

container.addEventListener("mouseover", function (e) {
  if (e.target.className != "drawing") {
    return;
  }
  //check if drawing is enabled
  if (!drawToggle) {
    return;
  }
  //draw and erase mode
  if (modeToggle) {
    e.target.style.backgroundColor = "gray";
  } else {
    e.target.style.backgroundColor = "bisque";
  }
});

erasebtn.addEventListener("click", () => {
  draw.forEach((square) => {
    square.style.backgroundColor = "bisque";
  });
});

modebtn.addEventListener("click", () => {
  modeToggle = !modeToggle;
  if (modeToggle) {
    modetext.textContent = "Currently drawing";
  } else {
    modetext.textContent = "Currently erasing";
  }
});

window.addEventListener("keydown", () => {
  drawToggle = !drawToggle;
});
