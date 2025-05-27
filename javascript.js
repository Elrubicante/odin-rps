console.log('hello world');

function getComputerChoice() {
    let rpsComputer = Math.floor(Math.random() * 3 );
    
    if (rpsComputer === 2) {
        return "scissors";
    }

    else if  (rpsComputer === 1) {
        return "paper";
    }
    
    else {
        return "rock";
    }
}


function getHumanChoice() {
let h = prompt ('Select your option?', '');
if (h.toLowerCase() === "scissors") {
    return ("scissors");
}
else if (h.toLowerCase() === "paper") {
    return ("paper");
}
else if (h.toLowerCase() === "rock") {
    return ("rock");
}

else { return ("put a correct input");}
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {


if (humanSelection === "paper" && computerSelection === "rock")
{humanScore++;
console.log("You win! Paper beats rock. You saved humanity for now...");
getHumanChoice();
getComputerChoice();}

else if (humanSelection === "paper" && computerSelection === "scissors")
{computerScore++;
console.log("You lose! Scissors beats paper. Humanity is in danger!");
getHumanChoice();
getComputerChoice();}

else if (humanSelection === "paper" && computerSelection === "paper")
{console.log("Is a tie, humanity and computer can be similar, right?");
   getHumanChoice();
getComputerChoice();
}

else if (humanSelection === "rock" && computerSelection === "rock") 
{console.log("Is a tie, humanity and computer can be similar, right?");
   getHumanChoice();
getComputerChoice();
}

else if (humanSelection === "rock" && computerSelection === "scissors")
{humanScore++;
console.log("You win! Rock beats scissors. You saved humanity for now...");
getHumanChoice();
getComputerChoice();}

else if (humanSelection === "rock" && computerSelection === "paper")
{computerScore++;
console.log("You lose! Paper beats rock. Humanity is in danger!");
getHumanChoice();
getComputerChoice();
}

else if (humanSelection === "scissors" && computerSelection === "paper")
{humanScore++;
console.log("You win! Scissors beats paper. You saved humanity for now...");
getHumanChoice();
getComputerChoice();
}

else if (humanSelection === "scissors" && computerSelection === "rock")
{computerScore++;
console.log("You lose! Rock beats scissors. Humanity is in danger!");
getHumanChoice();
getComputerChoice();}

else { console.log("Maybe this is not the game for you");}

}


 

function playGame() {
    let roundScore
   
    for (roundScore = 0; roundScore < 5 ; roundScore++)
    {playRound(humanSelection, computerSelection)
           
    }

    if (roundScore = 5) {
        if (humanScore > computerScore) {console.log("Humanity has won!");} 
        else if (humanScore < computerScore) {console.log("Robots now rule the universe");}
    }
}

console.log(playGame());