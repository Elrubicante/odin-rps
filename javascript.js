console.log('hello world');


function getHumanChoice() {
let h = prompt ('Select your option?', '');
if (h === 'scissor') {
    return ('You picked scissors!');
}
else if (h === 'paper') {
    return ('you picked paper!');
}
else if (h === 'rock') {
    return ('you picked rock!');
}

else { return ('put a correct input');}
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {}
 
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



if humanSelection === scissor || computerSelection === paper 
add 1 to humanScore

if humanSelection === 