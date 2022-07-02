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

// Currect Question variable
var currentQ;

// Adds click event to start button; Once clicked, sends to start function
startButton.addEventListener("click", start)

// When you click the start button, welcome screen will disappear, currentQ will appear. 
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

// Adds click events to each button; Once button is clicked, sends to handleAnswer function
btnA.addEventListener("click", handleAnswer)
btnB.addEventListener("click", handleAnswer)
btnC.addEventListener("click", handleAnswer)
btnD.addEventListener("click", handleAnswer)

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
    // if not equal, subtract 10 points from the score, deduct 10 seconds from the timer and display 'incorrect!'    
    } else {
        secondsLeft -= 10;
        score -=10;
        document.getElementById('response').setAttribute("class", '');
        document.getElementById('response').innerHTML = "Incorrect!";
        document.getElementById('timer').innerHTML = secondsLeft;
    } 

    // Increase currentQ's index by 1 
    currentQ++;

    // run function showQuestion (again)
    allDone();
}

// Sends user to the initials input screen if they've completed all questions within the array. If not, sends user to the next question.
function allDone(){
   if (currentQ + 1 >= questionArr.length){
        saveInitials();
    } else {
        showQuestion();
    }
}

// Sets HTML elements as variables
var btnEl = document.getElementById("saveBtn");
var inputEl = document.getElementById("input")

// Hide questions, shows initials input
function saveInitials(){
    document.getElementById('questions').setAttribute('class', 'hidden')
    document.getElementById('insertInitials').setAttribute('class', '');
}

// When save button is clicked, showHighscores function
btnEl.addEventListener('click', showHighScores);

// Retrieves highScores div from HTML
var userDataEl = document.getElementById('userData');

// Saves initials and score to local storage
// Hide initals screen, displays high scores screen
function showHighScores(){ 
    localStorage.setItem("initials", inputEl.value);
    localStorage.setItem("score", score);
    document.getElementById('welcome-screen').style.display = "none";
    document.getElementById('insertInitials').setAttribute('class', 'hidden');
    document.getElementById('highScores').setAttribute('class', '');

    // Get initials and score from local storage
    var getInitials = localStorage.getItem('initials');
    var getScore = localStorage.getItem('score');

    // creates paragraph element; assigns it a variable name
    var userData = document.createElement('p');

    // creates a text node which contains the user initials and score
    var userDataContent = document.createTextNode(getInitials + ": " + getScore);
    // adds the text node to the paragraph;
    userData.appendChild(userDataContent);
    
    // adds the paragraph to the highScores div; appears on page
    userDataEl.appendChild(userData);
}

// Gets buttons from HTML
var goBackBtn = document.getElementById("goBack");
var clearScores = document.getElementById("clearScoreBtn");


// When Go Back button is clicked, sends to Welcome Screen
goBackBtn.addEventListener("click", showWelcomeScreen);


// Hides high scores, shows welcome screen
function showWelcomeScreen(){
    document.getElementById('highScores').setAttribute('class', 'hidden');
    document.getElementById('welcome-screen').style.display = "block";
    // Puts seconds back on timer; resets timer display
    secondsLeft=45;
    timeEl.textContent = '';
}

// When 'clear high scores' button is clicked, clears scores
clearScores.addEventListener("click", clearHighScores);

// Clears data from local storage
function clearHighScores(){
    localStorage.removeItem('initials');
    localStorage.removeItem('score');

    //removes high scores from screen 
    let p = document.getElementById('userData');
    p.remove();
}


var highScoresBtn = document.getElementById('viewScores');

highScoresBtn.addEventListener("click",showHighScores);