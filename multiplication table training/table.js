const startButton = document.getElementById("start-button");
const startContainer = document.getElementById("start-countainer");
const gameContainer = document.getElementById("game-countainer");
const questionBlock = document.getElementById("question");
const userAnswer = document.getElementById("answer");
const submitButton = document.getElementById("submit-answer");

const generateRandomInRange = (min, max) => {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

let firstRandom = generateRandomInRange(1, 9);
let secondRandom = generateRandomInRange(1, 9);

startButton.addEventListener("click", () => {
  gameContainer.style.display = "block";
  startButton.style.display = "none";

  question.innerText = `${firstRandom} * ${secondRandom}`;
});

submitButton.addEventListener("click", () => {
  const userCurrentAnswer = +userAnswer.value;
  const correctAnswer = firstRandom * secondRandom;

  if (userCurrentAnswer === correctAnswer) {
    alert("Вы дали правильный ответ!");
    userAnswer.value = "";
    firstRandom = generateRandomInRange(1, 9);
    secondRandom = generateRandomInRange(1, 9);
    question.innerText = `${firstRandom} * ${secondRandom}`;
  } else {
    alert("Вы дали не верный ответ!");
  }
});
