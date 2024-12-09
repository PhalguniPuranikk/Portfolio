// Landing Page Fade-in Effect
document.addEventListener('DOMContentLoaded', () => {
    const landing = document.getElementById('landing');
    setTimeout(() => {
        landing.style.opacity = 1;
    }, 500);
});

// Contact Form Submission and Animation
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate sending a message
        responseMessage.textContent = 'Message Sent! I will get back to you soon.';
        responseMessage.style.color = 'green';
        form.reset();
    } else {
        responseMessage.textContent = 'Please fill in all fields.';
        responseMessage.style.color = 'red';
    }
});

// Animation for skills
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.3}s`;
});
