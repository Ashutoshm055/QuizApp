# Quiz Web Application

A dynamic quiz web application where users can answer multiple questions and get a score based on their performance. The quiz comes with smooth background transitions, animated effects, and a custom dialog box to display the results. The questions, options, and answers are configurable in the code, making it easy to create your own quizzes.

## Features

- Multiple-choice questions.
- Smooth background image transitions based on the question index.
- Real-time score calculation.
- Custom dialog box for displaying quiz results.
- Score evaluation based on thresholds (win, average, or lose).
- Dynamic rendering of questions and options from a JavaScript object.
- Previous and Next buttons for easy navigation between questions.
- Maintains the selected answer state while navigating between questions.
- A dissolving effect for background transitions.
  
## Demo

This quiz app can be used to test users' knowledge in various topics. Users navigate through multiple questions, and based on their answers, a score and feedback are provided at the end.

## Technologies Used

- HTML
- CSS (with animations)
- JavaScript

## Getting Started

### Prerequisites

To run this project, you only need a modern web browser (Chrome, Firefox, etc.).

### Installation

1. Clone the repository or download the zip file.
   ```bash
   git clone https://github.com/Ashutoshm055/QuizApp.git
2. Navigate to the project directory.
   ```bash
   cd quiz-app

4. Open the index.html file in a browser to view the quiz.


### Project Structure

    |-- images/
    |   |-- img1.jpg
    |   |-- img2.jpg
    |   |-- img3.jpg
    |  |-- img4.jpg
    |   |-- img5.jpg
    |   |-- img6.jpg
    |   |-- img7.jpg
    |   |-- img8.jpg
    |   |-- img9.jpg
    |   |-- img10.jpg
    |
    |-- css/
    |   |-- styles.css
    |
    |-- js/
    |   |-- script.js
    |
    |-- index.html
    |-- README.md


## How to Use

  1. Open the index.html file in your browser.
  2. The quiz starts with the first question and a background image.
  3. Use the "Next" and "Previous" buttons to navigate between questions.
  4. Select an answer by clicking on the radio buttons.
  5. Once you reach the last question, click "Submit" to view your score.
  6. A custom dialog box will appear displaying your result and whether you won, lost, or had an average score.

### Customizing the Quiz
You can easily customize the quiz by modifying the quizData object in the script.js file. Here's an example

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
      ...
      ]
    };

To add more questions, simply append them to the questions array in the same format.

### Background Transitions
  The background changes dynamically based on the question index. Background images are named img1.jpg to img10.jpg and stored in the images/ folder. You can replace these images with your own, as long as they follow the same naming convention.

### Result Evaluation

The result is shown based on the user's score:
  Less than 30%: Lose
  Between 30% and 80%: Average
  More than 80%: Win
This logic can be found in the submitButton click handler inside the script.js file.

### Custom Dialog Box
 A custom dialog box is shown at the end of the quiz displaying the user's score and result (win, average, lose). If the user clicks "OK", they are redirected to a specified URL, and the history of the webpage is cleared.
Example Code for Custom Dialog and Redirection

    if (confirm('Quiz Submitted! You scored ' + score + ' out of ' + quizData.questions.length + '.\n' + resultMessage)) {
      window.location.replace('https://www.example.com'); // Redirect to a specific URL
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function () {
          window.history.go(1); // Prevents going back to the quiz
      };
    }
## Contributing
Feel free to submit pull requests to enhance the project or fix issues. All contributions are welcome!
