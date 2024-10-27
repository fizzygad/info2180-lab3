document.addEventListener("DOMContentLoaded", function () {
    let player1 = "X";
    const squares = document.querySelectorAll("#board > div");
    squares.forEach((square) => square.classList.add("square"));
  });