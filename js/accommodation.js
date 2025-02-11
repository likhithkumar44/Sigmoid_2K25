document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close the menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Animate numbers
function animateNumbers() {
    const numberElements = document.querySelectorAll('.number');

    numberElements.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateNumber = () => {
            if (current < target) {
                current += increment;
                element.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target;
            }
        };

        updateNumber();
    });
}

// Event listeners
window.addEventListener('scroll', reveal);
window.addEventListener('load', () => {
    reveal();

    // Start number animation when stats section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});