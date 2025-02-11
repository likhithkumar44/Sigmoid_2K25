document.addEventListener('DOMContentLoaded', function() {
    // Category switching functionality
    const categoryBtns = document.querySelectorAll('.category-btn');
    const eventSections = document.querySelectorAll('.event-section');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            categoryBtns.forEach(b => b.classList.remove('active'));
            eventSections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });

    // Registration button functionality
    const registerBtns = document.querySelectorAll('.register-btn');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventName = e.target.parentElement.querySelector('h3').textContent;
            // Add your registration logic here
            alert(`Registration for ${eventName} will open soon!`);
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
