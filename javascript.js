let computerResult
let humanResult

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

function playGame() {
   
    function playRound(humanChoice,computerChoice) {

//Human wins.
        if (humanSelection === "paper" && computerSelection === "rock"  ||
            humanSelection === "rock" && computerSelection === "scissors" ||
            humanSelection === "scissors" && computerSelection === "paper"
        ) 
        { humanScore++;
        console.log(`You win! ${humanSelection} beats ${computerSelection}. You saved humanity for now...`);
        alert(`This is how destiny is going: Humans are at ${humanScore} point,
    while Computers are at ${computerScore}`);
}

//Computer wins.
        else if (humanSelection === "paper" && computerSelection === "scissors"  ||
                 humanSelection === "rock" && computerSelection === "paper"  ||
                 humanSelection === "scissors" && computerSelection === "rock"
        )
                {computerScore++;
                console.log(`You lose! ${computerSelection} beats ${humanSelection}. Humanity is in danger!`);
                alert(`This is how destiny is going: Humans are at ${humanScore} point,
                while Computers are at ${computerScore}`);
}
//Tie.
        else
                {console.log("Is a tie, humanity and computer can be similar, right?");
                alert(`This is how destiny is going: Humans are at ${humanScore} point,
                while Computers are at ${computerScore}`); 
}
} 
        let roundScore;
   
        for (roundScore = 0; roundScore < 5 ; roundScore++)
        {  humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
            
    }
    
    if (roundScore == 5 && computerScore > humanScore ) {
    alert("Computers just took over, humanity lost");
    }

    else if (roundScore == 5 && humanScore > computerScore ) {
    alert("Humanity just won, Robots are erradicated from the universe.");
  
}

}
console.log(playGame());