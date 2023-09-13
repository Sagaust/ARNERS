// Add your JavaScript code here
// courses/static/courses/js/script.js

// Function to filter courses based on search query
function filterCourses() {
    var input = document.getElementById('courseSearch');
    var filter = input.value.toUpperCase();
    var cards = document.getElementsByClassName('course-card');

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].getElementsByClassName('course-title')[0];
        if (title) {
            var txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
            } else {
                cards[i].style.display = "none";
            }
        }
    }
}
