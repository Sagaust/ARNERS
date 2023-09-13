// Add your JavaScript code here
// quizzes/static/quizzes/js/script.js

function submitQuiz(formId) {
    // AJAX for submitting the quiz
}

function toggleQuizDetails(id) {
    var x = document.getElementById("quizDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
