document.addEventListener("DOMContentLoaded", function() {
    // Mobile Navbar Toggle
    

    // Form Submission
    document.getElementById("query-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! We will get back to you soon.`);
            this.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
