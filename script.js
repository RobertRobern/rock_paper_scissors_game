
const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const mode = document.querySelector('.mode-selector');
const stop =  document.querySelector('.stop');
const displayModeOne = document.querySelector('.mode-one-display');
const displayModeTwo = document.querySelector('.mode-two-display');
const message = document.querySelector("#message")
const endGameDesc = document.querySelector('#end-game')
const replayBtn = document.querySelector(".replay");
const container = document.querySelector(".body-container");
const alert = document.querySelector('.alert');
const iconBtns = document.querySelectorAll('.icon-button');
const iconGame = document.querySelector('.game-icons');
const playerDisplayOne = document.querySelector('#display-one')
const playerDisplayTwo = document.querySelector('#display-two')

let randomNumber = 0;
let firstSelection = "";
let secondSelection = "";
let playerScore = 0;
let computerScore = 0;
let firstPlayer = null;
let secondPlayer = null;
let tempArray = [];
let newArray = [];

play.addEventListener('click', () => {
  isEnabled(iconGame);
  isEnabled(pause);
  isEnabled(stop);
  isDisabled(mode);
  // isDisabled(play);

  if((displayModeOne.innerText == "A.I") && (displayModeTwo.innerText == "A.I")){
    console.log("A-A");

    for(let i = 0; i<=5; i++){
      firstSelection = computerPlay();
      secondSelection = computerPlay();
      playRound(firstSelection,secondSelection);
      break;
    }
  }  

  if((playerScore === 5) || (computerScore === 5)){
    
    winner();
  }

});

mode.addEventListener('click', () => {
  modeSelector();
});

stop.addEventListener('click', () => {
  resetGame();
  isEnabled(mode);
  isDisabled(pause);
  // isEnabled(play);
  isDisabled(iconGame);
  isDisabled(stop);
});

iconBtns.forEach((iconBtn) => {
  iconBtn.addEventListener('click', () => {
    const img = iconBtn.querySelector('img');

    if((displayModeOne.innerText == "Human") && (displayModeTwo.innerText == "A.I")){
      console.log("H-A");
      firstSelection = img.alt;
      secondSelection = computerPlay();
      playRound(firstSelection,secondSelection);
    }
    
    if((displayModeOne.innerText == "A.I") && (displayModeTwo.innerText == "Human")){
      console.log("A-H");
      firstSelection = computerPlay();
      secondSelection = img.alt;
      playRound(firstSelection,secondSelection);
    }


    // console.log(firstSelection,secondSelection);
    // playRound(firstSelection,secondSelection);
    
    if((playerScore === 5) || (computerScore === 5)){
      winner();
    }

  });
});

replayBtn.addEventListener('click', () =>{
  container.classList.remove("hidden");
    alert.classList.add('hidden');
    resetGame();
});

function isDisabled(element){
  element.style.pointerEvents =  'none'

}

function isEnabled(element){
  element.style.pointerEvents =  'all'
}

function contentStyle(element){
  // element.style.color= 'red';
  element.style.fontSize = "20px";
  element.style.fontWeight = "700";
}

const modeArray = ["Human", "A.I"];

function randomMode(){
  const modeArray = ["Human", "A.I"];

  firstPlayer = modeArray[Math.floor(Math.random() * modeArray.length)];
  secondPlayer = modeArray[Math.floor(Math.random() * modeArray.length)];
  const myArray = [];
  myArray.push(firstPlayer, secondPlayer);

  return myArray;
}

function modeSelector(){

  if(tempArray.length == 0){
    tempArray = randomMode();
    modeDisplay(tempArray[0], tempArray[1])

  }else{
    newArray = randomMode();
    if((newArray[0] == tempArray[0]) && (newArray[1] == tempArray[1])){
      newArray = randomMode();
      tempArray = newArray;
      modeDisplay(tempArray[0], tempArray[1])
      newArray = [];      
    }else{
      tempArray = newArray;
      modeDisplay(tempArray[0], tempArray[1])
      newArray = [];
    }

  }
  
}

function modeDisplay(firstPlayer, secondPlayer){
  displayModeOne.innerText = firstPlayer;
  displayModeTwo.innerText = secondPlayer;
}

const myArray =  ["Rock", "Paper", "Scissors"];

function computerPlay() { 
  return myArray[Math.floor(Math.random() * myArray.length)];

}

function playRound(firstSelection,secondSelection){
  secondSelection =  secondSelection;
  firstSelection = firstSelection;

  if(firstSelection === secondSelection){
    return resultsDisplay("You tie!");
  }else if((firstSelection === "Rock") && (secondSelection === "Paper")){
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    // console.log(computerScore);
    return resultsDisplay("You Lose! Paper beats Rock");
  }else if((firstSelection === "Paper") && (secondSelection === "Rock")){
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    // console.log(playerScore);
    return resultsDisplay("You Win! Paper beats Rock");
  }else if((firstSelection === "Scissor") && (secondSelection === "Rock")){
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    // console.log(computerScore);
    return resultsDisplay("You Lose! Rock beats Scissor");
  }else if((firstSelection === "Rock") && (secondSelection === "Scissor")){
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    // console.log(playerScore);
    return resultsDisplay("You Win! Rock beats Scissor");
  }else if((firstSelection === "Paper") && (secondSelection === "Scissor")){
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    // console.log(computerScore);
    return resultsDisplay("You Lose! Scissor beats Paper");
  }else if((firstSelection === "Scissor") && (secondSelection === "Paper")){
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    // console.log(playerScore);
    return resultsDisplay("You Win! Scissor beats Paper");
  }

}

function resultsDisplay(text){
  message.innerText = text;
  contentStyle(message);
}

// function game(){
  
//   // for(let count = 1; count < 5; count++){
//     // var firstSelection = prompt("Chooce between Rock, Paper, Scissor to play the Rock-Paper-Game");  

//     // let newMessage = playRound(firstSelection,secondSelection);
    
//     // if(message.slice(0,7) === "You Win"){
//     //   console.log(message.slice(0,7));
//     //   playerScore++;
//     //   playerDisplayOne.innerText = playerScore;        
      
//     // }else if(message.slice(0,8) === "You Lose"){
//     //   console.log(message.slice(0,8));
//     //   computerScore++;
//     //   playerDisplayTwo.innerText = computerScore;
      
//     // }

//     var count = 0;
//     if(count < 5){
//       const secondSelection = computerPlay();
//       const newMessage = playRound(firstSelection,secondSelection);
//       console.log(newMessage)

//       if(message.contains = "You Win"){
//         console.log("You Win");
//         playerScore++;
//         console.log(playerScore);
//         playerDisplayOne.innerText = playerScore;      
        
//       }else if(message.contains = "You Lose"){
//         console.log("You Lose");
//         computerScore++;
//         playerDisplayTwo.innerText = computerScore;
//         console.log(computerScore);
        
//       }

//       count++;
//     }
    
//   // }

    
// }

function winner(){
  alert.classList.remove("hidden");
  container.classList.add('hidden');

  if(playerScore > computerScore){
    endGameDesc.textContent = "You Win!...You smarter than the Artificial Intelligence.";
  }else{
    endGameDesc.textContent = "You Lose!...Artificial Intelligence can't outsmart you.";
  }

}

function resetGame(){
  message.innerHTML = '<strong>Mode</strong> to select Player and <strong>Play</strong> to start the game.';
  playerScore = 0;
  computerScore = 0;

  playerDisplayOne.innerText = playerScore;
  playerDisplayTwo.innerText = computerScore;

}

window.onload = modeSelector();
window.onload = isDisabled(iconGame);
window.onload = isDisabled(pause);
window.onload = isDisabled(stop);



