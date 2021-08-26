var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log("Hello, " + userName + ". This quiz will test how well you know Aneesh\n");

function game (question, answer) {
  userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer) {
    console.log("Correct!")
    score++
  }

  else {
    console.log("Wrong!")
  }
  console.log("_________")
}

var questions = [{
  question: "What is my age? ",
  answer: "16"
},{
  question: "Where do I live? ",
  answer: "mysore"
},{
  question: "What is my favorite anime? ",
  answer: "steins gate"
}]


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i]
  game(currentQuestion.question, currentQuestion.answer)
}



var highScores = ["Aneesh: 3", "Sukhchain: 1"];

console.log("Your Score: " + score)
console.log("Highscores:")
for (var i=0; i < highScores.length; i++) {
  console.log(highScores[i]);
}
console.log("If you have beaten the highscores, Congratulations! Send me a screenshot and your name will be immortalized in my code.")