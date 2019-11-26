const box = document.querySelectorAll(".box");
const board = document.querySelector(".board");
const button = document.querySelector("button");
let player1Score = 0;
let player2Score = 0;
let player1 = [];
let player2 = [];
let MatchCheck = [];
let color = "red";
let click = 0;

for (let i = 0; i < box.length; i++) {
  box[i].dataset.isClicked = false;
  box[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    if (evt.target.dataset.isClicked == "false") {
      evt.target.dataset.isClicked = true;
      if (color == "red") {
        evt.target.style.backgroundColor = "red";
        color = "blue";
        player1.push(i);
        checkForWinner();
        click++;
        console.dir(evt.target.dataset.number);
      } else if (color == "blue") {
        evt.target.style.backgroundColor = "blue";
        color = "red";
        player2.push(i);
        checkForWinner();
        click++;
      }
    }
    // if (
    //   (click >= 9 && player1Score >= 5) ||
    //   (click >= 9 && player1Score >= 5)
    // ) {
    //   alert("its a tie");
    // } else {
    //   checkForWinner();
    // }
  });
}
function checkForWinner() {
  if (
    box[0].style.backgroundColor === box[1].style.backgroundColor &&
    box[1].style.backgroundColor === box[2].style.backgroundColor
  ) {
    if (box[0].style.backgroundColor == "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[0].style.backgroundColor == "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[3].style.backgroundColor === box[4].style.backgroundColor &&
    box[4].style.backgroundColor === box[5].style.backgroundColor
  ) {
    if (box[3].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins second statement");
    }
    if (box[3].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[6].style.backgroundColor === box[7].style.backgroundColor &&
    box[7].style.backgroundColor === box[8].style.backgroundColor
  ) {
    if (box[6].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[6].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[0].style.backgroundColor === box[3].style.backgroundColor &&
    box[3].style.backgroundColor === box[6].style.backgroundColor
  ) {
    if (box[0].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[0].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[1].style.backgroundColor === box[4].style.backgroundColor &&
    box[4].style.backgroundColor === box[7].style.backgroundColor
  ) {
    if (box[1].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[1].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[2].style.backgroundColor === box[5].style.backgroundColor &&
    box[5].style.backgroundColor === box[8].style.backgroundColor
  ) {
    if (box[2].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[2].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[0].style.backgroundColor === box[4].style.backgroundColor &&
    box[4].style.backgroundColor === box[8].style.backgroundColor
  ) {
    if (box[0].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[0].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (
    box[2].style.backgroundColor === box[4].style.backgroundColor &&
    box[4].style.backgroundColor === box[6].style.backgroundColor
  ) {
    if (box[2].style.backgroundColor === "red") {
      player1Score++;
      alert("player1 wins");
    }
    if (box[2].style.backgroundColor === "blue") {
      player2Score++;
      alert("player2 wins");
    }
  } else if (player1.length >= 5 || player2.length >= 5) {
    player1 = [];
    player2 = [];
    alert("its a tie");
  }
}
button.addEventListener("click", function(evt) {
  for (i = 0; i < box.length; i++) {
    evt.preventDefault();
    box[i].style.backgroundColor = "";
    box[i].dataset.isClicked = false;
    player1 = [];
    player2 = [];
  }
});
// button.addEventListener('click', function(evt){
//     evt.preventDefault();

// })
