let playerScore = 0;
let computerScore = 0;

const playerSelection = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
playerSelection.forEach((button) => {

// and for each one we add a 'click' listener
button.addEventListener('click', () => {
  let playerSelection = (button.id);
  let green = ["Rock", "Paper", "Scissor"];
  let getComputerChoice = green[Math.floor(Math.random()*green.length)];
   
  document.getElementById("PlayerSelect").innerHTML = playerSelection;
  document.getElementById("ComputerSelect").innerHTML = getComputerChoice;

    if (playerSelection === "Rock" && getComputerChoice === "Paper" ) {
      ++computerScore;
      document.getElementById("ResultBox").innerHTML = ("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "Rock" && getComputerChoice === "Scissor") {
      ++playerScore;
      document.getElementById("ResultBox").innerHTML = ("You Won! Rock beats Scissor");
    } 
    else if (playerSelection === "Paper" && getComputerChoice === "Rock") {
      ++playerScore;
      document.getElementById("ResultBox").innerHTML = ("You Won! Paper beats Rock");
    } 
    else if (playerSelection === "Paper" && getComputerChoice === "Scissor") {
      ++computerScore;
      document.getElementById("ResultBox").innerHTML = ("You Lose! Scissor beats Paper");
    }
    else if (playerSelection === "Scissor" && getComputerChoice === "Paper") {
      ++playerScore;
      document.getElementById("ResultBox").innerHTML = ("You Won! Scissor beats Paper");
    } 
    else if (playerSelection === "Scissor" && getComputerChoice === "Rock") {
      ++computerScore;
      document.getElementById("ResultBox").innerHTML = ("You Lose! Rock beats Scissor");
    } 
    else {
       document.getElementById("ResultBox").innerHTML = ("It's a Draw");
     }
  document.getElementById("PlayerScore").innerHTML = (playerScore)
  document.getElementById("ComputerScore").innerHTML =(computerScore)
  
  });
});
    
