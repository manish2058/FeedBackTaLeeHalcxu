// variables
const instructionPannel = document.querySelector("#instructions");
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const testContainer = document.querySelector("#test-container");
const resultContainer = document.querySelector("#result-container");
const scoreContainer = document.querySelector("#score-container");
const retakeButton = document.querySelector("#retake-btn");

// images
const heroImage = document.getElementById("hero-image");
const drivingPeople = document.getElementById("driving-people");

// question-1
const questionOneContainer = document.querySelector("#question-one-container");
const questionOneRadio = document.getElementsByName("question-one-option");
const questionOneOptionsText = document.querySelectorAll("#option-one-text");

// question-2
const questionTwoContainer = document.querySelector("#question-two-container");
const questionTwoRadio = document.getElementsByName("question-two-option");
const questionTwoOptionsText = document.querySelectorAll("#option-two-text");

// question-3
const questionThreeContainer = document.querySelector(
  "#question-three-container"
);
const questionThreeRadio = document.getElementsByName("question-three-option");
const questionThreeOptionsText =
  document.querySelectorAll("#option-three-text");

// question-4
const questionFourContainer = document.querySelector(
  "#question-four-container"
);
const questionFourRadio = document.getElementsByName("question-four-option");
const questionFourOptionsText = document.querySelectorAll("#option-four-text");

// question-5
const questionFiveContainer = document.querySelector(
  "#question-five-container"
);
const questionFiveRadio = document.getElementsByName("question-five-option");
const questionFiveOptionsText = document.querySelectorAll("#option-five-text");

let shuffledQuestions;
let currentQuestionIndex = 0;
let score = 0;

// event listeners
startButton.addEventListener("click", () => {
  heroImage.classList.toggle("hidden");
  nextButton.classList.remove("hidden");
  instructionPannel.classList.add("hidden");
  startButton.classList.add("hidden");
  testContainer.classList.remove("hidden");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  // 1
  loadQuestion(questionOneContainer, questionOneOptionsText, questionOneRadio);
  currentQuestionIndex++;

  // 2
  loadQuestion(questionTwoContainer, questionTwoOptionsText, questionTwoRadio);
  currentQuestionIndex++;
  // 3
  loadQuestion(
    questionThreeContainer,
    questionThreeOptionsText,
    questionThreeRadio
  );
  currentQuestionIndex++;
  // 4
  loadQuestion(
    questionFourContainer,
    questionFourOptionsText,
    questionFourRadio
  );
  currentQuestionIndex++;
  // 5
  loadQuestion(
    questionFiveContainer,
    questionFiveOptionsText,
    questionFiveRadio
  );
});

nextButton.addEventListener("click", () => {
  checkAnswers(0, questionOneRadio);
  checkAnswers(1, questionTwoRadio);
  checkAnswers(2, questionThreeRadio);
  checkAnswers(3, questionFourRadio);
  checkAnswers(4, questionFiveRadio);
  if (score >= 3) {
    // console.log("Pass!");
    resultContainer.innerText = "Congratulation You Have Passed !!";
    resultContainer.classList.add("text-green-500");
  } else {
    // console.log("Failed!!");
    resultContainer.innerText = "You Have Failed !!";
    resultContainer.classList.add("text-red-500");
  }
  // console.log(score);
  resultContainer.classList.toggle("hidden");
  testContainer.classList.toggle("hidden");
  nextButton.classList.toggle("hidden");
  scoreContainer.innerText = "You have scored " + score + " out of 5 !";
  scoreContainer.classList.toggle("hidden");
  retakeButton.classList.toggle("hidden");
  drivingPeople.classList.toggle("hidden");

  // startButton.innerText = "Retake";
  // startButton.classList.toggle("hidden");
});

retakeButton.addEventListener("click", () => {
  location.reload();
});

// function
function loadQuestion(containerNumber, optionText, optionRadio) {
  containerNumber.innerText = shuffledQuestions[currentQuestionIndex].question;
  for (let i = 0; i < optionText.length; i++) {
    optionText[i].innerText =
      shuffledQuestions[currentQuestionIndex].answers[i].text;
    optionText[i].addEventListener("click", () => {
      optionRadio[i].checked = true;
    });
  }
}

function checkAnswers(number, radio) {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked && shuffledQuestions[number].answers[i].correct) {
      score++;
    }
  }
  // console.log(score);
}

// Question Objects
const questions = [
  {
    question: "What is the capital city of Canada?",
    answers: [
      {
        text: "Ottawa",
        correct: true,
      },
      {
        text: "Vancouver",
        correct: false,
      },
      {
        text: "Toronto",
        correct: false,
      },
      {
        text: "Montreal",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which country is known for producing the most coffee in the world?",
    answers: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "Colombia",
        correct: false,
      },
      {
        text: "Ethiopia",
        correct: false,
      },
      {
        text: "Vietnam",
        correct: false,
      },
    ],
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      {
        text: "Stephenie Meyer",
        correct: false,
      },
      {
        text: "J.K. Rowling",
        correct: true,
      },
      {
        text: "Suzanne Collins",
        correct: false,
      },
      {
        text: "George R.R. Martin",
        correct: false,
      },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      {
        text: " Venus",
        correct: false,
      },
      {
        text: "Mars",
        correct: false,
      },
      {
        text: "Saturn",
        correct: false,
      },
      {
        text: "Jupiter",
        correct: true,
      },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      {
        text: "Mount Kilimanjaro",
        correct: false,
      },
      {
        text: "Mount McKinley",
        correct: false,
      },
      {
        text: "Mount Everest",
        correct: true,
      },
      {
        text: "Mount Fuji",
        correct: false,
      },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      {
        text: "Yen",
        correct: true,
      },
      {
        text: "Euro",
        correct: false,
      },
      {
        text: "Dollar",
        correct: false,
      },
      {
        text: "Pound",
        correct: false,
      },
    ],
  },
  {
    question: "Who was the first person to walk on the moon?",
    answers: [
      {
        text: "Buzz Aldrin",
        correct: false,
      },
      {
        text: "Michael Collins",
        correct: false,
      },
      {
        text: "Yuri Gagarin",
        correct: false,
      },
      {
        text: "Neil Armstrong",
        correct: true,
      },
    ],
  },
  {
    question: "What is the largest ocean in the world ?",
    answers: [
      {
        text: "Pacific Ocean",
        correct: true,
      },
      {
        text: "Atlantic Ocean",
        correct: false,
      },
      {
        text: "Indian Ocean",
        correct: false,
      },
      {
        text: "Artic Ocean",
        correct: false,
      },
    ],
  },
  {
    question: "Which animal is known ad the king of the jungle?",
    answers: [
      {
        text: "Lion",
        correct: true,
      },
      {
        text: "Tiger",
        correct: false,
      },
      {
        text: "Cheetah",
        correct: false,
      },
      {
        text: "Leopard",
        correct: false,
      },
    ],
  },
  {
    question: "Who painted the famous artwork The Starry Night?",
    answers: [
      {
        text: "Pablo Picasso",
        correct: false,
      },
      {
        text: "Vincent van Gogh",
        correct: true,
      },
      {
        text: "Leonardo da Vinci",
        correct: false,
      },
      {
        text: "Michelangelo",
        correct: false,
      },
    ],
  },
];
