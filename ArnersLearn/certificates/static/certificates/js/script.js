// Add your JavaScript code here
// certificates/static/certificates/js/script.js

function toggleCertificateDetails(id) {
    var x = document.getElementById("certificateDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
