document.addEventListener("DOMContentLoaded", () => {
    /** 🏆 Tech Team Members */
    const techMembers = [
        { 
            name: "      Gowtham Sree", 
            role: "Developer", 
            img: "./images/gowtham2.jpg", 
            instagram: "https://www.instagram.com/gowtham__2303/", 
            email: "johndoe@example.com" 
        },
        { 
            name: "Likhith Kumar", 
            role: "Frontend Engineer", 
            img: "./images/likhith.jpg", 
            instagram: "https://www.instagram.com/likhith_kumar__p/", 
            email: "likhithkumar44@gmail.com" 
        }
    ];

    /** 🎭 Technical Event Coordinators */
    const eventCoordinators = [
        { 
            name: "Michael Brown", 
            event: "AI Hackathon", 
            role: "Head Coordinator", 
            contact: "+91 12345 67890" 
        },
        { 
            name: "Emily White", 
            event: "Cyber Security", 
            role: "Event Manager", 
            contact: "+91 98765 43210" 
        },
        { name: "Olivia Green", event: "Blockchain Summit", role: "Coordinator", contact: "+91 87654 32109" },
        { name: "Ethan Adams", event: "Cloud Computing", role: "Lead Organizer", contact: "+91 76543 21098" },
        { name: "Sophia Patel", event: "Data Science Challenge", role: "Event Head", contact: "+91 65432 10987" },
        { name: "Daniel Carter", event: "IoT Conference", role: "Assistant Coordinator", contact: "+91 54321 09876" }
    ];

    /** 🎨 Non-Tech Members */
    const nonTechMembers = [
        { name: "Sarah Lee", role: "Logistics Manager" },
        { name: "David Wilson", role: "Marketing Lead" },
        { name: "Emma Davis", role: "Sponsorship Manager" },
        { name: "Ryan Thomas", role: "Operations Head" },
        { name: "Jessica Brown", role: "Finance Lead" },
        { name: "William Scott", role: "Creative Director" },
        { name: "Mia Anderson", role: "Volunteer Coordinator" }
    ];

    /** 🏨 Accommodation Team */
    const accommodationMembers = [
        { name: "Sophia Martin", role: "Hostel Coordinator" },
        { name: "Chris Evans", role: "Guest House Manager" },
        { name: "Liam Harris", role: "Room Allocation Manager" },
        { name: "Ava Moore", role: "Transport Coordinator" }
    ];

    /** 📌 Function to Create Member Cards */
    function createTeamCard(member, isTech = false, isCoordinator = false) {
        const card = document.createElement("div");
        card.classList.add("team-card");

        let content = `<h3>${member.name}</h3><p>${member.role}</p>`;

        // Add event name for coordinators
        if (isCoordinator) {
            content += `<p><strong>🎯 ${member.event}</strong></p>`;
            content += `<p>📞 ${member.contact}</p>`;
        }

        // Add profile picture & social links for tech team
        if (isTech && member.img) {
            content = `
                <img src="${member.img}" alt="${member.name}">
                ${content}
                <div class="social-links">
                    <a class="social" href="mailto:${member.email}" target="_blank">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z" fill="white"></path> <path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"></path> <path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"></path> <path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z" fill="#34A853"></path> <path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"></path> <path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z" fill="#C5221F"></path> <path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"></path> <path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z" fill="#4285F4"></path> </g></svg>
                    </a>
                    <a class="social" href="${member.instagram}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" id="instagram" style="width: 100%; height: 100%;">
                            <defs>
                                <radialGradient id="a" cx="6.601" cy="99.766" r="129.502" gradientUnits="userSpaceOnUse">
                                    <stop offset=".09" stop-color="#fa8f21"></stop>
                                    <stop offset=".78" stop-color="#d82d7e"></stop>
                                </radialGradient>
                                <radialGradient id="b" cx="70.652" cy="96.49" r="113.963" gradientUnits="userSpaceOnUse">
                                    <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#8c3aaa"></stop>
                                </radialGradient>
                            </defs>
                            <path fill="url(#a)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                            <path fill="url(#b)" d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"></path>
                            <path fill="#fff" d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229" transform="translate(-422.637 -426.196)"></path>
                        </svg>
                    </a>
                </div>
            `;
        }

        card.innerHTML = content;
        return card;
    }

    /** 🎯 Populate Team Sections */
    function populateTeam(containerId, members, isTech = false, isCoordinator = false) {
        const container = document.getElementById(containerId);
        if (container) {
            members.forEach(member => container.appendChild(createTeamCard(member, isTech, isCoordinator)));
        }
    }

    populateTeam("tech-members", techMembers, true);
    populateTeam("event-coordinators", eventCoordinators, false, true);
    populateTeam("non-tech-members", nonTechMembers);
    populateTeam("accommodation-members", accommodationMembers);
});

/** 🍔 Mobile Navbar Functionality */
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbarNav = document.querySelector(".navbar-nav");

    if (hamburger && navbarNav) {
        hamburger.addEventListener("click", () => {
            navbarNav.classList.toggle("nav-active");
            hamburger.classList.toggle("is-active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navbarNav.classList.remove("nav-active");
                hamburger.classList.remove("is-active");
            });
        });
    }
});
