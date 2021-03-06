var quiz = document.getElementById("questions");
var answer = document.getElementById("answers");
var q1 = document.getElementById("qAnswer1");
var q2 = document.getElementById("qAnswer2");
var q3 = document.getElementById("qAnswer3");
var q4 = document.getElementById("qAnswer4");
var btn = document.getElementById("submit");
var answerBtn = document.getElementById("answers");
var totalSeconds = document.querySelector(".timer");

var myQuestions = [
  {
    question: "How should you do a bench press?",
    answers: [
      "It doesn't matter how you do it, it only matters how much weight and how many you did!",
      "With elbows flared out, quickly bring the bar to your chest, then slowly bring it back up.",
      "With elbows as close to your sides as possible, slowly bring the bar down to the solarplex, then push as hard/fast as you can back up.",
      "With elbows as close to you as possible, bring the bar down to your collarbone, then push it back up.",
    ],
    correctAnswer:
      "With elbows as close to your sides as possible, slowly bring the bar down to the solarplex, then push as hard/fast as you can back up.",
  },
  {
    question: "How do you perform a deadlift?",
    answers: [
      "With feet shoulder-width apart or wider, hinge at the hips and pull the barbell up using your glutes and hamstrings. Squeezing the glutes at the top.",
      "With feet as close together as possible, bend down and then pull the bar up with straight legs.",
      "Just bend over, grab the bar, and then pull up as hard as you can.",
      "Bend over, grab the bar, then call it a day.",
    ],
    correctAnswer:
      "With feet shoulder-width apart or wider, hinge at the hips and pull the barbell up using your glutes and hamstrings. Squeezing the glutes at the top.",
  },
  {
    question: "How do you perform a squat?",
    answers: [
      "Try to bring your butt down as close to the ground as you can, then bring it back up.",
      "With feet shoulder-width or a little wider, bring your butt back and down. Keep your back straight and head up, then bring your hips back up.",
      "Place one feet ahead of you, then bring the knee behind you straight down, bending both knees at a 90 degree. Then come back up.",
      "You put your left foot in, then you shake it all about.",
    ],
    correctAnswer:
      "With feet shoulder-width or a little wider, bring your butt back and down. Keep your back straight and head up, then bring your hips back up.",
  },
  {
    question: "How you do perform a pull up?",
    answers: [
      "Grab the bar with both hands shoulder-width apart or a little wider and using an overhand grip, then using your back muscles pull your body up. Keep elbows to the side.",
      "Grab the bar with both hands, using an underhand grip(palms towards you), then using your back muscles pull your body up.",
      "Grab the bars beside you, then bring your body down bending at the elbows. Then push your body back up.",
      "Grab the bar with both hands, then swing your body backwards and forwards.",
    ],
    correctAnswer:
      "Grab the bar with both hands shoulder-width apart or a little wider and using an overhand grip, then using your back muscles pull your body up. Keep elbows to the side.",
  },
  {
    question: "How do you perform a bicep curl?",
    answers: [
      "Grab the dumbbells and raise them over your head.",
      "Grab the dumbbells, bend over and then row, bringing them to your sides and back down.",
      "Grab the dumbbells and bring them to your ears.",
      "Grab the dumbbells and bring them to your face, bending at the eblows and with palms facing toward you.",
    ],
    correctAnswer:
      "Grab the dumbbells and bring them to your face, bending at the eblows and with palms facing toward you.",
  },
];

var questionIndex = 0;
// console.log(myQuestions[questionIndex].answers);

// var questionIndex = 0;
function showQuestions() {
  if (questionIndex === myQuestions.length) {
    sendMessage();
  } else {
    quiz.textContent = myQuestions[questionIndex].question;
    
    q1.textContent = myQuestions[questionIndex].answers[0];
    q2.textContent = myQuestions[questionIndex].answers[1];
    q3.textContent = myQuestions[questionIndex].answers[2];
    q4.textContent = myQuestions[questionIndex].answers[3];
  }
}

var secsLeft = 120;
function setTime() {
  var timerInterval = setInterval(function () {
    secsLeft--;
    // console.log("It's counting");
    totalSeconds.textContent = "Timer " + secsLeft;

    if ((secsLeft <= 0) || (questionIndex === myQuestions.length)) {
      //If time reaches 0 || questions end then sendMessage()
      clearInterval(timerInterval); //stops the function holding timerInterval
      sendMessage();
    }
  }, 1000); //set how fast to countdown
}

function sendMessage() {
  totalSeconds.textContent = "Timer " + secsLeft;
  quiz.textContent = "";
  var newEl = document.createElement("p");
  newEl.textContent = "Game Over";
  quiz.appendChild(newEl);
}

function checkPlayerAnswer(e) {
  var playerAnswer = e.target.textContent;
  // console.log(playerAnswer);
    if (playerAnswer === myQuestions[questionIndex].correctAnswer) {
      secsLeft = secsLeft + 5;
      console.log("timer added 5");
    } else {
        secsLeft = secsLeft - 5;
        console.log("timer minus 5");
    }
    questionIndex++;
    showQuestions();
}

btn.addEventListener("click", function (event) {
  event.preventDefault(); //stops default action
  showQuestions();
  setTime();
  answer.setAttribute("class", "unhide");
  btn.setAttribute("class", "hide");
});

answerBtn.addEventListener("click", checkPlayerAnswer);
