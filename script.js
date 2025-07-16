const cells = document.querySelectorAll(".cells");
const playerTurn = document.querySelector(".player-turn");
const resetButton = document.querySelector(".restart");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let SaklarGame = true;

const gamePlaywin = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach(cell => cell.addEventListener("click", handlecellclick))
resetButton.addEventListener("click", restartGame);

function handlecellclick() {
  const index = this.dataset.index;
  if (gameBoard[index] !== "" || !SaklarGame) return;

  gameBoard[index] = currentPlayer;
  
  if (currentPlayer === "X") {
    this.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png">`;
  } else {
    this.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">`; 
  }

  if (checkWinner()) {
    playerTurn.innerHTML = `player <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
" class="pokemon-p"> wins!`
    SaklarGame = false;
  } else if (!gameBoard.includes("")) {
    playerTurn.innerHTML = `Draw !`
    SaklarGame = false;
  } else if (currentPlayer === "X") {
  currentPlayer = "O";
  playerTurn.innerHTML = `Player <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" class="pokemon-p"> turn`;
} else {
  currentPlayer = "X";
  playerTurn.innerHTML = `Player <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" class="pokemon-p"> turn`;
}
}

function checkWinner() {
  return gamePlaywin.some(combo => {
    const [a,b,c] = combo;
     return (
      gameBoard[a] && 
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
     );
  });
}

function restartGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.innerHTML = "");
  currentPlayer = "X";
  playerTurn.innerHTML = `player <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
" class="pokemon-p"> turn`;
  SaklarGame = true;
}
