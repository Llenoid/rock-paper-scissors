const wpnArray = ["Rock", "Paper", "Scissors"]; //computer weapon choices

//lets the user type Rock/Paper/Scissors in any case and outputs Sentence case Rock/Paper/Scissors
function capitalize(choice) {
  if (choice === choice.charAt(0).toUpperCase() + choice.slice(1)) {
    return choice;
  } else if (choice === choice.toLowerCase()) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
  } else if (choice === choice.toUpperCase()) {
    return choice.charAt(0) + choice.slice(1).toLowerCase();
  } else {
    return choice.charAt(0) + choice.slice(1).toLowerCase();
  }
}

function playerSelection() {
  let playerWeapon = prompt("Type in your weapon (Rock, Paper, Scissors).");
  return capitalize(playerWeapon);
}

function computerSelection() {
  return wpnArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let startRound = confirm("Want to play?"); //asks the user if they want to play

  if (startRound == true) {
    playerSelection();
  } else if (startRound == false) {
    alert("Then don't!");
  }
}
