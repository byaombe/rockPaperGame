/*
function: return rock, paper, or scissors
prompt: et human choice (case sensitive)
keep track of score for human and computer
make 


*/

/* get computer choice */
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    console.log(choices[(Math.floor(Math.random() * choices.length))]);
}
getComputerChoice()

/*Get human choice */
function getHumanChoice() {

   


let text;
let person = prompt("Rock, Paper, or Scissors?");

if (person == "rock"|| person=="paper" || person == "scissors") {
     text = "you have entered " + person;
} else if ( person == null || person == ""){
    text= "Please type your choice"
} else {
    text = "That was an invalid choice"
}
document.getElementById("textChoice").innerHTML = text;

}
getHumanChoice()


/*
keep track of the scores
*/
let humanScore = 0;
let computerScore = 0;

/*
LOgic to play a single round
*/
function playRound (humanChoice, ComputerChoice) {

}