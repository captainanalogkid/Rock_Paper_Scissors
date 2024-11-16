let humanChoices = ("rock", "paper", "scissors");
let humanPrompt = prompt("Make Your Selection (rock, paper, or scissors):");



// variables to hold scores //
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {

    if (humanChoices.includes(humanPrompt)) {
        return humanPrompt; 
    }
}
console.log(humanPrompt);

const computerIndex = Math.floor(Math.random() * 3);

function getComputerChoice() {
   switch (computerIndex) {
    case 0: 
        return "rock";
    case 1: 
        return "paper";
    case 2:
        return "scissors";
   }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(computerChoice);

// function to play single round. Need to fix result. console only returning computer wins /
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "Human Wins!";
    }
    if (humanChoice === computerChoice) {
        return "It's a Draw!";
    }
    else {
        return "Computer Wins!"
    }
}

// calling the function
const result = playRound(humanChoice, computerChoice);
console.log(result);







