const box = document.querySelectorAll('.box');
const board = document.querySelector('.board');
const gameCount = [];
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
console.log(board)
console.log(gameCount)
console.log(box)
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
                player1.push(evt.target)
            } else if (color == 'blue') {
                evt.target.style.backgroundColor = 'blue'
                color = 'red'
                player2.push(evt.target)
                
            }
        }

    })
}