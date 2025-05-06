const questions=[
    {
        question: "Who directed the movie Inception?",
        answers: [
            {text: "Steven Spielberg", correct: false},
            {text: "James Cameron", correct: false},
            {text: "Christopher Nolan", correct: true},
            {text: "Martin Scorsese", correct: false},
        ]
    },
    {
        question: "Which movie features the quote: 'I'll be back'?",
        answers: [
            {text: "Die Hard", correct: false},
            {text: "RoboCop", correct: false},
            {text: "The Terminator", correct: true},
            {text: "Predator", correct: false},
        ]
    },
    {
        question: "Who played the character of Harry Potter in the movie series?",
        answers: [
            {text: "Elijah Wood", correct: false},
            {text: "Daniel Radcliffe", correct: true},
            {text: "Rupert Grint", correct: false},
            {text: "Tom Holland", correct: false},
        ]
    },
    {
        question: "Which movie won the Oscar for Best Picture in 2020?",
        answers: [
            {text: "1917", correct: false},
            {text: "Joker", correct: false},
            {text: "Parasite", correct: true},
            {text: "Once Upon a Time in Hollywood", correct: false},
        ]
    },
    {
        question: "What is the name of the kingdom in Frozen?",
        answers: [
            {text: "Arendelle", correct: true},
            {text: "Narnia", correct: false},
            {text: "Genovia", correct: false},
            {text: "Eldoria", correct: false},
        ]
    },
    {
        question: "In which movie did Heath Ledger play the Joker?",
        answers: [
            {text: "Batman Begins", correct: false},
            {text: "Justice League", correct: false},
            {text: "The Dark Knight", correct: true},
            {text: "Suicide Squad", correct: false},
        ]
    },
    {
        question: "Which actor voices Woody in Toy Story?",
        answers: [
            {text: "Tom Hanks", correct: true},
            {text: "Tim Allen", correct: false},
            {text: "Steve Carell", correct: false},
            {text: "Ben Stiller", correct: false},
        ]
    },
    {
        question: "What is the highest-grossing film of all time (as of 2024)?",
        answers: [
            {text: "Avatar", correct: true},
            {text: "Avengers: Endgame", correct: false},
            {text: "Titanic", correct: false},
            {text: "Star Wars: The Force Awakens", correct: false},
        ]
    },
    {
        question: "In The Matrix, does Neo take the blue pill or the red pill?",
        answers: [
            {text: "Blue", correct: false},
            {text: "Red", correct: true},
            {text: "Both", correct: false},
            {text: "Neither", correct: false},
        ]
    },
    {
        question: "What is the name of the hobbit played by Elijah Wood in The Lord of the Rings?",
        answers: [
            {text: "Bilbo Baggins", correct: false},
            {text: "Samwise Gamgee", correct: false},
            {text: "Frodo Baggins", correct: true},
            {text: "Peregrin Took", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();