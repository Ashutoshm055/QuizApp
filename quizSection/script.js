const questionTitle = document.querySelector(".question-title");
const answerList = document.querySelector(".answer-list");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const submitButton = document.querySelector(".submit-btn");
const questionContainer = document.querySelector(".question-container");
let currentQuestionIndex = 0;
const dialog = document.getElementById("customDialog");
const dialogMessage = document.getElementById("dialogMessage");
const closeDialogButton = document.getElementById("closeDialog");

const quizData = {
        title: "Cooking and Food & Drink Quiz",
        questions: [
          {
            question: "1. What is the main ingredient in a traditional Italian pesto sauce?",
            options: ["Basil", "Parsley", "Spinach", "Cilantro"],
            correctAnswer: "Basil"
          },
          {
            question: "2. Which fruit is used to make guacamole?",
            options: ["Tomato", "Avocado", "Mango", "Papaya"],
            correctAnswer: "Avocado"
          },
          {
            question: "3. What is the alcoholic component of a traditional Margarita?",
            options: ["Vodka", "Rum", "Tequila", "Gin"],
            correctAnswer: "Tequila"
          },
          {
            question: "4. Which type of pasta is shaped like a bow tie?",
            options: ["Penne", "Fusilli", "Farfalle", "Linguine"],
            correctAnswer: "Farfalle"
          },
          {
            question: "5. What is the primary flavoring ingredient in the liqueur Cointreau?",
            options: ["Cherry", "Almond", "Orange", "Lemon"],
            correctAnswer: "Orange"
          },
          {
            question: "6. Which of the following is a type of fermented milk drink originating from the Caucasus region?",
            options: ["Buttermilk", "Kefir", "Yogurt", "Lassi"],
            correctAnswer: "Kefir"
          },
          {
            question: "7. What is the name of the Japanese dish consisting of thinly sliced raw fish?",
            options: ["Sashimi", "Sushi", "Tempura", "Ramen"],
            correctAnswer: "Sashimi"
          },
          {
            question: "8. Which spice is known as 'the queen of spices'?",
            options: ["Cinnamon", "Black Pepper", "Cardamom", "Turmeric"],
            correctAnswer: "Cardamom"
          },
          {
            question: "9. What is the name of the traditional French stew made with beef braised in red wine?",
            options: ["Ratatouille", "Coq au Vin", "Bouillabaisse", "Beef Bourguignon"],
            correctAnswer: "Beef Bourguignon"
          },
          {
            question: "10. What is a common ingredient in a traditional Greek tzatziki sauce?",
            options: ["Tomato", "Cucumber", "Olive", "Pepper"],
            correctAnswer: "Cucumber"
          }
        ]
  };
  
  let userAnswers = new Array(quizData.questions.length).fill(null);  


  function loadQuestion() {

    questionContainer.classList.add("fade-out");
    changeBackground(currentQuestionIndex);
  
  setTimeout(() => {

    const currentQuestion = quizData.questions[currentQuestionIndex];
  

    questionTitle.textContent = currentQuestion.question;
  

    answerList.innerHTML = "";
  

    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.className = "answer-option";
      li.innerHTML = `
        <input type="radio" name="answer" id="answer${index}" value="${option}">
        <label for="answer${index}">${option}</label>
      `;
      answerList.appendChild(li);

      if (userAnswers[currentQuestionIndex] === option) {
        li.querySelector('input[type="radio"]').checked = true;
    }
    });
  

    prevButton.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === quizData.questions.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }

    questionContainer.classList.remove("fade-out");
    questionContainer.classList.add("fade-in");

    setTimeout(() => {
        questionContainer.classList.remove("fade-in");
    }, 500);

  }, 500); 
}



//   loadQuestion();
  
function saveAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = selectedOption.value;
    } 
}

function checkAnswers() {
    let correctAnswersCount = 0;

    quizData.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswersCount++;
        }
    });

    return correctAnswersCount;
}


function showResultDialog(score, totalQuestions) {
    let message = `You scored ${score} out of ${totalQuestions}. `;

    if (score <= 3) {
        message += "You lost the quiz. Try again!";
    } else if (score > 3 && score <= 8) {
        message += "You have an average score.";
    } else {
        message += "Congratulations! You won the quiz!";
    }

    dialogMessage.textContent = message;
    dialog.style.display = "flex";
}

  prevButton.addEventListener("click", () => {
    saveAnswer();
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
    }
  });

  nextButton.addEventListener("click", () => {
    saveAnswer();
    if (currentQuestionIndex < quizData.questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    }
  });
  
  submitButton.addEventListener("click", () => {
    saveAnswer();
    const score = checkAnswers();
    // alert(`Quiz Submitted! You scored ${score} out of ${quizData.questions.length}.`);
    showResultDialog(score, quizData.questions.length);
    // window.location.reload();
  });

  closeDialogButton.addEventListener("click", () => {
    dialog.style.display = "none";
});

  
function clearRadioSelections() {
    const radioButtons = document.querySelectorAll('.quiz-container input[type="radio"]');

    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

clearRadioSelections();


function changeBackground(questionIndex) {
    const newImageUrl = `url('../images/img${questionIndex + 1}.jpg')`;

    const tempDiv = document.createElement('div');
    tempDiv.style.backgroundImage = newImageUrl;
    tempDiv.style.backgroundSize = 'cover';
    tempDiv.style.backgroundPosition = 'center';
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = 0;
    tempDiv.style.left = 0;
    tempDiv.style.width = '100%';
    tempDiv.style.height = '100%';
    tempDiv.style.zIndex = -2; 
    tempDiv.style.opacity = 0; 
    tempDiv.classList.add('dissolve');

    document.body.appendChild(tempDiv);

    setTimeout(() => {
        tempDiv.style.opacity = 1; 
        document.querySelector(".bg").style.opacity = 0; 

        setTimeout(() => {
            document.querySelector(".bg").style.backgroundImage = newImageUrl;
            document.querySelector(".bg").style.opacity = 1; 

            document.body.removeChild(tempDiv);
        }, 500); 

    }, 5); 
}


function showDialogAndRedirect() {
    const userConfirmed = confirm("You have completed the quiz. Click 'OK' to proceed or 'Cancel' to stay on this page.");

    if (userConfirmed) {
        window.location.replace("../index.html"); 
    } else {
        console.log("User chose to stay on the page.");
    }
}

const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", () => {
    showDialogAndRedirect();
});
