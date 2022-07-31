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
      return "You tie!";
    }else if((playerSelection === "Rock") && (computerSelection === "Paper")){
      return "You Lose! Paper beats Rock";
    }else if((playerSelection === "Paper") && (computerSelection === "Rock")){
      return "You Win! Paper beats Rock";
    }else if((playerSelection === "Scissor") && (computerSelection === "Rock")){
      return "You Lose! Rock beats Scissor";
    }else if((playerSelection === "Rock") && (computerSelection === "Scissor")){
      return "You Win! Rock beats Scissor";
    }else if((playerSelection === "Paper") && (computerSelection === "Scissor")){
      return "You Lose! Scissor beats Paper";
    }else if((playerSelection === "Scissor") && (computerSelection === "Paper")){
      return "You Win! Scissor beats Paper";
    }
  }
  var playerScore = 0;
  var computerScore = 0;
  
  function game(){
    
    for(let count = 1; count < 5; count++){
      var playerSelection = prompt("Chooce between Rock, Paper, Scissor to play the Rock-Paper-Game");
      const computerSelection = computerPlay();
  
      let message = playRound(playerSelection,computerSelection);
  
      if(message.slice(0,7) === "You Win"){
        console.log(message.slice(0,7));
        playerScore++;
        
      }else if(message.slice(0,8) === "You Lose"){
        console.log(message.slice(0,8));
        computerScore++;
        
      }
    }
  
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
  let result = game();
  
  // console.log(game());