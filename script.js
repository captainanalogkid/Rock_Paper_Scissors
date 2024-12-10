   // score variables
   let humanScore = 0;
   let computerScore = 0;

   const targetScore = 5;

   function updateMessage(message) {
    const results = document.querySelector("#results");
    results.textContent = message;
   }

   function handleChoice(humanChoice) {
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        updateMessage(roundResult);
   
        const score = document.querySelector("#score");
        score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore >= targetScore) {
            updateMessage("Congratulations! You won the game!");
            disableButtons();
        } else if (computerScore >= targetScore) {
             updateMessage("The computer wins the game. Better luck next time!");
            disableButtons();
        }
    }
        
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

   function getHumanChoice() {
    document.getElementById("rock").addEventListener("click", () => handleChoice("rock"));
    document.getElementById("paper").addEventListener("click", () => handleChoice("paper"));
    document.getElementById("scissors").addEventListener("click", () => handleChoice("scissors"));
  }

// function to play single round. 
    function playRound(humanChoice, computerChoice) {
        let result;
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
        humanScore++;
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
            computerScore++;
            result = "Computer Wins! Try again next time...";
        }
        return result;
    }

    function disableButtons() {
        document.querySelectorAll(".choice").forEach(button => button.disabled = true);
    }
document.addEventListener("DOMContentLoaded", () => {
    getHumanChoice();
});


