let humanChoices = ("rock", "paper", "scissors");
let humanPrompt = prompt("Make Your Selection (rock, paper, or scissors):");
function getHumanChoice() {

    if (humanChoices.includes(humanPrompt)) {
        console.log("Your Choice Is: ${humanPrompt}");
    }
    else {
        console.log("Choose again");
    }
}
console.log(humanPrompt);

function getComputerChoice() {
    const computerIndex = Math.floor(Math.random() * 3);
   switch (computerIndex) {
    case 0: 
        return "rock";
    case 1: 
        return "paper";
    case 2:
        return "scissors";
   }
}
console.log(getComputerChoice());







