// Add your JavaScript code here
// announcements/static/announcements/js/script.js

function toggleAnnouncementDetails(id) {
    var x = document.getElementById("announcementDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
