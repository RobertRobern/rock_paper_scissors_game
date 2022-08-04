const displayModeOne = document.querySelector('.mode-one-display');
const displayModeTwo = document.querySelector('.mode-two-display');
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const endGameDesc = document.querySelector('#end-game');
const replayBtn = document.querySelector(".replay");
const container = document.querySelector(".body-container");
const endMsg = document.querySelector('.endMsg');
const iconBtns = document.querySelectorAll('.icon-button');
const iconGame = document.querySelector('.game-icons');
const playerDisplayOne = document.querySelector('#display-one');
const playerDisplayTwo = document.querySelector('#display-two');
const imageRock = document.querySelector('.image-rock');
const imageScissor = document.querySelector('.image-scissor');
const imagePaper = document.querySelector('.image-paper');
const imgTexts = document.querySelector('.text');
// const rock = document.querySelector('.rock');
// const scissor = document.querySelector('.scissor');
// const paper = document.querySelector('.paper');
// const play = document.querySelector('.play');
// const pause = document.querySelector('.pause');
// const mode = document.querySelector('.mode-selector');
// const stop =  document.querySelector('.stop');

let firstSelection = "";
let secondSelection = "";
let playerScore = 0;
let computerScore = 0;
let firstPlayer = null;
let secondPlayer = null;
const myArray = ["Rock", "Paper", "Scissors"];
// let tempArray = [];
// let newArray = [];

iconBtns.forEach((iconBtn) => {
  iconBtn.addEventListener('click', () => {
    const img = iconBtn.querySelector('img');
    const imgIcons = iconBtn.querySelector('#image-icon');
    let myImgClass = "." + imgIcons.className;
    const imgIconClass = iconBtn.querySelector(myImgClass);
    const imgText = iconBtn.querySelector('.text');

    setTimer(imgIconClass, imgText);

    firstSelection = img.alt;
    secondSelection = computerPlay();

    playRound(firstSelection, secondSelection);

    if ((playerScore === 5) || (computerScore === 5)) {
      getWinner();
    }

  });
});

replayBtn.addEventListener('click', () => {
  container.classList.remove("hidden");
  endMsg.classList.add('hidden');
  resetGame();
});

function setTimer(element, value) {
  let start = Date.now()

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    if (timePassed >= 300) {
      element.classList.remove('rotate');
      value.classList.remove('textScale');
      isEnabled(element);
      clearInterval(timer);
      return;
    }

    isDisabled(element);
    animation(element, value);

  }, 10);
}

function isDisabled(element) {
  element.style.pointerEvents = 'none'

}

function isEnabled(element) {
  element.style.pointerEvents = 'all'
}

// More features of the game undone

// function futureWorks(){
//   play.classList.add('hidden');
//   mode.classList.add('hidden');
//   stop.classList.add('hidden');
//   pause.classList.add('hidden');
// }

// const modeArray = ["Human", "A.I"];

// function randomMode(){
//   firstPlayer = modeArray[Math.floor(Math.random() * modeArray.length)];
//   secondPlayer = modeArray[Math.floor(Math.random() * modeArray.length)];
//   const myArray = [];
//   myArray.push(firstPlayer, secondPlayer);

//   return myArray;
// }

// function modeSelector(){

//   if(tempArray.length == 0){
//     tempArray = randomMode();
//     modeDisplay(tempArray[0], tempArray[1])

//   }else{
//     newArray = randomMode();
//     if((newArray[0] == tempArray[0]) && (newArray[1] == tempArray[1])){
//       newArray = randomMode();
//       tempArray = newArray;
//       modeDisplay(tempArray[0], tempArray[1])
//       newArray = [];      
//     }else{
//       tempArray = newArray;
//       modeDisplay(tempArray[0], tempArray[1])
//       newArray = [];
//     }

//   }

// }

// function modeDisplay(firstPlayer, secondPlayer){
//   displayModeOne.innerText = firstPlayer;
//   displayModeTwo.innerText = secondPlayer;
// }

function computerPlay() {
  return myArray[Math.floor(Math.random() * myArray.length)];

}

function playRound(firstSelection, secondSelection) {
  secondSelection = secondSelection;
  firstSelection = firstSelection;

  if (firstSelection === secondSelection) {
    return resultsDisplay("You tie!");
  } else if ((firstSelection === "Rock") && (secondSelection === "Paper")) {
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    return resultsDisplay("Oh no! Paper beats Rock");
  } else if ((firstSelection === "Paper") && (secondSelection === "Rock")) {
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    return resultsDisplay("Wow! Paper beats Rock");
  } else if ((firstSelection === "Scissor") && (secondSelection === "Rock")) {
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    return resultsDisplay("Oh no! Rock beats Scissor");
  } else if ((firstSelection === "Rock") && (secondSelection === "Scissor")) {
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    return resultsDisplay("Wow! Rock beats Scissor");
  } else if ((firstSelection === "Paper") && (secondSelection === "Scissor")) {
    computerScore = ++computerScore;
    playerDisplayTwo.innerText = computerScore;
    return resultsDisplay("Oh no! Scissor beats Paper");
  } else if ((firstSelection === "Scissor") && (secondSelection === "Paper")) {
    playerScore = ++playerScore;
    playerDisplayOne.innerText = playerScore;
    return resultsDisplay("Wow! Scissor beats Paper");
  }


}

function resultsDisplay(text) {
  topText.innerText = text;

  if (playerScore === computerScore) {
    bottomText.textContent = "Mmmh Draw!! we shoulder on.";
  } 
  if (playerScore > computerScore) {    
    if ((playerScore === 2)) {
      bottomText.textContent = "You getting good at this.";
    } else if (playerScore === 3) {
      bottomText.textContent = "I love your effort!";
    } else if (playerScore === 4) {
      bottomText.textContent = "Final round!! Outsmart the A.I.";
    } else{
      bottomText.textContent = "You doing great.";
    }
  } 
  if (computerScore > playerScore) {    
    if (computerScore === 2) {
      bottomText.textContent = "A.I is leading the game.";
    } else if (computerScore === 3) {
      bottomText.textContent = "You can't let A.I control the game. Get back to the game";
    } else if (computerScore === 4) {
      bottomText.textContent = "Nooh!! Final round and A.I wins the game.";
    }else{
      bottomText.textContent = "Arghh!! You can do this.";
    }
  }
}

function getWinner() {
  endMsg.classList.remove("hidden");
  container.classList.add('hidden');

  if (playerScore > computerScore) {
    endGameDesc.textContent = "You Win!...You smarter than the Artificial Intelligence.";
    replayBtn.value = "Replay";
  } else {
    endGameDesc.textContent = "You Lose!...Artificial Intelligence outsmarted you.";
    replayBtn.textContent = "Try Again";
  }

}

function resetGame() {
  topText.textContent = "Play versus the Computer.";
  bottomText.textContent = "Choose one of three animation.";
  playerScore = 0;
  computerScore = 0;
  playerDisplayOne.innerText = playerScore;
  playerDisplayTwo.innerText = computerScore;

}

function animation(element, value) {
  element.classList.add('rotate');
  value.classList.add('textScale');
}


// window.onload = modeSelector();
// window.onload = isDisabled(iconGame);
// window.onload = isDisabled(pause);
// window.onload = futureWorks();
// window.onload = animation();
// window.onload = isDisabled(stop);
// window.onload = animation();



