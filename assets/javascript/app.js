
//@ts-check 

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
          "answersTwo" : ["chasuble", "gown", "cloak", "white collar"],
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
// these are my variables
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
var sec = 31;
var intervalId;
var score = 0;
var highScore;

function showScore() {
  
    $("#score").html("<p>score: " + score + "</p>");
}

showScore();
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
    
    //clearInterval(timer);
    unansweredCount++;
    console.log(unansweredCount);
  
    
    $("#answers-area").html("<h4>Time is up!</h4>");
    $("#answers-area").show();
    $(".correct-ans").hide();
    $("#timer-area").hide();
    $("#correct-ans-image-one").show();
    setTimeout(questionTwo, 3000);
     // } else {
       // setTimeout(questionThree, 3000)
  }
}


// My function to start the 30 sec timer for each question
function timer(){
  clearInterval(intervalId);
  $("#timer-area").show(500);
  sec = 31;
  intervalId = setInterval(decrement, 1000);
  }

  // if the timer reaches 0
  // Where does this go?
        /*
    unansweredCount++;
    $("#answers-area").html("<h4>Time is up!</h4>");
    $("#answers-area").show();
    $(".correct-ans").hide();
    $("#timer-area").hide();
    clearInterval(timer);
    $("#correct-ans-image-one").show();
    setTimeout(nextQuestion, 3000);
      */


  

// These need to stay hidden until start is pressed

  $("#question-area").hide();
  $(".correct-ans").hide();
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
  $(".correct-ans").html("<h2>" + correctAnsOne + "</h2>");
  $(".correct-ans").show();
    
  for (var i = 1; i < 4; i++) {
  var divIncorrectAnsOne = $("<div>");
  divIncorrectAnsOne.addClass("incorrect");
    $("#answers-area").append(divIncorrectAnsOne);
    divIncorrectAnsOne.html("<h2>" + quizQuestionsAnswers.answersOne[i] + "</h2>");
    $("#answers-area").show();
      }
  
// If the correct answeer is clicked
$(".correct-ans").on("click", function(){
  correctCount++;
  score += 5;
  showScore();
  console.log("Correct: " + correctCount);
   $("#answers-area").hide();
  $(".correct-ans").hide();
  $("#timer-area").hide();
  $("#answers-area").html("<h4>Correct!</h4>");
  $("#answers-area").show();  
  $("#correct-ans-image-one").show();
    $("#correct-ans-image-three").hide();
  // clearInterval(timer);
  setTimeout(questionTwo, 3000);
  
  });
  
  // If the incorrect answer is clicked
  $(".incorrect").on("click", function(){
    incorrectCount++;
    $("#answers-area").html("<h4>Wrong Answer!</h4>");
    $("#answers-area").show();
    $(".correct-ans").hide();
    $("#timer-area").hide();
    $("#correct-ans-image-one").show();
    // clearInterval(timer);
    setTimeout(questionTwo, 3000);
    console.log("incorrect: " + incorrectCount);
    
  });

});

    // End of question 1

    // Begin question 2

    function questionTwo() {
      resetQuestion();
      showScore();
      timer();
  $("#question-area").hide();
  $(".correct-ans").hide();
  $("#correct-ans-image-one").hide();
  $("#correct-ans-image-three").hide();
  $("#answers-area").hide();
  $("#question-area").html("<h3>" + quizQuestionsAnswers.question[1] + "</h3>");
  $("#timer-area").show();
  
 
  // Here we show our 2nd question and possible answers
  $("#question-area").show();

  var correctAnsOne = quizQuestionsAnswers.answersTwo[0];
  $("#correct-ans-two").html("<h2>" + correctAnsOne + "</h2>");
  $("#correct-ans-two").show();
    
  for (var i = 1; i < 4; i++) {
  var divIncorrectAnsOne = $("<div>");
  divIncorrectAnsOne.addClass("incorrect");
    $("#answers-area").append(divIncorrectAnsOne);
    divIncorrectAnsOne.html("<h2>" + quizQuestionsAnswers.answersTwo[i] + "</h2>");
    $("#answers-area").show();
      }
  
// If the correct answeer is clicked
$("#correct-ans-two").on("click", function(){
  $("#answers-area").hide();
  $("#correct-ans-two").hide();
  $("#timer-area").hide();
  $("#answers-area").html("<h4>Correct!</h4>");
  $("#answers-area").show();
  $("#correct-ans-image-two").show();
  // clearInterval(timer);
  setTimeout(questionThree, 3000);
  console.log("Correct: " + correctCount);
  score += 5;
  showScore();

});

// If the incorrect answer is clicked
  $(".incorrect").on("click", function(){
    incorrectCount++;
    $("#answers-area").html("<h4>Wrong Answer!</h4>");
    $("#answers-area").show();
    $("#correct-ans-two").hide();
    $("#timer-area").hide();
    $("#correct-ans-image-two").show();
    setTimeout(questionThree, 3000);
    // clearInterval(timer);
    console.log("incorrect: " + incorrectCount)
  });
}
// End question 2

// Begin Question 3
function questionThree() {
  resetQuestion();
      timer();
  $("#correct-ans-image-two").empty();    
  $(".correct-ans").hide();
  $("#correct-ans-image-one").hide();
  $("#correct-ans-image-two").hide();
  $("#correct-ans-image-three").hide();
  $("#answers-area").hide();
  $("#question-area").html("<h3>" + quizQuestionsAnswers.question[2] + "</h3>");
  $("#timer-area").show();
  $("#question-area").show();
var correctAnsOne = quizQuestionsAnswers.answersThree[0];
$(".correct-ans").html("<h2>" + correctAnsOne + "</h2>");
$(".correct-ans").show();
// first incorrect ans for ques 3
var incorrectAnsOne =  quizQuestionsAnswers.answersThree[1];
var incorrectAnsOneDiv = $("<div>");
incorrectAnsOneDiv.addClass("incorrect");
incorrectAnsOneDiv.attr("id", "incorrect-ans-one")
$("#answers-area").append(incorrectAnsOneDiv); 
incorrectAnsOneDiv.html("<h2>" + incorrectAnsOne + "</h2>");
    

var incorrectAnsTwo =  quizQuestionsAnswers.answersThree[2];
var incorrectAnsTwoDiv = $("<div>");
incorrectAnsTwoDiv.addClass("incorrect");
incorrectAnsTwoDiv.attr("id", "incorrect-ans-two");
$(".correct-ans").prepend(incorrectAnsTwoDiv); 
incorrectAnsTwoDiv.html("<h2>" + incorrectAnsTwo + "</h2>");


var incorrectAnsThree =  quizQuestionsAnswers.answersThree[3];
var incorrectAnsThreeDiv = $("<div>");
incorrectAnsThreeDiv.addClass("incorrect");
incorrectAnsTwoDiv.attr("id", "incorrect-ans-three");
$("#answer-area").append(incorrectAnsThreeDiv); 
incorrectAnsThreeDiv.html("<h2>" + incorrectAnsThree + "</h2>");
//display the incorrect answers for ques 3
$("#answers-area").show();
$("#incorrect-ans-one").show();
$("#incorrect-ans-two").show();
$("#incorrect-ans-three").show();

//incorrectAnswersDiv.addClass("incorrect-ans");
//incorrectAnswersDiv.attr("id", "incorrect-ans-one");
//$("#incorrect-ans-one").html("<h2>" + incorrectAnsOne + "</h2>");
//$("#incorrect-ans-one").show();
console.log(incorrectAnsOne);
console.log(incorrectAnsTwo);
console.log(incorrectAnsThree);

// If the correct answeer is clicked
$(".correct-ans").on("click", function(){
  correctCount++;
  $("#correct-ans-two").hide();
  $("#timer-area").hide();
  $("#answers-area").html("<h4>Correct!</h4>");
  $("#answers-area").hide();
  $("#correct-ans-image-three").show();
  // clearInterval(timer);
  setTimeout(displayStats, 3000);
  console.log("Correct: " + correctCount);
    
});

// If the incorrect answer is clicked
$(".incorrect").on("click", function(){
  incorrectCount++;
  $("#answers-area").html("<h4>Wrong Answer!</h4>");
  $("#answers-area").show();
  $(".correct-ans").hide();
  $("#timer-area").hide();
  $("#correct-ans-image-three").show();
  // clearInterval(timer);
  setTimeout(displayStats, 3000);
  console.log("incorrect: " + incorrectCount)
});
}


// End Question 3

     // Function for resetting question
     function resetQuestion() {
       $("#answers-area").empty();
       $("#question-area").empty();
       $(".correct-ans").empty();
       $("#correct-ans-image-one").empty();
       }


// 7. After all questions guessed, end game
//      --we have a display of correct # / incorrect # / unanswered
//      --a start over button appears
//      --after click, resets game to begin again

  
    
  function displayStats() {
  $("#question-area").hide();
  $(".correct-ans").hide();
  $("#timer-area").hide();

  $("#count-seconds").hide();  
  $("#correct-ans-two").hide();
  $("#correct-ans-image-one").hide();
  $("#correct-ans-image-two").hide();
  $("#correct-ans-image-three").hide();
  $("#answers-area").html("<h1>How you did:</h1>");
  $("#answers-area").show();
  $("#stats-area").text("Correct: " + correctCount + "  Incorrect: " + incorrectCount + "  Unanswered: " + unansweredCount);
  $("#stats-area").show();
  // clearInterval(timer);
  clearInterval(intervalId);
}





