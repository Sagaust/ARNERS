// Add your JavaScript code here
// assignments/static/assignments/js/script.js

function submitAssignment(formId) {
    // AJAX for submitting the assignment
}

function toggleAssignmentDetails(id) {
    var x = document.getElementById("assignmentDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
