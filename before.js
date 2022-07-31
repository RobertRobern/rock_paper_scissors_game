
// variable declaration div tags
const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const paper = document.querySelector('.paper');

// variable declaration input tags
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const mode = document.querySelector('.mode-selector');
const stop =  document.querySelector('.stop');

const displayModeOne = document.querySelector('.mode-one-display');
const displayModeTwo = document.querySelector('.mode-two-display');
const message = document.querySelector("#message")

const playerDisplayOne = document.querySelector('#display-one')
const playerDisplayTwo = document.querySelector('#display-two')

let randomNumber = 0;
let playerSelection = ""
var playerScore = 0;
var computerScore = 0;

pause.addEventListener('click', game);

rock.addEventListener('click', () => {
  playerSelection = "Rock"

  // playRound(playerSelection,computerPlay)
  game()

});

scissor.addEventListener('click', () => {
  playerSelection = "Scissor"

  // console.log(playerScore)
  // playerDisplayTwo.innerText = 1;
  
  game()

});

paper.addEventListener('click', () => {
  playerSelection = "Paper"
  game()

});


play.addEventListener('click', () => {

  console.log(displayModeOne.textContent)
  console.log(displayModeTwo.textContent)
  const oneDisplay = displayModeOne.textContent;
  const twoDisplay = displayModeOne.textContent;

  if((oneDisplay.length == 0) && twoDisplay.length == 0){
    message.innerText = "Select a player to continue!!!"
    warningAlertStyle(message)
    
  }else if((oneDisplay.valueOf == 'Human') && (twoDisplay.valueOf == 'Human')){
    
    console.log('Human-Human')
  }else if((oneDisplay.valueOf == 'A.I') && (twoDisplay.valueOf == 'Human')){
    console.log('A.I-Human')
  }else if((oneDisplay.valueOf == 'A.I') && (twoDisplay.valueOf == 'A.I')){
    console.log('A.I-A.I')
  }

});

function warningAlertStyle(element){
  element.style.color= 'red';
  element.style.fontSize = "15px";
  element.style.fontWeight = "700";
}

function successAlertStyle(element){
  element.style.color= 'Green';
  element.style.fontSize = "15px";
  element.style.fontWeight = "700";
}

function drawAlertStyle(element){
  element.style.color= '#0f152e';
  element.style.fontSize = "15px";
  element.style.fontWeight = "700";
}

function loseAlertStyle(element){
  element.style.color= '#0664f1';
  element.style.fontSize = "15px";
  element.style.fontWeight = "700";
}


mode.addEventListener('click', () => {
  
  if(randomNumber > 2)
  {
    
    displayModeOne.innerText = '';
    displayModeTwo.innerText = ''; 
    randomNumber = 0;   
  }
  else{
    message.innerText = ''
    modeSelector(randomNumber);
    randomNumber++;
    console.log(randomNumber)
  }
});

function modeSelector(number){  
  
  if(randomNumber === 0){
    displayModeOne.innerText = 'Human';
    displayModeTwo.innerText = 'Human';
    // console.log(randomNumber)
  }else if(randomNumber === 1){
    displayModeOne.innerText = 'A.I';
    displayModeTwo.innerText = 'Human';
    // console.log(randomNumber)
  }else if(randomNumber === 2){
    displayModeOne.innerText = 'A.I';
    displayModeTwo.innerText = 'A.I';
    // console.log(randomNumber)

  }
  // switch(randomNumber){
  //   case 0: return "Rock";
  //   case 1: return "Paper";
  //   case 2: return "Scissor";
  // }
}

function computerPlay() { 
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch(randomNumber){
      case 0: return "Rock";
      case 1: return "Paper";
      case 2: return "Scissor";
    }
    // return randomNumber;
  
  }
  
  function playRound(playerSelection,computerSelection){
    // "You Lose! Paper beats Rock"
    if(playerSelection === computerSelection){
      message.innerText = "You tie!";
      drawAlertStyle(message)
      // return
    }else if((playerSelection === "Rock") && (computerSelection === "Paper")){
      message.innerText = "You Lose! Paper beats Rock";
      loseAlertStyle(message)
    }else if((playerSelection === "Paper") && (computerSelection === "Rock")){
      message.innerText = "You Win! Paper beats Rock";
      successAlertStyle(message)
    }else if((playerSelection === "Scissor") && (computerSelection === "Rock")){
      message.innerText = "You Lose! Rock beats Scissor";
      loseAlertStyle(message)
    }else if((playerSelection === "Rock") && (computerSelection === "Scissor")){
      message.innerText = "You Win! Rock beats Scissor";
      successAlertStyle(message)
    }else if((playerSelection === "Paper") && (computerSelection === "Scissor")){
      message.innerText = "You Lose! Scissor beats Paper";
      loseAlertStyle(message)
    }else if((playerSelection === "Scissor") && (computerSelection === "Paper")){
      message.innerText = "You Win! Scissor beats Paper";
      successAlertStyle(message)
    }
  }
 
  function game(){
    
    // for(let count = 1; count < 5; count++){
      // var playerSelection = prompt("Chooce between Rock, Paper, Scissor to play the Rock-Paper-Game");


      const computerSelection = computerPlay();
  
      // let newMessage = playRound(playerSelection,computerSelection);
      playRound(playerSelection,computerSelection);
  
      // if(message.slice(0,7) === "You Win"){
      //   console.log(message.slice(0,7));
      //   playerScore++;
      //   playerDisplayOne.innerText = playerScore;        
        
      // }else if(message.slice(0,8) === "You Lose"){
      //   console.log(message.slice(0,8));
      //   computerScore++;
      //   playerDisplayTwo.innerText = computerScore;
        
      // }
      
     
      if(message.contains = "You Win"){
        console.log("You Win");
        playerScore++;
        console.log(playerScore);
        playerDisplayOne.innerText = playerScore;        
        
      }else if(message.contains = "You Lose"){
        console.log("You Lose");
        computerScore++;
        playerDisplayTwo.innerText = computerScore;
        console.log(playerScore);
        
      }


    // }
  
    if(playerScore === computerScore){
      return "Draw. Try Again!";
    }else if(playerScore > computerScore){
      return "You Win";
    }else if(playerScore < computerScore){
      return "You Lose";
    }
  }
  // keep this function call here  
  // console.log(computerPlay());
  
  // const playerSelection = "Rock";
  // const computerSelection = computerPlay();
  // console.log(computerSelection);
  
  
  // console.log(playRound(playerSelection,computerSelection));
  console.log(playerScore);
  console.log(computerScore);
  // let result = game();
  
  // console.log(game());
  
  
  
  