// welcome page with start button    
//            :hover; targets; on.click  
var timeEl = document.querySelector('.time');
var startButton = document.querySelector('#start-button');
var welcomeScreen = document.querySelector('#welcome-screen');
var btnA = document.querySelector("#choiceA");
var btnB = document.querySelector("#choiceB");
var btnC = document.querySelector("#choiceC");
var btnD = document.querySelector("#choiceD");

var questionArr = [
    {
        question: "Which one is NOT a Javascript data type?",
        choices: ["Number", "Function", "String", "Boolean"],
        crcAns: "Function"
    },
    {
        question: "What does NaN stand for?",
        choices: ["Noodles are Nice", "Not a Nugget", "Not a Number", "Nothing acting Normal"],
        crcAns: "Not a Number"
    },
    {
        question: "Which company developed Javascript? ",
        choices: ["Netscape", "Google", "Meta", "Stripe"],
        crcAns: "Netscape"
    },
    {
        question: "What is === operator? ",
        choices: ["Logical Operator", "Arithmetic Operator", "Assignment Operator", "Strict Equality Operator"],
        crcAns: "Strict Equality Operator"
    },
    {
        question: "What are all the looping structures in JavaScript?",
        choices: ["For", "While", "Do-while", "All of the Above"],
        crcAns: "All of the Above"
    },
]

var currentQ;

function start(){
    document.getElementById('welcome-screen').style.display = "none";
    document.getElementById('questions').setAttribute("class", "");
    currentQ= 0;
    showQuestion();
    setTime();
}

function showQuestion() {
    document.getElementById("question").textContent = questionArr[currentQ].question

    btnA.textContent = questionArr[currentQ].choices[0];
    btnB.textContent = questionArr[currentQ].choices[1];
    btnC.textContent = questionArr[currentQ].choices[2];
    btnD.textContent = questionArr[currentQ].choices[3];
}



var secondsLeft = 45;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left"

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            saveInitials();
        }
    }, 1000);
}

var score = 0;

function handleAnswer(event) {
    // if correct do something, if incorrect something else;
    
    if (event.taget === questionArr[currentQ].crcAns){
        score + 10; 
        document.getElementById('response').setAttribute("class", '');
    } else {
        secondsLeft -= 10;
        score -=10;
        document.getElementById('timer').innerHTML = secondsLeft;};
        let text = document.getElementById('response').innerHTML;
        document.getElementById('response').setAttribute("class", '');
        document.getElementById('response').innerHTML = text.replace("Correct!", "Incorrect!");

    
    console.log(score);
    console.log(event.target)

    currentQ++;
    showQuestion()
}

startButton.addEventListener("click", start)
btnA.addEventListener("click", handleAnswer)
btnB.addEventListener("click", handleAnswer)
btnC.addEventListener("click", handleAnswer)
btnD.addEventListener("click", handleAnswer)


var inputEl = document.getElementById("input");
var btnEl = document.getElementById("saveBtn");

function saveInitials(){
    document.getElementById('questions').setAttribute('class', 'hidden')
    document.getElementById('insertInitials').setAttribute('class', '');

    console.log(int);
    var int = inputEl.value;
}




btnEl.addEventListener("click", saveInitials);
btnEl.addEventListener('click', showHighScores);

var userInfo = {
    initials: int,
    score: score,
}

function showHighScores(){
    document.getElementById('insertInitials').setAttribute('class', 'hidden');
    document.getElementById('highScores').setAttribute('class', '');

  
    document.getElementById('userInfo').textContent = userInfo.int;
    document.getElementById('userInfo').textContent = userInfo.score;


}
    


//        timer begins on click; welcome screen hides  
//          
//        question appears - ordered list - multiple choice    

//        user chooses answer    
//            target; on.click;    
//        computer evaulates if answer is true    
//            boolean - how do i set this?;     
//        if true, earn points; else deduct time off clock, earn no points    
//            object to store user score and initials    
//                var userData = {initials:"", score:0}    
//            add points to score with correct answers - if (answer = true){score + 10 }     
//        confirm with 'correct' or 'incorrect' message that appears beneath the multiple choice list     
//            hide/show on click    
//        New question appears; repeat same process for each question    
//            for loop (var = i, i < questions.length, i++){
//             this is where i get confused
//         }   
//        Game ends when timer reaches 0, or user completes all questions    
//            End the loop dependent on the timer; or end the loop when it completes questions.length; do i do this with Else if?    
//        Display screen to input initials with final score    
//            list display: score: (value of userData.score)     
//        User inputs initials; submits    
//            place for user to type; computer stores in userData.initials    
//            Submit button; on.click change pages    
//        Display screen with user initials and score; Given button option to "go back" or "clear high scores"    
//        save all scores in view high scores link in top left of screen    
