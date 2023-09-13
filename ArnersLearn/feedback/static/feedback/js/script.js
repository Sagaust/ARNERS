// Add your JavaScript code here
// feedback/static/feedback/js/script.js

function submitFeedback(formId) {
    // AJAX to submit the feedback
}

function toggleFeedbackDisplay(id) {
    var x = document.getElementById("feedbackDisplay" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
