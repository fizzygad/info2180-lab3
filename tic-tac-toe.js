document.addEventListener("DOMContentLoaded", function () {
  let player1 = "X";
  let player2 = "O";
  let turn=1;
  let gamearr=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
  const butn = document.querySelector(".btn");
  const stat = document.getElementById("status");

  const squares = document.querySelectorAll("#board > div");
  squares.forEach((square) => square.classList.add("square"));

  squares.forEach((square) => {
    square.addEventListener("click", function(){
      if (square.innerHTML==""){
        if (turn%2==1){
          square.classList.add(player1);
          square.innerHTML=player1;
        } else {
          square.classList.add(player2);
          square.innerHTML=player2;
        }
        turn+=1;
        CheckforWin();
      }
      else{
        window.alert("This square has already been marked!");
      }
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
  
  function CheckforWin(){
    for (const combo of gamearr){
      const [a,b,c] = combo;
      if ((squares[a].classList.contains(player1))&&(squares[b].classList.contains(player1))&&
      (squares[c].classList.contains(player1))){
        stat.innerHTML = "Congratulations! X is the Winner!";
        stat.classList.add("you-won");
      }
      else if ((squares[a].classList.contains(player2))&&(squares[b].classList.contains(player2))&&
      (squares[c].classList.contains(player2))){
        stat.innerHTML = "Congratulations! O is the Winner!";
        stat.classList.add("you-won");
      }
    }
  }

  butn.addEventListener("click", function(){
    squares.forEach((square) => {
      square.innerHTML="";
      square.classList.remove("X", "O");
      turn=1;
      stat.innerHTML="Move your mouse over a square and click to play an X or an O.";
      stat.classList.remove("you-won");
    })
  })



});
