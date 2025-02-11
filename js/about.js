

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

    // Start number animation when numbers section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });

    const numbersSection = document.querySelector('.numbers-section');
    if (numbersSection) {
        observer.observe(numbersSection);
    }
});
