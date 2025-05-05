/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', ''];
let turn = `X`;
let winner = `false`;
let tie = `false`;


/*------------------------ Cached Element References ------------------------*/

  const squareEls = document.querySelector(`board`);
  const messageEls = document.querySelector(`message`)
/*-------------------------------- Functions --------------------------------*/
//function is a section of reusable code// 
function init(){
    console.log(`init`);
    console.log(`render`);
}
init();

function render(){

}

function updateBoard(){
    board.forEach((element, index) => {
        squareEls[index].textContext = element
    }
    

        // index, element
        // update squareEls textContext based on index
    );

}

function updateMessage(){
 if(winner and tie )  
}

/*----------------------------- Event Listeners -----------------------------*/

 









//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality
