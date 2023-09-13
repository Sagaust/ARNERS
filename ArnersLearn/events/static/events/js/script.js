// Add your JavaScript code here
// events/static/events/js/script.js

function toggleEventDetails(id) {
    var x = document.getElementById("eventDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
