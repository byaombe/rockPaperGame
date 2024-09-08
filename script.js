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
if (person == null || person == "") {
    text = "Please type your choice";
}else {
text = person;
}
document.getElementById("textChoice").innerHTML = text;
}

getHumanChoice()
