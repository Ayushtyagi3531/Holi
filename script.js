document.querySelector('.splash-button').addEventListener('click', () => {
    // Generate a random position for the color splashes
    for (let i = 0; i < 5; i++) {
        let splash = document.createElement('div');
        splash.classList.add('color-splash');
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        splash.style.left = `${x}px`;
        splash.style.top = `${y}px`;
        document.body.appendChild(splash);
    }

    // Create Confetti Effect
    createConfetti();

    // Show the special message after the button click
    let specialMessage = document.getElementById('specialMessage');
    specialMessage.style.display = 'block';
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.opacity = 1;
        confetti.style.animation = `confetti 3s ease-out forwards`;
        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#FF69B4', '#FFD700', '#00BFFF', '#32CD32', '#FF6347'];
    return colors[Math.floor(Math.random() * colors.length)];
}
