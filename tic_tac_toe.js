console.log("welcome to tic tic toe");
let ting = new Audio("ting.mp3");
let winner = new Audio("gameover.wav");
let tie = new Audio("tie.wav");
let turn = 'X';
let isWinner = false;
let isDraw = false;

// logic for changing the turn
const change_turn = () => {
    if (turn === 'X') {
        document.getElementById('background').style.left = "50%";
        return '0';
    }
    else {
        document.getElementById('background').style.left = "5%";
        return 'X';
    }
}

// function to display turn change
// const turn_back = ()=>{
//     document.getElementById('background').classList.toggle('change_back');
// }
// document.getElementById('game_board').addEventListener('click', function change(){
//     document.getElementById('background').classList.toggle('change_back');
// });


// logic for checking win
const check_win = () => {
    let texts = document.getElementsByClassName('box_text');
    // layout of gameboard
    // [0  1  2]
    // [3  4  5]
    // [6  7  8]
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((texts[e[0]].innerText === texts[e[1]].innerText) && (texts[e[1]].innerText === texts[e[2]].innerText) && texts[e[0]].innerText !== '') {
            console.log(texts[e[0]].innerText + "  wins");
            document.getElementById('winner_box').innerText = texts[e[0]].innerText + "   WINS THE GAME! ";
            isWinner = true;
        }
        else if (texts[0].innerText!='' && texts[1].innerText!='' && texts[2].innerText!='' && texts[3].innerText!='' && texts[4].innerText!='' && texts[5].innerText!='' && texts[6].innerText!='' && texts[7].innerText!='' && texts[8].innerText!=''){
            isDraw = true;
            document.getElementById('winner_box').innerText = "IT's A TIE ! ";
        }
    })
}



// gaming logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box_text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = change_turn();
            ting.play();
            check_win();
            if (isWinner === true) {
                winner.play();
                document.getElementById('gameover_page').classList.add('change-bg');
            }
            if (isDraw === true) {
                tie.play();
                winner.pause();
                document.getElementById('gameover_page').classList.add('change-bg');
            }
        }
    })
})

document.getElementById('restart').addEventListener('click', function restart() {
    document.getElementById('gameover_page').classList.remove('change-bg');
    let boxtext_n = document.querySelectorAll('.box_text');
    Array.from(boxtext_n).forEach(element => {
        element.innerText = "";
    })
    turn = 'X';
    isWinner = false;
    isDraw = false;
    // winner.pause();
    // tie.pause();
    document.getElementById('background').style.left = "22px";
});