
const themeToggle = document.getElementById("themeToggle");
const typingText = document.getElementById("typingText");
const backToTop = document.getElementById("backToTop");

// 1. Light / Dark Mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});

// 2. Typing Animation
const words = ["CS Student", "AI Enthusiast", "Future AI Engineer"];
let wordIndex = 0;

setInterval(function () {
    wordIndex = (wordIndex + 1) % words.length;
    typingText.textContent = words[wordIndex];
}, 2000);

// 4. Back to Top
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
