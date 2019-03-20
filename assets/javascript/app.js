// Pseudocoding for Trivia Game

// 1. In this trivia game, we have to press start to load.

// 2. First, the player is shown a question with 4 possible answers below.

var questions = 
      
        {
          q1: "What is the name of the book the priest reads the Gospel from?",
          a1: "Book of Gospels"
        }
    
    console.log(questions["q1"]);
    console.log(questions["a1"]);      
     /*
        {
          questionTwo: "What is the name of the large, colored vestment the priest wears during Mass?",
          choicesTwo: ["chasable", "gown", "cloak", "white collar"],
          answerTwo: 0
        },
      
        {
          questionThree: "How many days after Easter does Pentecost occur",
          choicesThree: ["100 days", "50 days", "40 days", "25 days"],
          answerThree: 1
        },
        
        {
          questionFour: "Which Saint do we ask for help when we have lost something?",
          choicesFour: ["Paul", "Anthony", "Luke", "Francis"],
          answerFour: 1
        },

        {
            questionFive: "Which prayer is not a part of the rosary?",
            choicesFive: ["Our Father", "Hail Mary", "Glory Be", "St Michael Prayer"],
            answerFive: 3
          }
          */
      
      // This is a for loop for questions
      /*
      for ( var i = 0; i < questions.length; i++ ) {
        var question = questions[i].question;
        console.log(questions);
        }
        */

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

// Possible variables:  q1-q5, correct and incorrect answers for each question,
//                      timer, picture associated with correct ans., start button,
//                      For End Display: correctCount, incorrectCount, unansweredCount,
//                      StartOver button.



