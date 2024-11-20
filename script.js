   // score variables
   let humanScore = 0;
   let computerScore = 0;

// playGame function

  function playGame () {
 
    function getHumanChoice() {
        let humanChoices = ["rock", "paper", "scissors"];
        let humanPrompt = prompt("Make Your Selection (rock, paper, or scissors):").toLowerCase();
        if (humanChoices.includes(humanPrompt)) {
            return humanPrompt;
        }
        else { //added else statement
            console.log("invalid, choose again...");
            return getHumanChoice();
        }
     
    }
    
    /* updated function to return computer choice */
    function getComputerChoice() {
       let computerIndex = Math.floor(Math.random() * 3);
       let choice;
       switch (computerIndex) {
        case 0: 
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        }
        return choice;
    }

// function to play single round. 
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
function playRound(humanChoice, computerChoice) {
    // new variable
   let result;
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
       result = "You're a Winner!";
        }
    else if (humanChoice === computerChoice) {
        result = "It's a Draw!";
    }
            
    else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        result = "Computer Wins! Try again next time...";
    }
    
    // score increase
    if (result === "You're a Winner!") {
        humanScore++;
    }
    if (result === "Computer Wins! Try again next time...") {
        computerScore++;
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    return result;
}
const targetScore = 5;
while (humanScore < targetScore && computerScore < targetScore) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    }

    // Announce final result
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("The computer wins the game. Better luck next time!");
    }
}






// calling the function

playGame();
