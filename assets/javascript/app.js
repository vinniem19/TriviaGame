// Pseudocoding for Trivia Game

// Possible variables:  q1-q5, correct and incorrect answers for each question,
//                      timer, picture associated with correct ans., start button,
//                      For End Display: correctCount, incorrectCount, unansweredCount,
//                      StartOver button.
var incorrectAnswers = [ ];
var correctAnswerImages = [
  "../images/BookofGospels.jpg",
  "../images/priestChasuble.jpeg",
  "../images/pentecostSunday.jpg",
  "../images/saintAnthony.jpg"
]

console.log(correctAnswerImages[0]);
// var timer = 30;
var correctCount=0;
var incorrectCount=0;
var unansweredCount=0;

// A function to start the game.
function startGame() {
  $("#question-asked").show();
  $("#answers-area").hide();
  
  }

// 1. In this trivia game, we have to press start to load.
var startButton = document.createElement("h2");
var buttonText = "Start Game";
startButton.append(buttonText);
$(".start-button").append(startButton);
$("#timer-area").hide();
$(".start-button").on("click", 





// My function to start the timer
function timer(){
  $("#timer-area").show();

  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('count-seconds').innerHTML=' 00:'+sec;
      sec--;
      if (sec < 10) {
        $("#count-seconds").html("00:0" + sec);
      }
      if (sec === 0) {
          clearInterval(timer);
      }
  }, 1000);
  // This hides the start button, because 
  // we shouldn't see it until game reset
  $(".start-button").hide();

  // Here we show our 1st question and possible answers
  $("#question-asked").show();
  $("#answers-area").show();
  for (var i = 0; i < 4; i++) {
  var divAnsOne = $("<div>");
  $("#answers-area").append(divAnsOne);
  divAnsOne.html("<h2>" + quizQuestionsAnswers.answer[i] + "</h2>");
  
}
});
// 2. First, the player is shown a question with 4 possible answers below.

var quizQuestionsAnswers = 
      
        {
          question : "What is the name of the book the priest reads the Gospel from?",
          answer : ["Book of Gospels", "Missal", "Hymnal", "Bulletin"]
        }
    
    console.log(quizQuestionsAnswers.question);
    console.log(quizQuestionsAnswers.answer); 
    
var questionTwo =

        {
          q2: "What is the name of the large, colored vestment the priest wears during Mass?",
          a2: "chasable",
          ia2 : ["gown", "cloak", "white collar"]
        }

        console.log(questionTwo["q2"]);
        console.log(questionTwo["a2"]);

var questionThree =

        {
          q3: "How many days after Easter does Pentecost occur?",
          a3: "50 days",
          ia3: ["100 days", "", "40 days", "25 days"]
        }

var questionFour = 

        {
          q4: "Which Saint do we ask for help when we have lost something?",
          a4: "Anthony",
          ia4: ["Paul", "Luke", "Francis"]
        }

var questionFive =

        {
          q5: "Which prayer is not a part of the rosary?",
          a5: "St Michael Prayer",
          ia5: ["Our Father", "Hail Mary", "Glory Be"]
        }

        
        $("#question-asked").hide();
        $("#answers-area").hide();
        $("#question-asked").html("<h3>" + quizQuestionsAnswers.question + "</h3>");
        
        

        $("#answers-area").on("click", function(){
          console.log("good answer!");
        });



        //$("#question-asked").hide();
     /*
        {
          questionTwo: "",
          choicesTwo: ["", ],
          answerTwo: 0
        },
      
        {
          questionThree: "",
          choicesThree: [],
          answerThree: 1
        },
        
        {
          questionFour: "",
          choicesFour: [],
          answerFour: 1
        },

        {
            questionFive: "",
            choicesFive: [, ""],
            answerFive: 3
          }
          */


      
      

// 3. The timer starts its countdown for this question (roughly 30 sec.)
/*
         // This is one timer that worked

function startTimer(duration, display) {
  var timer = duration, seconds;
  setInterval(function () {
      
      seconds = parseInt(timer % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = seconds;

      if (--timer < 0) {
          timer = duration;
      }
    }, 1000);
}

window.onload = function () {
//this is where you can modify the time amount.
  var thirtySeconds = 30;
      display = document.querySelector('#count-seconds');
  startTimer(thirtySeconds, display);
};
*/


//      --The timer resets to 30 sec for each question

// 4. Each answer is clickable

// 5. Player chooses an answer and clicks, (we will probably need an on click function here)

//      --answers become hidden/invisible/not shown
//      --if the correct answer is chosen, Correct is displayed 
//      --we also see a statement "The correct ans is:" as well as an animated pic (possibly Bootstrap card)
//      --correct answer and pic are displayed 5-10 sec and move automatically to next question

//      --if incorrect answer is chosen, Incorrect is displayed
//      --same as correct answer chosen

// 6. If timer reaches 0 before an answer is selected, same as incorrect answer chosen

// 7. After all questions guessed, end game
//      --we have a display of correct # / incorrect # / unanswered
//      --a start over button appears
//      --after click, resets game to begin again





