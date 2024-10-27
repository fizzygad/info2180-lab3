document.addEventListener("DOMContentLoaded", function () {
  let player1 = "X";
  let player2 = "O";
  let turn=1;
  let gamearr=[];
  const squares = document.querySelectorAll("#board > div");
  squares.forEach((square) => square.classList.add("square"));

  squares.forEach((square) => {
    square.addEventListener("click", function(){
      if (turn%2==1){
        square.classList.add(player1);
        square.innerHTML=player1;
      } else {
        square.classList.add(player2);
        square.innerHTML=player2;
      }
      turn+=1;
    });
  });

  squares.forEach((square) => {
    square.addEventListener("mouseover", function(){
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", function(){
      square.classList.remove("hover");
    });
  });





});
