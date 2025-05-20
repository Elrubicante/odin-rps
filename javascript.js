console.log('hello world');

function getComputerChoice () {
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

function playRound(humanChoice, computerChoice) {}
 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

