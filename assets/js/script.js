// Assigns html elements to variables
var timeEl = document.querySelector('.time');
var startButton = document.querySelector('#start-button');
var welcomeScreen = document.querySelector('#welcome-screen');
var btnA = document.querySelector("#choiceA");
var btnB = document.querySelector("#choiceB");
var btnC = document.querySelector("#choiceC");
var btnD = document.querySelector("#choiceD");

// Array of questions, answer choices & correct answers
var questionArr = [
    {
        question: "Which one is NOT a Javascript data type?",
        choices: ["Number", "Cats", "String", "Boolean"],
        crcAns: "Cats"
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
console.log('questionArr length: ' + questionArr.length);

// Currect Question variable
var currentQ;

// When you click the start button, welcome screen will disappear, current Q will appear. 
// Timer will start.
function start(){
    document.getElementById('welcome-screen').style.display = "none";
    document.getElementById('questions').setAttribute("class", "");
    currentQ= 0;
    showQuestion();
    setTime();
}

// Sets the question content to the questionsArr questions content
// Sets text content of buttons to the questionsArr choices content
// Sets the value of each button to the string in the questionsArr choices
function showQuestion() {
    document.getElementById("question").textContent = questionArr[currentQ].question

    btnA.textContent = questionArr[currentQ].choices[0];
    btnA.value = questionArr[currentQ].choices[0];
    btnB.textContent = questionArr[currentQ].choices[1];
    btnB.value = questionArr[currentQ].choices[1];
    btnC.textContent = questionArr[currentQ].choices[2];
    btnC.value = questionArr[currentQ].choices[2];
    btnD.textContent = questionArr[currentQ].choices[3];
    btnD.value = questionArr[currentQ].choices[3];
}

//Sets timer starting point 
var secondsLeft = 45;

// Timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left"

        if (secondsLeft <= 0 || currentQ + 1 >= questionArr.length) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Timer displays new text: 'Quiz Complete'
            timeEl.textContent = "Quiz Complete"
            // Calls function to input user initials
            saveInitials();
        }
    }, 1000);
}

// Score starts at 0
var score = 0;

// When an answer choice is clicked,  
function handleAnswer(event) {    
    // if the click's value is equal to the value of the crcans (correct answer) within the questionArr of the current question, add 10 points to the score and display 'correct!'
    if (event.target.value === questionArr[currentQ].crcAns){
        score += 10; 
        document.getElementById('response').setAttribute("class", '');
        document.getElementById('response').innerHTML = "Correct!";
        // allDone();
        // console.log('CurrentQ: ' + currentQ);
        // console.log(event.target);
    // if not equal, subtract 10 points to the score, deduct 10 seconds from the timer and display 'incorrect!'    
    } else {
        secondsLeft -= 10;
        score -=10;
        document.getElementById('response').setAttribute("class", '');
        document.getElementById('response').innerHTML = "Incorrect!";
        document.getElementById('timer').innerHTML = secondsLeft;
        // allDone();
        console.log("currentQ: " + currentQ);
        console.log(event.target);
    } 
    

    console.log("currentQ: " + currentQ); 
    // console.log('element reference: ', event.target);
    // console.log('real value in click handler: ', event.target.value);
    console.log('score: ', score);
    

    // Increase currentQ's index by 1 
    currentQ++;
    // run function showQuestion (again)
    allDone()
    // showQuestion()
    console.log('------------');
}

function allDone(){
   if (currentQ + 1 >= questionArr.length){
         console.log('if questionArr length: ' + questionArr.length);
         var secondsLeft = 0;
        saveInitials();
    } else {
        console.log('else questionArr length: ' + questionArr.length);
        showQuestion();
    }
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
    



/////////////////////////////
// Tests
// btnA.addEventListener("click", handleAnswer)
// btnB.addEventListener("click", handleAnswer)
// btnC.addEventListener("click", handleAnswer)
// btnD.addEventListener("click", function (elem){
//     if (elem.data-value === questionArr[currentQ].choices[3]);
// }
// );





//////////////////////////////
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
