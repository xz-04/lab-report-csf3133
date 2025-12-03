// Questions Array
let questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "Capital of France?",
        options: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Iron"],
        answer: "Oxygen"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10"],
        answer: "8"
    },
    {
        question: "Which country is famous for the kangaroo?",
        options: ["Australia", "India", "Brazil"],
        answer: "Australia"
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3"],
        answer: "2"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7"],
        answer: "7"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;

// HTML elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");

// Start button + screen
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const content = document.getElementById("content");

// shuffleQuestions()
function shuffleQuestions() {
    questions = questions.sort(() => Math.random() - 0.5);
}

// startTimer()
function startTimer() {
    timeLeft = 10;
    timeEl.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            lockOptions();
            feedbackEl.textContent = "Time's up!";
            nextBtn.disabled = false;
        }
    }, 1000);
}

// displayQuestion()
function displayQuestion() {
    resetState();

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach(opt => {
        let btn = document.createElement("div");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(btn, q.answer);
        optionsEl.appendChild(btn);
    });

    startTimer();
}

// checkAnswer()
function checkAnswer(selectedBtn, correctAnswer) {
    clearInterval(timer);
    lockOptions();

    if (selectedBtn.textContent === correctAnswer) {
        selectedBtn.classList.add("correct");
        feedbackEl.textContent = "Correct!";
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        feedbackEl.textContent = "Incorrect!";
    }

    nextBtn.disabled = false;
}

// nextQuestion()
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// startQuiz()
function startQuiz() {
    shuffleQuestions();
    currentQuestion = 0;
    score = 0;

    startScreen.style.display = "none"; // hide start page
    content.style.display = "block"; // show quiz

    nextBtn.style.display = "block";
    scoreEl.textContent = "";

    displayQuestion();
}

// Helper functions
function resetState() {
    clearInterval(timer);
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    nextBtn.disabled = true;
}

function lockOptions() {
    const opts = document.querySelectorAll(".option");

    opts.forEach(btn => {
        btn.classList.add("disabled");

        if (btn.textContent === questions[currentQuestion].answer) {
            btn.classList.add("correct");
        }
    });
}

// End Quiz
function endQuiz() {
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";

    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

// Event listeners
nextBtn.onclick = nextQuestion;
startBtn.onclick = startQuiz;
