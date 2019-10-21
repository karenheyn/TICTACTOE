const box = document.querySelectorAll('.box');
const board = document.querySelector('.board');
let player1Score = 0
let player2Score = 0
let player1 =[]
let player2 =[]
let MatchCheck = []
let color = 'red'

for (let i = 0; i < box.length; i++) {
    box[i].dataset.isClicked = false
    box[i].addEventListener('click', function (evt) {
        evt.preventDefault()
        if (evt.target.dataset.isClicked == 'false') {
            evt.target.dataset.isClicked = true
            if (color == 'red') {
                evt.target.style.backgroundColor = 'red'
                color = 'blue'
                console.dir(evt.target.dataset.number)
    
            } else if (color == 'blue') {
                evt.target.style.backgroundColor = 'blue'
                color = 'red'
            }
        }
        checkForWinner();
    })
}
function checkForWinner(){
    if (box[0].style.backgroundColor === box[1].style.backgroundColor && box[1].style.backgroundColor === box[2].style.backgroundColor){
       if(box[0].style.backgroundColor == 'red'){
           player1Score++;
           alert('player1 wins');
       }
        if(box[0].style.backgroundColor == 'blue'){
           player2Score++;
           alert('player2 wins');
       }
    }
    if (box[3].style.backgroundColor === box[4].style.backgroundColor && box[4].style.backgroundColor === box[5].style.backgroundColor){
        if(box[3].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins second statement');
        }
        if(box[3].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[6].style.backgroundColor === box[7].style.backgroundColor && box[7].style.backgroundColor === box[8].style.backgroundColor){
        if(box[6].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[6].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[0].style.backgroundColor === box[3].style.backgroundColor && box[3].style.backgroundColor === box[6].style.backgroundColor){
        if(box[0].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[0].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[1].style.backgroundColor === box[4].style.backgroundColor && box[4].style.backgroundColor === box[7].style.backgroundColor){
        if(box[1].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[1].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[2].style.backgroundColor === box[5].style.backgroundColor && box[5].style.backgroundColor === box[8].style.backgroundColor){
        if(box[2].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[2].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[0].style.backgroundColor === box[4].style.backgroundColor && box[4].style.backgroundColor === box[8].style.backgroundColor){
        if(box[0].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[0].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
     if (box[2].style.backgroundColor === box[4].style.backgroundColor && box[4].style.backgroundColor === box[6].style.backgroundColor){
        if(box[2].style.backgroundColor === 'red'){
            player1Score++;
            alert('player1 wins');
        }
        if(box[2].style.backgroundColor === 'blue'){
            player2Score++;
            alert('player2 wins');
        }
     }
}
