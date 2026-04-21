let questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Geography",
    question: "What is the capital of Pakistan?",
    choices: ["Karachi", "Lahore", "Islamabad"],
    answer: "Islamabad"
  },
  {
    category: "History",
    question: "Who discovered America?",
    choices: ["Columbus", "Newton", "Einstein"],
    answer: "Columbus"
  },
  {
    category: "Technology",
    question: "What does JS stand for?",
    choices: ["JavaScript", "JavaSource", "JustStyle"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questions) {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}