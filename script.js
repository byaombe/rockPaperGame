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
let announce = " ";
const rounds = 5;



function playGame() {

    /* REMOVED FOR THE TIME BEING
for (let i = 0; i < 5; i++) {
    const personChoice = getHumanChoice(); //get human choice
if (personChoice == null) {
    return; //exit if input is invalid
   
}
    */
   
    const personChoice = getHumanChoice();
    const computerChoice = getComputerChoice(); //get computer choice


    //call plaRound with both choices
playRound(personChoice, computerChoice)

}


//LOgic to play a single round


function playRound (personChoice, computerChoice) {
    if (personChoice === "rock" && computerChoice === "scissors" || 
        personChoice === "paper" && computerChoice === "rock" || 
        personChoice === "scissors" && computerChoice ==="paper") {
        announce = "You WON this round!";
        humanScore++; //incriment human score

    } else if (personChoice ===  computerChoice) {
        announce = "IT'S A TIE!"
    }else{
    announce = "You LOST this round, computer won";
    computerScore++; //incriment computer score
}
   //update scores and announce winner
p1.textContent = "Human Score is: " + humanScore;
p2.textContent = "Computer Score is: " + computerScore;
p3.textContent = announce;

// if statement to announce winner after a player reaches 5 points
if (humanScore === rounds) {
    p3.textContent = "Congratulations! you won the game!"
    
} else if ( computerScore === rounds) {
p3.textContent = "You lose, Computer wins"
}

//disable buttons after a winner has been announced
if (humanScore === rounds || computerScore === rounds) {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
}
}



//call the function on button click

//document.getElementById("button1").addEventListener("click", function(){
  //playGame();  
//})


//3 Buttons one for each selection 

const btn1 = document.createElement("button");
btn1.textContent = "Rock";
document.body.appendChild(btn1);
btn1.addEventListener("click", () =>
    playRound('rock', getComputerChoice()));  
 

const btn2 = document.createElement("button");
btn2.textContent="Paper";
document.body.appendChild(btn2);
btn2.addEventListener("click", () =>
    playRound('paper', getComputerChoice()));  
 

const btn3 = document.createElement("button");
btn3.textContent="Scissors";
document.body.appendChild(btn3);
btn3.addEventListener("click", () =>
    playRound('scissors', getComputerChoice()));  
 //console.log("player selected:", personChoice);

const div1 = document.createElement("div");
//display human score
const p1 = document.createElement("p");

//display computer score
const p2 = document.createElement("p");

//display winner announcement
const p3 = document.createElement("p");
div1.appendChild(p1);
div1.appendChild(p2);
div1.appendChild(p3);

document.body.appendChild(div1);
