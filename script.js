const box = document.querySelectorAll('.box');
const board = document.querySelector('.board');
player1Score = 0
player2Score = 0
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let player1 =[]
let player2 =[]
let MatchCheck = []
color = 'red'

for (let i = 0; i < box.length; i++) {
    box[i].dataset.isClicked = false
    box[i].addEventListener('click', function (evt) {
        evt.preventDefault()
        if (evt.target.dataset.isClicked == 'false') {
            evt.target.dataset.isClicked = true
            if (color == 'red') {
                evt.target.style.backgroundColor = 'red'
                color = 'blue'
                player1.push(evt.target.dataset.number)
                console.dir(evt.target.dataset.number)
            } else if (color == 'blue') {
                evt.target.style.backgroundColor = 'blue'
                color = 'red'
                player2.push(evt.target.dataset.number)

                
            }
        }

    })
}
function checkForWinner(){
    if (box[0].style.backgroundColor && box[1].style.backgroundColor && box[2].style.backgroundColor === box[0].style.backgroundColor){
       if(box[0].style.backgroundColor === 'red'){
           player1Score++
       }
       if(box[0].style.backgroundColor === 'blue'){
           player2Score++
       }
    }
    if (box[3].style.backgroundColor && box[4].style.backgroundColor && box[5].style.backgroundColor === box[0].style.backgroundColor){
        if(box[3].style.backgroundColor === 'red'){
            player1Score++
        }
        if(box[3].style.backgroundColor === 'blue'){
            player2Score++
        }
     }
     if (box[6].style.backgroundColor && box[7].style.backgroundColor && box[8].style.backgroundColor === box[0].style.backgroundColor){
        if(box[6].style.backgroundColor === 'red'){
            player1Score++
        }
        if(box[6].style.backgroundColor === 'blue'){
            player2Score++
        }
     }
     if (box[0].style.backgroundColor && box[3].style.backgroundColor && box[6].style.backgroundColor === box[0].style.backgroundColor){
        if(box[0].style.backgroundColor === 'red'){
            player1Score++
        }
        if(box[0].style.backgroundColor === 'blue'){
            player2Score++
        }
     }
}