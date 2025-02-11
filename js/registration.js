
// Reveal Animation on Scroll
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



// Event Listeners
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Register Button Click Handler
document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', function() {
        const passType = this.closest('.pass-card').querySelector('.pass-type').textContent;
        // You can add your registration logic here
        console.log(`Registration clicked for ${passType}`);
    });
});



// Audio

let soundButton = document.querySelector('.sound-btn'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused');
	audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play();
}

window.onblur = function () {
	audio.pause();
}
