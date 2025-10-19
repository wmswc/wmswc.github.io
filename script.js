// SPLASH SCREEN TEXT ROATATION
const splashPhrases = [
    "~$ xdg-open https://wmswc.github.io",
    "~$ echo \"I'm up late talking to that duck!!\"",
    "~$ whoami // W&M Society of Women in Computing",
    "~$ 0 20 * * 2 /home/swc/meet.sh",
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