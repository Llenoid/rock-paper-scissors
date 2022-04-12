const wpnArray = ["Rock", "Paper", "Scissors"]; //computer weapon choices
let totalScore = 0; // keep player score
let playerWin; //so playerWin can be used in playerScore playRound function

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

function announcer(results) {
  console.log(results);
}

function playerScore() {
  if (playerWin != null) {
    playerScore = playerScore + 1;
  }
  return (totalScore = playerScore);
}

function playRound() {
  let playerWeapon = capitalize(
    prompt("Type in your weapon (Rock, Paper, Scissors).")
  );
  let compWeapon = wpnArray[Math.floor(Math.random() * 3)];

  let computerWin =
    "You lose!" + " " + compWeapon + " " + "beats" + " " + playerWeapon;
  let playerWin =
    "You win!" + " " + playerWeapon + " " + "beats" + " " + compWeapon;

  if (playerWeapon === compWeapon) {
    announcer("It's a draw");
    playerScore();
  } else if (playerWeapon === "Rock" && compWeapon === "Paper") {
    announcer(computerWin);
  } else if (playerWeapon === "Paper" && compWeapon === "Rock") {
    announcer(playerWin);
    playerScore();
  }
  if (playerWeapon === "Paper" && compWeapon === "Scissors") {
    return announcer(computerWin);
  } else if (playerWeapon === "Scissors" && compWeapon === "Paper") {
    announcer(playerWin);
    playerScore();
  }
  if (playerWeapon === "Scissors" && compWeapon === "Rock") {
    return announcer(computerWin);
  } else if (playerWeapon === "Rock" && compWeapon === "Scissors") {
    announcer(playerWin);
    playerScore();
  }
}

function endGame() {
  alert("Babay");
}

function playTime() {
  let startRound = confirm("Want to play?"); //asks the user if they want to play
  if (startRound == true) {
    playRound();
    for (let i = 0; i < 4; i++) {
      let playAgain = confirm("Do you want to play again?");
      if (playAgain == true) {
        playRound();
      } else {
        endGame();
      }
    }
  } else if (startRound == false) {
    alert("Then don't!");
  }
  if (playerScore < 3) {
    alert("Computer Wins");
  } else {
    alert("Player Wins");
  }
}
