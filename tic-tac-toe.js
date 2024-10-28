document.addEventListener("DOMContentLoaded", function () {
  let player1 = "X";
  let player2 = "O";
  let turn=1;
  let gamearr=[ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

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
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
        document.getElementById("status").classList.add("you-won");
      }
      else if ((squares[a].classList.contains(player2))&&(squares[b].classList.contains(player2))&&
      (squares[c].classList.contains(player2))){
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
        document.getElementById("status").classList.add("you-won");
      }
    }
  }





});
