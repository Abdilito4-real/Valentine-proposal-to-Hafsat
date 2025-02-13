
document.getElementById('yesBtn').addEventListener('click', function() {
    const envelope = document.querySelector('.envelope-container');
    envelope.classList.add('show-envelope');

    setTimeout(() => {
        document.querySelector('.envelope-lid').classList.add('open-lid');
        document.querySelector('.letter').classList.add('open-letter');
        document.querySelector('.letter-content').classList.add('show-content');
    }, 500);
});

// Close functionality
document.querySelector('.envelope-container').addEventListener('click', () => {
    document.querySelector('.envelope-container').classList.remove('show-envelope');
});


// Enhanced No button interaction
const noBtn = document.getElementById('noBtn');
const moveButton = () => {
    noBtn.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

// Enhanced Yes button handler
document.getElementById('yesBtn').addEventListener('click', function() {
    // Create celebration confetti
    for(let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }

    // Animate message
    document.querySelector('.message').style.transform = 'scale(1.05)';
    setTimeout(() => {
        document.querySelector('.message').style.transform = 'scale(1)';
    }, 200);

    // Show success message
    alert("You've made me the happiest person! 💌 I'll be there soon with surprises!");
    
    // Send notification
    sendNotification();
});






// Add floating hearts background
function createFloatingHearts() {
    for(let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.textContent = '❤';
        heart.style.animation = `float ${6 + Math.random() * 6}s infinite`;
        heart.style.opacity = '0.7';
        document.body.appendChild(heart);
    }
}

createFloatingHearts();


        // Modified Yes button handler
        document.getElementById('yesBtn').addEventListener('click', function() {
    // Show envelope
    const envelope = document.querySelector('.envelope-container');
    envelope.classList.add('show-envelope');

    // Animate envelope opening
    setTimeout(() => {
        document.querySelector('.envelope-lid').classList.add('open-lid');
        document.querySelector('.letter').classList.add('open-letter');
        document.querySelector('.letter-content').classList.add('show-content');
    }, 500);

    // Create celebration confetti
    for(let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }

    // Remove the alert and email sending code
});

// Close envelope when clicking anywhere
document.querySelector('.envelope-container').addEventListener('click', function() {
    this.classList.remove('show-envelope');
    document.querySelector('.envelope-lid').classList.remove('open-lid');
    document.querySelector('.letter').classList.remove('open-letter');
    document.querySelector('.letter-content').classList.remove('show-content');
});

// Formspree integration
function sendNotification() {
    const form = document.getElementById('valentineForm');
    fetch(form.action, {
        method: 'POST',
        body: new URLSearchParams(new FormData(form)),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            console.error('Formspree submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Consolidated Yes button handler
document.getElementById('yesBtn').addEventListener('click', function() {
    // Show envelope
    const envelope = document.querySelector('.envelope-container');
    envelope.classList.add('show-envelope');

    // Animate elements
    setTimeout(() => {
        document.querySelector('.envelope-lid').classList.add('open-lid');
        document.querySelector('.letter').classList.add('open-letter');
        document.querySelector('.letter-content').classList.add('show-content');
    }, 500);

    // Confetti effect
    const confettiCount = window.innerWidth < 480 ? 80 : 150;
    for(let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }

    // Send notification
    sendNotification();
});