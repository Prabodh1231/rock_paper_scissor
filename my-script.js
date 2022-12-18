    const n = 5;

    for (let i = 1; i <= n; i++) {
    
    let playerSelection =  prompt("Please enter Rock, Paper or  Scissors as your choice").toLowerCase();
    console.log (playerSelection);

 
    let green = ["Rock", "Paper", "Scissors"];
    let getComputerChoice = green[Math.floor(Math.random()*green.length)];
   
    console.log(getComputerChoice);

   if (playerSelection === "rock" && getComputerChoice === "Paper" ) {
    console.log("You lost");
   }
   else if (playerSelection === "rock" && getComputerChoice === "Rock") {
    console.log("Draw");
   } 
   else if (playerSelection === "rock" && getComputerChoice === "Scissors") {
    console.log("You won");
   } 
   else if (playerSelection === "paper" && getComputerChoice === "Rock") {
    console.log("You won");
   } 
   else if (playerSelection === "paper" && getComputerChoice === "Scissors") {
    console.log("You lost");
   }
   else if (playerSelection === "paper" && getComputerChoice === "Paper") {
    console.log("Draw");
   }
   else if (playerSelection === "scissors" && getComputerChoice === "Paper") {
    console.log("You lost");
   } 
   else if (playerSelection === "scissors" && getComputerChoice === "Rock") {
    console.log("You won");
   } 
   else if (playerSelection === "scissors" && getComputerChoice === "Scissors") {
    console.log("Draw");
   }
   else {
    console.log("Patanahi");
  }
    }