console.log('hello world');

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



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice,computerChoice) {


if (humanSelection === "paper" && computerSelection === "rock")
{humanScore++;
console.log("You win! Paper beats rock. You saved humanity for now...");

}

else if (humanSelection === "paper" && computerSelection === "scissors")
{computerScore++;
console.log("You lose! Scissors beats paper. Humanity is in danger!");

}

else if (humanSelection === "paper" && computerSelection === "paper")
{console.log("Is a tie, humanity and computer can be similar, right?");
  
}
else if (humanSelection === "rock" && computerSelection === "rock") 
{console.log("Is a tie, humanity and computer can be similar, right?");

}

else if (humanSelection === "rock" && computerSelection === "scissors")
{humanScore++;
console.log("You win! Rock beats scissors. You saved humanity for now...");

}

else if (humanSelection === "rock" && computerSelection === "paper")
{computerScore++;
console.log("You lose! Paper beats rock. Humanity is in danger!");

}

else if (humanSelection === "scissors" && computerSelection === "paper")
{humanScore++;
console.log("You win! Scissors beats paper. You saved humanity for now...");

}

else if (humanSelection === "scissors" && computerSelection === "rock")
{computerScore++;
console.log("You lose! Rock beats scissors. Humanity is in danger!");

}

else { console.log("Maybe this is not the game for you");}

}

 let roundScore 
 

function playGame() {
   
   
    for (roundScore = 0; roundScore < 5 ; roundScore++)
    {playRound(humanSelection, computerSelection);
        
    
      
    }

    if (roundScore = 5) {
        if (humanScore > computerScore) {console.log("Humanity has won!");} 
        else if (humanScore < computerScore) {console.log("Robots now rule the universe");}
    }
}





function getComputerTest() {
    let rpsComputer = Math.floor(Math.random() * 2 );

    if  (rpsComputer === 1) {
        return "paper";
    }
    
    else if (rpsComputer === 0) {
        return "rock";
    }
}


function getHumanTest() {
let h = prompt ('Select your option?', '');

if (h.toLowerCase() === "paper") {
    return ("paper");
}
else if (h.toLowerCase() === "rock") {
    return ("rock");
}

else { return ("put a correct input");}
}



function playTestGame () {

    function playTest(humanTChoice, computerTChoice) {
if ( humanTest === "paper" && computerTest === "rock" ) { scoreTest++;
    console.log("Paper beats rock!. Humanity has won");}

else if ( humanTest === "rock" && computerTest === "paper") {scoreTest++;
    console.log("Paper beats rock!. Computer has won");}

    else { console.log("Is a tie");}
}    

playTest(humanTest, computerTest)

let scoreTest = 0;


let humanTest = getHumanTest();
let computerTest = getComputerTest();

}





