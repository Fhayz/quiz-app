const questions = [
  {
    question: "1. What is the capital of Mongolia?",
    options: ["Ulaanbaatar", "Astana", "Hanoi", "Kuala Lumpur"],
    answer: 0
  },
  {
    question: "2. Which scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    answer: 1
  },
  {
    question: "3. Who painted the famous artwork 'The Starry Night'?",
    options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
    answer: 2
  },
  {
    question: "4. In computer science, what does 'HTTP' stand for?",
    options: ["Hypertext Transfer Protocol", "Hyperlink Transfer Text Protocol", "Hypertext Transfer Text Processing", "Hyperlink Transfer Text Processing"],
    answer: 1
  },
  {
    question: "5. Which chemical element has the symbol 'Fe'?",
    options: ["Iron", "Fluorine", "Iodine", "Francium"],
    answer: 0
  },
  {
    question: "6. Who wrote the novel 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "George Orwell", "Mark Twain"],
    answer: 1
  },
  {
    question: "7. What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
    answer: 0
  },
  {
    question: "8. Which composer wrote the famous symphony 'Symphony No. 5'?",
    options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Johannes Brahms"],
    answer: 1
  },
  {
    question: "9. Which hormone is known as the 'love hormone'?",
    options: ["Oxytocin", "Serotonin", "Endorphin", "Dopamine"],
    answer: 0
  },
  {
    question: "10. Who is the author of the 'Harry Potter' book series?",
    options: ["J.R.R. Tolkien", "George R.R. Martin", "Stephen King", "J.K. Rowling"],
    answer: 3
  },
  {
    question: "11. Who is the author of the novel '1984'?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
    answer: 0
  },
  {
    question: "12. What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    answer: 0
  },
  {
    question: "13. Who painted the famous artwork 'The Persistence of Memory'?",
    options: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Leonardo da Vinci"],
    answer: 1
  },
  {
    question: "14. What is the largest ocean on Earth?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 0
  },
  {
    question: "15. Who discovered penicillin?",
    options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Thomas Edison"],
    answer: 0
  },
  {
    question: "16. Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    answer: 0
  },
  {
    question: "17. Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Arthur Miller", "George Bernard Shaw", "Tennessee Williams"],
    answer: 0
  },
  {
    question: "18. Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    answer: 0
  },
  {
    question: "19. What is the formula for the area of a circle?",
    options: ["πr^2", "2πr", "2r", "πd"],
    answer: 0
  },
  {
    question: "20. Who is the famous physicist known for the theory of relativity?",
    options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
    answer: 0
  },

];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitBtn = document.getElementById("submitBtn");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionElement.textContent = currentQuizQuestion.question;
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuizQuestion.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = currentQuizQuestion.options[i];
      option.addEventListener("click", checkAnswer);
      optionsElement.appendChild(option);
    }
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target;
    const selectedAnswer = selectedOption.textContent;
    const currentQuizQuestion = questions[currentQuestion];
  
    if (currentQuizQuestion.options[currentQuizQuestion.answer] === selectedAnswer) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    submitBtn.style.display = "none";
    if (score >= 10) {
      scoreElement.innerHTML = `Congratulations! Your score: ${score}/${questions.length}.  Refresh the page to Start Over`;
      
    } else {
      scoreElement.innerHTML = `Your score: ${score}/${questions.length}. You can try again.`;
      const tryAgainBtn = document.createElement("button");
      tryAgainBtn.textContent = "Try Again";
      tryAgainBtn.addEventListener("click", tryAgain);
      optionsElement.append(tryAgainBtn);
      
    }
  }
 
  function tryAgain() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreElement.textContent = "";
  }
  
  loadQuestion();
  submitBtn.addEventListener("click", checkAnswer);