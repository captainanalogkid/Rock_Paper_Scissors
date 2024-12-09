   // score variables
   let humanScore = 0;
   let computerScore = 0;
   let humanChoices = null;

    function getHumanChoice() {
       return humanChoices;
};

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
    function resultIncrease() {
        if (result === "You're a Winner!") {
            humanScore++;
    }
        if (result === "Computer Wins! Try again next time...") {
            computerScore++;
    }
}
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice")) {
        humanChoices = event.target.id;
         playRound();
    }
});

// adding results function. figure out how to print results to screen and increment score kept in separate div
function getResults(humanChoice, computerChoice, result) {
    const resultsDiv = document.getElementById("#results");
    resultsDiv.createElement("p");
    p.textContent =  "Human: ${humanChoice}, Computer: ${computerChoice}, Result: ${result}"; 
}

<p>Human Score: ${humanScore}, Computer Score: ${computerScore}</p>
/*
const targetScore = 5;
while (humanScore < targetScore && computerScore < targetScore) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    }
*/
    // Announce final result
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("The computer wins the game. Better luck next time!");
    }

