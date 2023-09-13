// Add your JavaScript code here
// instructors/static/instructors/js/script.js

function toggleInstructorDetails(id) {
    var x = document.getElementById("instructorDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
