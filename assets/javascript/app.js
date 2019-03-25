// Pseudocoding for Trivia Game

// Possible variables:  q1-q5, correct and incorrect answers for each question,
//                      timer, picture associated with correct ans., start button,
//                      For End Display: correctCount, incorrectCount, unansweredCount,
//                      StartOver button.

// My variable for question one.

var quizQuestionsAnswers = 
      
        {
          "question" : ["What is the name of the book the priest reads the Gospel from?",
          "What is the name of the large, colored vestment the priest wears during Mass?",
          "How many days after Easter does Pentecost occur?",
          "Which Saint do we ask for help when we have lost something?",
          "Which prayer is not a part of the rosary?"
        ],
          "answersOne" : ["Book of Gospels", "Missal", "Hymnal", "Bulletin"],
          "answersTwo" : ["chasable", "gown", "cloak", "white collar"],
          "answersThree" : ["50 days", "100 days", "40 days", "25 days"],
          "answersFour"  : ["Anthony", "Paul", "Luke", "Francis"],
          "answersFive"  : ["St Michael Prayer", "Our Father", "Hail Mary", "Glory Be"]
        }

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
var sec=31;
var intervalId;
var clock;

function decrement() {
  
  sec--;
  $("#count-seconds").html(" 00:"+sec);

    if (sec === 10) {
    $("#count-seconds").html("00:" + sec);
  };
  if (sec < 10) {
    $("#count-seconds").html("00:0" + sec);
  };
  if (sec === 0) {
    clearInterval(intervalId);
  }
}

// My function to start the 30 sec timer for each question
function timer(){
  clearInterval(intervalId);
  $("#timer-area").show(500);
  sec = 31;
  intervalId = setInterval(decrement, 1000);
  }

  // Where does this go?
        /*
    unansweredCount++;
    $("#answers-area").html("<h4>Time is up!</h4>");
    $("#answers-area").show();
    $("#correct-ans-one").hide();
    $("#timer-area").hide();
    clearInterval(timer);
    $("#correct-ans-image-one").show();
    setTimeout(nextQuestion, 3000);
      */


  

// These need to stay hidden until start is pressed

  $("#question-area").hide();
  $("#correct-ans-one").hide();
  $("#correct-ans-image-one").hide();
  $("#correct-ans-image-two").hide();
  $("#correct-ans-image-three").hide();
  $("#answers-area").hide();
  $("#question-area").html("<h3>" + quizQuestionsAnswers.question[0] + "</h3>");

// 1. In this trivia game, we have to press start to load.

  //This is the start button
var startButton = document.createElement("h2");
var buttonText = "Start Game";
startButton.append(buttonText);
$(".start-button").append(startButton);
$("#timer-area").hide();
  // Here is what makes the button clickable
$(".start-button").on("click", function() {

  // This hides the start button, because 
  // we shouldn't see it until game reset
  $(".start-button").hide();

  // Run the timer function
  timer();

// 2. First, the player is shown a question with 4 possible answers below.
  $("#question-area").show();
  var correctAnsOne = quizQuestionsAnswers.answersOne[0];
  $("#correct-ans-one").html("<h2>" + correctAnsOne + "</h2>");
  $("#correct-ans-one").show();
    
  for (var i = 1; i < 4; i++) {
  var divIncorrectAnsOne = $("<div>");
  divIncorrectAnsOne.addClass("incorrect");
    $("#answers-area").append(divIncorrectAnsOne);
    divIncorrectAnsOne.html("<h2>" + quizQuestionsAnswers.answersOne[i] + "</h2>");
    $("#answers-area").show();
      }
  
// If the correct answeer is clicked
$("#correct-ans-one").on("click", function(){
   $("#answers-area").hide();
  $("#correct-ans-one").hide();
  $("#timer-area").hide();
  $("#answers-area").html("<h4>Correct!</h4>");
  $("#answers-area").show();  
  $("#correct-ans-image-one").show();
  clearInterval(timer);
  setTimeout(questionTwo, 3000);
  console.log("Correct: " + correctCount);
  });
  
  // If the incorrect answer is clicked
  $(".incorrect").on("click", function(){
    incorrectCount++;
    $("#answers-area").html("<h4>Wrong Answer!</h4>");
    $("#answers-area").show();
    $("#correct-ans-one").hide();
    $("#timer-area").hide();
    $("#correct-ans-image-one").show();
    clearInterval(timer);
    setTimeout(questionTwo, 3000);
    console.log("incorrect: " + incorrectCount);
    
  });
});

    // End of question 1

    // Begin question 2

    function questionTwo() {
      resetQuestion();
      timer();
  $("#question-area").hide();
  $("#correct-ans-one").hide();
  $("#correct-ans-image-one").hide();
  $("#answers-area").hide();
  $("#question-area").html("<h3>" + quizQuestionsAnswers.question[1] + "</h3>");
  $("#timer-area").show();

/*  
    unansweredCount++;
    $("#answers-area").html("<h4>Time is up!</h4>");
    $("#answers-area").show();
    $("#correct-ans-one").hide();
    $("#timer-area").hide();
    clearInterval(timer);
    $("#correct-ans-image-two").show();
    
      }
  }, 1000);
};
*/
  // Here we show our 2nd question and possible answers
  $("#question-area").show();

  var correctAnsOne = quizQuestionsAnswers.answersTwo[0];
  $("#correct-ans-one").html("<h2>" + correctAnsOne + "</h2>");
  $("#correct-ans-one").show();
    
  for (var i = 1; i < 4; i++) {
  var divIncorrectAnsOne = $("<div>");
  divIncorrectAnsOne.addClass("incorrect");
    $("#answers-area").append(divIncorrectAnsOne);
    divIncorrectAnsOne.html("<h2>" + quizQuestionsAnswers.answersTwo[i] + "</h2>");
    $("#answers-area").show();
      }
  
// If the correct answeer is clicked
$("#correct-ans-one").on("click", function(){
  
  $("#answers-area").hide();
  $("#correct-ans-one").hide();
  $("#timer-area").hide();
  $("#answers-area").html("<h4>Correct!</h4>");
  $("#answers-area").show();
  $("#correct-ans-image-two").show();
  setTimeout(questionThree, 3000);
  console.log("Correct: " + correctCount);

});

// If the incorrect answer is clicked
  $(".incorrect").on("click", function(){
    incorrectCount++;
    $("#answers-area").html("<h4>Wrong Answer!</h4>");
    $("#answers-area").show();
    $("#correct-ans-one").hide();
    $("#timer-area").hide();
    $("#correct-ans-image-two").show();
    setTimeout(questionThree, 3000);
    console.log("incorrect: " + incorrectCount)
  });
}
// End question 2

// Begin Question 3
function questionThree() {
  resetQuestion();
      timer();
  $("#correct-ans-one").hide();
  $("#correct-ans-image-one").hide();
  $("#correct-ans-image-two").hide();
  $("#correct-ans-image-three").hide();
  $("#answers-area").hide();
  $("#question-area").html("<h3>" + quizQuestionsAnswers.question[2] + "</h3>");
  $("#timer-area").show();
  $("#question-area").show();
var correctAnsOne = quizQuestionsAnswers.answersThree[0];
$("#correct-ans-one").html("<h2>" + correctAnsOne + "</h2>");
$("#correct-ans-one").show();
  
for (var i = 1; i < 4; i++) {
var divIncorrectAnsOne = $("<div>");
divIncorrectAnsOne.addClass("incorrect");
  $("#answers-area").append(divIncorrectAnsOne);
  divIncorrectAnsOne.html("<h2>" + quizQuestionsAnswers.answersThree[i] + "</h2>");
  $("#answers-area").show();
    }

// If the correct answeer is clicked
$("#correct-ans-one").on("click", function(){


$("#correct-ans-two").hide();
$("#timer-area").hide();
$("#answers-area").html("<h4>Correct!</h4>");
$("#answers-area").hide();
$("#correct-ans-image-three").show();

console.log("Correct: " + correctCount);

});

// If the incorrect answer is clicked
$(".incorrect").on("click", function(){
  incorrectCount++;
  $("#answers-area").html("<h4>Wrong Answer!</h4>");
  $("#answers-area").show();
  $("#correct-ans-one").hide();
  $("#timer-area").hide();
  $("#correct-ans-image-two").show();
  
  console.log("incorrect: " + incorrectCount)
});
}

// End Question 3


     // Function for resetting question
     function resetQuestion() {
       $("#answers-area").empty();
       $("#question-area").empty();
       $("#correct-ans-one").empty();
       $("#correct-ans-image-one").empty();
            }


// 3. The timer starts its countdown for this question (roughly 30 sec.)


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



function displayStats() {
  $("#question-area").hide();
  $("#correct-ans-one").hide();
  $("#correct-ans-image-one").hide();
        $("#answers-area").hide();
  $("#stats-area").html("<h1>How you did:</h1>" + "<p>Correct: " + correctCount + "</p>" + "<p>Incorrect: " + incorrectCount + "</p>" + "<p>Unanswered: " + unansweredCount + "</p>");

  $("#stats-area").show();
}





