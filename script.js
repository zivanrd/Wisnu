// DARK MODE
const darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "☀️";
    } else {
        darkModeButton.textContent = "🌙";
    }
});


// TOMBOL AJAKAN
function showMessage() {
    alert(
        "🌱 Yuk mulai dari hal kecil!\n\n" +
        "Buang sampah pada tempatnya, " +
        "jaga kebersihan, dan peduli dengan lingkungan sekitar."
    );
}