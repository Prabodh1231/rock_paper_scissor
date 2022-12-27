let playerScore = 0;
let computerScore = 0;

    const n = 5;

    for (let i = 1; i <= n; i++) {
    
    let playerSelection =  prompt("Please enter Rock, Paper or  Scissors as your choice").toLowerCase();
    console.log (playerSelection);

 
    let green = ["Rock", "Paper", "Scissors"];
    let getComputerChoice = green[Math.floor(Math.random()*green.length)];
   
    console.log(getComputerChoice);

   if (playerSelection === "rock" && getComputerChoice === "Paper" ) {
    ++computerScore;
    console.log("You lost");
   }
   else if (playerSelection === "rock" && getComputerChoice === "Rock") {
    ++computerScore;
    ++playerScore;
    console.log("Draw");
   } 
   else if (playerSelection === "rock" && getComputerChoice === "Scissors") {
    ++playerScore;
    console.log("You won");
   } 
   else if (playerSelection === "paper" && getComputerChoice === "Rock") {
    ++playerScore;
    console.log("You won");
   } 
   else if (playerSelection === "paper" && getComputerChoice === "Scissors") {
    ++computerScore;
    console.log("You lost");
   }
   else if (playerSelection === "paper" && getComputerChoice === "Paper") {
    ++playerScore;
    ++computerScore;
    console.log("Draw");
   }
   else if (playerSelection === "scissors" && getComputerChoice === "Paper") {
    ++computerScore;
    console.log("You lost");
   } 
   else if (playerSelection === "scissors" && getComputerChoice === "Rock") {
    ++playerScore;
    console.log("You won");
   } 
   else if (playerSelection === "scissors" && getComputerChoice === "Scissors") {
    ++computerScore;
    ++playerScore;
    console.log("Draw");
   }
   else {
    console.log("Patanahi");
  }
    }

    console.log(playerScore);
    console.log(computerScore);

    if (computerScore < playerScore) {
      console.log ("You win");
    }
    else if (computerScore = playerScore) {
      console.log ("its a draw");
    }
    else if(computerScore > playerScore) {
      console.log ("You loss");
    }
    else {
      console.log ("Error")
    }
    
