
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
const imageRock = document.querySelector('.image-rock');
const imageScissor = document.querySelector('.image-scissor');
const imagePaper = document.querySelector('.image-paper');
const versus = document.querySelector('.versus img');
// const versusSpinner = document.querySelector('.spin');
// const imgRotate = document.querySelector('.rotate');
const imgTexts = document.querySelector('.text');


let randomNumber = 0;
let firstSelection = "";
let secondSelection = "";
let playerScore = 0;
let computerScore = 0;
let firstPlayer = null;
let secondPlayer = null;
let tempArray = [];
let newArray = [];

iconBtns.forEach((iconBtn) => {
  iconBtn.addEventListener('click', () => {
    const img = iconBtn.querySelector('img');
    firstSelection = img.alt;
    secondSelection = computerPlay();

    let start = Date.now(); 

    let timer = setInterval(function() {
      // how much time passed from the start?
      let timePassed = Date.now() - start;

      if (timePassed >= 2000) {
        clearInterval(timer); // finish the animation after 2 seconds
        return;
      }

      // draw the animation at the moment timePassed
      animation(img.className);
      // animation(imageRock);
      // animation(imageScissor);

    }, 20);

    playRound(firstSelection, secondSelection);

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

function futureWorks(){
  play.classList.add('hidden');
  mode.classList.add('hidden');
  stop.classList.add('hidden');
  pause.classList.add('hidden');
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

let myInterval = setInterval(function() {

});



function animation(element){
  versus.classList.add('spin');
  element.classList.add('rotate');
  // imagePaper.classList.add('rotate');
  // imageScissor.classList.add('rotate');
  // imgTexts.classList.add('textScale')
  // imgTexts.forEach(imgText => imgText.classList.add('textScale'));
   
}


// window.onload = modeSelector();
// window.onload = isDisabled(iconGame);
// window.onload = isDisabled(pause);
window.onload = futureWorks();
// window.onload = animation();
// window.onload = isDisabled(stop);
// window.onload = animation();



