const movieDisplay = document.getElementById("movie-display");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const chancesElement = document.getElementById("chances");
const guessedLettersElement = document.getElementById("guessed-letters");
const guessInput = document.getElementById("guess-input");

let movieArr = [
  "Titanic",
  "Joker",
  "Harry Potter",
  "Spiderman",
  "Avengers"
];

function getRandomMovie() {
  const rI = Math.floor(Math.random() * movieArr.length);
  return movieArr[rI];
}

let selectedMovie = getRandomMovie();
let guessedL = [];
let chances = 5;

function displayMovie() {
  let display = "";

  for (let i = 0; i < selectedMovie.length; i++) {
    const char = selectedMovie[i];

    if (char === " ") {
      display += "  ";
    } else if (guessedL.includes(char.toLowerCase())) {
      display += char + " ";
    } else {
      display += "_ ";
    }
  }

  movieDisplay.textContent = display;
}

function getInput(alpha) {
  alpha = alpha.toLowerCase();

  if (!alpha || alpha.length !== 1) {
    return;
  }

  if (guessedL.includes(alpha)) {
    return;
  }

  guessedL.push(alpha);

  let found = false;

  for (let i = 0; i < selectedMovie.length; i++) {
    if (alpha === selectedMovie[i].toLowerCase()) {
      found = true;
      break;
    }
  }

  if (!found) {
    chances--;
  }

  displayMovie();

  chancesElement.textContent = `Chances Left: ${chances}`;
  guessedLettersElement.textContent =
    `Guessed Letters: ${guessedL.join(", ")}`;

  checkWin();
  checkLose();
}

function checkWin() {
  for (let i = 0; i < selectedMovie.length; i++) {
    const char = selectedMovie[i];

    if (
      char !== " " &&
      !guessedL.includes(char.toLowerCase())
    ) {
      return;
    }
  }

  movieDisplay.textContent = `🎉 You Win! Movie: ${selectedMovie}`;
  guessBtn.disabled = true;
}

function checkLose() {
  if (chances <= 0) {
    movieDisplay.textContent =
      `💀 You Lose! Movie was: ${selectedMovie}`;

    guessBtn.disabled = true;
  }
}

function restartGame() {
  selectedMovie = getRandomMovie();
  guessedL = [];
  chances = 5;

  chancesElement.textContent = "Chances Left: 5";
  guessedLettersElement.textContent = "Guessed Letters:";

  guessBtn.disabled = false;

  displayMovie();
}

guessBtn.addEventListener("click", () => {
  getInput(guessInput.value);
  guessInput.value = "";
});

restartBtn.addEventListener("click", restartGame);

displayMovie();