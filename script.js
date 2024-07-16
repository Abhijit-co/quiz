const questions=[
    {
        question:"Which is largest animal in  world?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},        
            {text:"Elephant",correct:false},        
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is smallest country in world?",
        answers:[
            {text:"vatican city",correct:true},
            {text:"Bhutan",correct:false},        
            {text:"Nepal",correct:false},        
            {text:"Shri lanka",correct:false},
        ]
    },
    {
        question:"Which is largest desert in world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"Gobi",correct:false},        
            {text:"Sahara",correct:false},        
            {text:"Antatrica",correct:true},
        ]
    },
    {
        question:"Which is smallest continent in world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},        
            {text:"Arctic",correct:false},        
            {text:"Africa",correct:false},
        ]
    }
];

const questionElement=document.getElementById("question");

const answerButton=document.getElementById("answer-buttons");

const nextButton=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
           button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn= e.targets;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
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
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}! `;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();