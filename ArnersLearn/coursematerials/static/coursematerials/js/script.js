// Add your JavaScript code here
// coursematerials/static/coursematerials/js/script.js

function toggleMaterialDetails(id) {
    var x = document.getElementById("materialDetails" + id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
