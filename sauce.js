function createDrawing() {
  /*
    Creates an individual pixel, for drawing
    :D
  */
  const drawingsquare = document.createElement("div");
  drawingsquare.style.borderRadius = "5px";
  drawingsquare.style.height = "20px";
  drawingsquare.style.width = "20px";
  drawingsquare.style.backgroundColor = "green";
  drawingsquare.className = "drawing";

  return drawingsquare;
}

const container = document.querySelector(".bigthing");

for (let i = 0; i < 340; i++) {
  container.appendChild(createDrawing());
}

container.addEventListener("mouseover", function (e) {
  if ( e.target.className != "drawing"){
    return
  }
  e.target.style.backgroundColor = "gray"
});
