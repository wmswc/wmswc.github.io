

// MENU BUTTON FOR SMALL SCREENS
function myFunction() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('responsive');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const icon = document.querySelector('.icon');
    
    if (!nav.contains(event.target)) {
        navLinks.classList.remove('responsive');
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.remove('responsive');
    });
});



// SPLASH SCREEN TEXT ROATATION
const splashPhrases = [
    "~$ xdg-open https://wmswc.github.io",
    "~$ echo \"I'm up late talking to that duck!!\"",
    "~$ whoami // W&M Society of Women in Computing",
    "~$ 0 8 * * 2 /home/swc/meet.sh",
    "~$ getent group swc"
];

// Select a random phrase on page load
document.addEventListener('DOMContentLoaded', function() {
    const headerTopContent = document.querySelector('.header-top-content');
    
    if (headerTopContent) {
        const randomIndex = Math.floor(Math.random() * splashPhrases.length);
        headerTopContent.textContent = splashPhrases[randomIndex];
    }
});