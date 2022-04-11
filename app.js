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

function announcer(results) {
  alert(results);
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

  if (playerWeapon === "Rock" && compWeapon === "Paper") {
    return announcer(computerWin);
  } else if (playerWeapon === "Paper" && compWeapon === "Rock") {
    return announcer(playerWin);
  }
  if (playerWeapon === "Paper" && compWeapon === "Scissors") {
    return announcer(computerWin);
  } else if (playerWeapon === "Scissors" && compWeapon === "Paper") {
    return announcer(playerWin);
  }
  if (playerWeapon === "Scissors" && compWeapon === "Rock") {
    return announcer(computerWin);
  } else if (playerWeapon === "Rock" && compWeapon === "Scissors") {
    return announcer(playerWin);
  } else if (playerWeapon === compWeapon) {
    return announcer("It's a draw");
  }
  if (playerWin != null || playerWeapon === compWeapon) {
    let playerScore = playerScore++;
    if (playerscore < 3) {
      alert("Computer Wins");
    } else {
      alert("You Win");
    }
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
}
