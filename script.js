/*
function: return rock, paper, or scissors
prompt: et human choice (case sensitive)
keep track of score for human and computer
make 


*/

/* get computer choice */

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];

    computerChoice = computerChoice[(Math.floor(Math.random() * computerChoice.length))];

    let text1 = "Computer entered " + computerChoice;

    document.getElementById("cwordChoice").innerHTML = text1;

    return computerChoice; //RETURN COMPUTER CHOICE
}

//Get human choice 
function getHumanChoice() {

let text;
let personChoice = prompt("Rock, Paper, or Scissors?");

//check for person choice != null before calling tolowercase()
if (personChoice !== null) {
    personChoice = personChoice.toLowerCase();

}
if (personChoice == "rock"|| personChoice=="paper" || personChoice== "scissors") {
     text = "you have entered " + personChoice;
} else if ( personChoice == null || personChoice == ""){
    text= "Please type your choice"
    personChoice = null;
} else {
    text = "That was an invalid choice"
    personChoice = null;
}
document.getElementById("textChoice").innerHTML = text;

 return personChoice;
}

    //keep track of the scores
let humanScore = 0;
let computerScore = 0;

function playGame() {



for (let i = 0; i < 5; i++) {
    const personChoice = getHumanChoice(); //get human choice
if (personChoice == null) {
    return; //exit if input is invalid
}
    const computerChoice = getComputerChoice(); //get computer choice


    //call plaRound with both choices
playRound(personChoice, computerChoice)

}

//LOgic to play a single round

function playRound (personChoice, computerChoice) {
    let announce;

    if (personChoice === "rock" && computerChoice === "scissors" || 
        personChoice === "paper" && computerChoice === "rock" || 
        personChoice === "scissors" && computerChoice ==="paper") {
        announce = "YOU WIN!";
        humanScore++; //incriment human score

    } else if (personChoice ===  computerChoice) {
        announce = "IT'S A TIE!"
    }else{
    announce = "YOU LOSE, COMPUTER WINS";
    computerScore++; //incriment computer score
}
   
   //get the scores
   document.getElementById("human").innerHTML = "human Score is: " + humanScore;
   document.getElementById("computer").innerHTML = "computer Score is: " + computerScore;

    //ANNOUNCE WINNER
    document.getElementById("winner").innerHTML = announce;

}

}
//call the function on button click

document.getElementById("button1").addEventListener("click", function(){
  playGame();  
})








