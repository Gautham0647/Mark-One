// Quiz App
var readlineSync = require('readline-sync');

var chalk = require("chalk");
//define global score var
var score = 0;

var userName = readlineSync.question(chalk.blue.bold('Hi there!, May I have your name? '));

console.log(chalk.blue.bold('\nWelcome to the Quiz game: ' + (chalk.red.bold(userName.toUpperCase())) + "\n" + "How much do you know about me?" + "\n"));


//create a function which asks question and compares answer which if is right adds up 1 to the score
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.yellowBright.bold("Q" + (i + 1) + ": " + question));


  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.greenBright.bold(">> Right"));
    score = score + 1;
  }
  else {
    console.log(chalk.red.bold(">>Wronge"));

  }

  console.log(chalk.white.bgYellow.bold("Current Score: " + score));
  console.log(chalk.white.bold("\n--------------------------------------------\n"));
}
//create a list having objects which has question and answers.
var questions = [
  {
    question: "In which year I was born? : ",
    answer: "1995"
  },
  {
    question: "Where was i born and brought up? \nA. Mumbai  \nB. Umbergaon \nChoose A or B: ",
    answer: "A"
  },
  {
    question: "Which is my favourit colour?: ",
    answer: "RED"
  },
  {
    question: "What is my blood group? \nA. B Positive  \nB. A Negative\nChoose A or B: ",
    answer: "A"
  },

  {
    question: "Which is my favorite season ? \nA. Summer  \nB. Winter \nChoose A or B: ",
    answer: "B"
  },
  {
    question: "What is my favorite ice cream ? \nA. Chocolate  \nB. Mango  \nC. Vanilla  \nD. Strawberry\nchoose above option : ",
    answer: "C"
  },
  {
    question: "What would i like more to do with friends? \nA. Going to movie.  \nB. Playing cricket.\nChoose A or B: ",
    answer: "B"
  },
  {
    question: "What do i like more to do? \nA. Read Books  \nB. Play Chess\nChoose A or B:  ",
    answer: "B"
  },
  {
    question: "What Types of movies i like ? \nA. Horror  \nB. Romance  \nC. Science fiction  \nD. Fantasy\nchoose above option : ",
    answer: "C"
  },
  {
    question: "According to you,the best quality in me ? \nA. Loyalty  \nB. Empathy  \nC. Maturity  \nD. Openness\nchoose above option : ",
    answer: "A",
    answer: "B",
    answer: "C",
    answer: "D"
  },
]


// create a for loop executing play functioon for all questions in questions.
for (i = 0; i < questions.length; i++) {
  current_question = questions[i];
  play(current_question.question, current_question.answer);
}


// print final score stating number of right answers.
console.log(chalk.blue.bold(userName + ", Your Final Score is: " + score + ".\nYou gave " + score + " right answers out of " + questions.length + '.\n'));

console.log(chalk.blue.bold("Check out the high scores below, \nif you should be there send me screenshot of your score and I w'll love to update it."));

var highest_score = [
  {
    name: "RAJU",
    score: "10"
  },
  {
    name: "BABU BHAI",
    score: "8"
  },
  {
    name: "SHYAM",
    score: "6"
  }
]

for (i = 0; i < 3; i++) {
  console.log(chalk.blue.bold(highest_score[i].name + ": " + highest_score[i].score));
  if (score > highest_score[i].score) {
    console.log("Congrats! You have beaten record of " + highest_score[i].name)

  }
}