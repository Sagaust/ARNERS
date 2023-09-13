// Add your JavaScript code here
// masterclass/static/masterclass/js/script.js

function toggleMasterclassDetails(id) {
    var x = document.getElementById("masterclassDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
