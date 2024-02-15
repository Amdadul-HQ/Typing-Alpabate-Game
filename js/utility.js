function hidePageById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showPageById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function randomAlpabates() {
  const alpabatesString = "abcdefghijklmnopqrstuvwxyz/";
  const alpabate = alpabatesString.split("");
  const randomNumber = Math.floor(Math.random() * alpabate.length);
  const randomAlpabate = alpabate[randomNumber];
  return randomAlpabate;
}
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function continueGame() {
  document.getElementById("start-btn").classList.add("hidden");
  hidePageById("score-page");
  showPageById("play-ground");
  const randomLetter = randomAlpabates();
  const display = document.getElementById("display-text");
  display.innerText = randomLetter;
  setBackgroundColorById(randomLetter);
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementLetter = elementText.toLowerCase();
  return elementLetter;
}
function setElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  return elementText;
}

function getScoreANDLifeText(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementNumber = parseInt(elementText);
  return elementNumber;
}

function setElementTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function handleKeyboardKeyUpEvent(event) {
  const playerPress = event.key;
  if (playerPress === "Escape") {
    gameOver();
  }
  const expectedAlpabate = getElementTextById("display-text");

  if (playerPress === expectedAlpabate) {
    continueGame();
    removeBackgroundColorById(expectedAlpabate);
    const currentScore = getScoreANDLifeText("score-text");
    const updateScore = currentScore + 1;
    setElementTextById("score-text", updateScore);
  } else {
    const currentLife = getScoreANDLifeText("life-text");
    const updateLife = currentLife - 1;
    setElementTextById("life-text", updateLife);

    if (updateLife <= 0) {
      gameOver();
    }
  }
}

function gameOver() {
  hidePageById("play-ground");
  showPageById("score-page");
  const finalScore = getScoreANDLifeText("score-text");
  setElementTextById("final-score", finalScore);

  setElementTextById('life-text',5)
  setElementTextById('score-text',0)
  const currentAlpabate = getElementTextById("display-text");
  removeBackgroundColorById(currentAlpabate);
}
