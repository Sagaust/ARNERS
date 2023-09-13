// Add your JavaScript code here
// masterclassparticipants/static/masterclassparticipants/js/script.js

function toggleMasterclassParticipantDetails(id) {
    var x = document.getElementById("masterclassParticipantDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
