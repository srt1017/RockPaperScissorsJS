let compChoice = Math.random();

function getComputerChoice() {
   
   if (compChoice < 0.34){
        compChoice = "rock";
   }
   else if (compChoice <= 0.67) {
        compChoice = "paper";
   }
   else {
        compChoice = "scissors";
   }

   //console.log(compChoice);
}

getComputerChoice();

let userChoice = prompt("Please choose rock, paper, or scissors");

let gameResult = "tie";


function rpsRound(userChoice, compChoice) {
    if (userChoice === "rock") {
          if (compChoice === "rock") {
               return gameResult;
          }
          else if (compChoice === "scissors"){
               gameResult = "User wins! Rock beats scissors.";
               return gameResult;
               
          }
          else if (compChoice === "paper") {
               gameResult = "User lost. Paper beats rock.";
               return gameResult;
          }
    }
    if (userChoice === "paper") {
          if (compChoice === "paper") {
               return gameResult;
          }
          if (compChoice === "scissors") {
               gameResult = "User lost. Scissors beats paper."
               return gameResult;
          }
          if (compChoice === "rock") {
               gameResult = "User wins! Paper beats rock."
               return gameResult;
          }
    }
    if (userChoice === "scissors") {
          if (compChoice === "scissors") {
               return gameResult;
          }
          if (compChoice === "rock") {
               gameResult = "User lost. Rock beats scissors."
               return gameResult;
          }
          if (compChoice === "paper") {
               gameResult = "User wins! Paper beats rock."
               return gameResult;
          }
    }
}

console.log(rpsRound(userChoice, compChoice))

