// Add your JavaScript code here
// participants/static/participants/js/script.js

// Function to toggle visibility of a div with id "moreInfo"
function toggleMoreInfo() {
    var x = document.getElementById("moreInfo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
