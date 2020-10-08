const question = document.getElementById("question");
const choice= Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = true;
let score =0;
let availableQuestions = [];

let questions = [
  {
    question:"Unsolicited e-mails are termed as?"
    choice1:"Group"
    choice2:"Spam"
    choice3:"Virus"
    choice4:"Internet Protocol"
    answer: 2
  }

  {
    question:"The full form of IRQ is?"
    choice1:"Interrupt Request"
    choice2:"Internet Recall Que"
    choice3:"interest Request Quotation"
    choice4:"Input Request Quote"
    answer: 1

  }

  {
    question:"Cathode Ray Tube is found in?"
    choice1:"Moniter"
    choice2:"Keyboard"
    choice3:"Mother Board"
    choice4:"Mouse"
    answer: 1
  }

  { 
    question:"Among the following, which term is related to memory?"
    choice1:"WAM"
    choice2:"MAN"
    choice3:"CRT"
    choice4:"RAM"
    answer: 4
  }
]

//constants
const CORRECT_BONUS = 20;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();

};

getNewQuestion = () => {
  questionCounter++;
  const questionindex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionindex];
  question.innerText = currentQuestion.question;
};

startGame();
