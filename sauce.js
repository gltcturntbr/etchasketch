function createDrawing() {
  /*
    Creates an individual pixel, for drawing
    :D
  */
  const drawingsquare = document.createElement("div");
  drawingsquare.style.borderRadius = "5px";
  drawingsquare.style.height = "25px";
  drawingsquare.style.width = "25px";
  drawingsquare.style.backgroundColor = "white";

  return drawingsquare;
}

const container = document.querySelector(".bigthing");

for (let i = 0; i < 240; i++) {
  container.appendChild(createDrawing());
}


