# Rock_Paper_Scissors

psuedocode
set function getComputerChoice
function return string values rock, paper, scissors
use Math.random method to pick number associated with three values above

set function getHumanChoice
return one of three choices above based on user input
use prompt method

keep track of players' scores via variables
two variables humanScore and computerScore, global scope
intialize variables with value of 0

set function playRound
two parameters for playRound are humanChoice and computerChoice
humanChoice case insensitive
console.log string that represents round winner "Loser! Paper beats Rock" or "Winner! rock beats paper"
increment humanScore and computerScore based on round winner

play 5 rounds, call play round 5 times
set function playGame
move playRound and score variables inside of playGame function
