/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = `X`;
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/

  const squareEls = document.querySelectorAll(`.sqr`);
  const messageEls = document.getElementById(`message`);
  const resetBtnE1 = document.getElementById('reset');
/*-------------------------------- Functions --------------------------------*/
//function is a section of reusable code// 
function init(){
 board = ['', '', '', '', '', '', '', '', ''];
 turn = `X`;
 winner = false;
tie = false;
render();
}




function updateBoard(){
    board.forEach((element, index) => {
        squareEls[index].textContent = element
    });
}

function updateMessage(){
 if (winner === false && tie === false) {
    messageEls.textContent = `It's ${turn} turn now`
 } else if (winner === false && tie === true) {
    messageEls.textContent = 'Its a tie';
 } else {
    messageEls.textContent = `YOU WON' ${winner}`;
 }
}


function render() {
updateBoard();
updateMessage();
}

function placePiece(index){
board[index] = turn;
}

function checkForWinner(){
winningCombos.forEach(combo => {
    if (
        board[combo[0]] &&
        board[combo[0]] === board[combo[1]] &&
        board[combo[1]] === board[combo[2]]
    ) {
        winner = true;
    }
});
}


function checkForTie() {
    if (!winner && !board.includes('')) tie = true;
}

function switchPlayerTurn() {
    if (winner) return;
    turn = turn === 'X' ? 'O': 'X';
}
/*----------------------------- Event Listeners -----------------------------*/
function handleClick(event){
 const squareIndex = parseInt(event.target.id);
 if (board[squareIndex] || winner) return;

 placePiece(squareIndex);
 checkForWinner();
 checkForTie();
 switchPlayerTurn();
 render();
}
 

squareEls.forEach(square => square.addEventListener('click', handleClick));
resetBtnE1.addEventListener('click', init);

init();









//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality
