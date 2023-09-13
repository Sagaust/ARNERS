// Add your JavaScript code here
// eventparticipants/static/eventparticipants/js/script.js

function toggleParticipantDetails(id) {
    var x = document.getElementById("participantDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
