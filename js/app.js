// Background animation with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bgCanvas'),
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0x0EA5E9,
    size: 0.02,
    transparent: true,
    opacity: 0.8
});

const starVertices = [];
for (let i = 0; i < 15000; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    starVertices.push(x, y, z);
}

starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Create space objects
const createSpaceObject = (geometry, material, position, rotation) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    scene.add(mesh);
    return mesh;
};

// Add planet
const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const planetMaterial = new THREE.MeshPhongMaterial({
    color: 0x0EA5E9,
    shininess: 15,
    transparent: true,
    opacity: 0.7
});
const planet = createSpaceObject(planetGeometry, planetMaterial, [4, 1.5, -2], [0, 0, 0]); // Move planet slightly up

// Add rocket
const rocketGeometry = new THREE.ConeGeometry(0.2, 0.5, 32);
const rocketMaterial = new THREE.MeshPhongMaterial({
    color: 0x1EAEDB,
    shininess: 30,
    transparent: true,
    opacity: 0.8
});
const rocket = createSpaceObject(rocketGeometry, rocketMaterial, [-3, -2, -1], [0, 0, Math.PI / 4]); // Move rocket slightly down


// Add ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0x0EA5E9, 1);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

// Animation
function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0002;
    stars.rotation.y += 0.0001;
    
    planet.rotation.y += 0.005;
    rocket.rotation.z += 0.01;
    
    // Mouse interaction
    if (mouseX && mouseY) {
        stars.rotation.x += (mouseY * 0.00005);
        stars.rotation.y += (mouseX * 0.00005);
        planet.rotation.x += (mouseY * 0.00002);
        planet.rotation.y += (mouseX * 0.00002);
    }
    
    renderer.render(scene, camera);
}

// Mouse tracking
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - window.innerWidth / 2;
    mouseY = e.clientY - window.innerHeight / 2;
});

animate();

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    }
});
// Countdown timer
// function updateCountdown() {
//     const targetDate = new Date('2025-03-22').getTime();
//     const now = new Date().getTime();
//     const difference = now - targetDate;
//     if (difference <= 0) {
//         document.getElementById('days').textContent = '00';
//         document.getElementById('hours').textContent = '00';
//         document.getElementById('minutes').textContent = '00';
//         document.getElementById('seconds').textContent = '00';
//         clearInterval(interval); // Stop countdown when it reaches 0
//         return;
//     }
//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     document.getElementById('days').textContent = String(days).padStart(2, '0');
//     document.getElementById('hours').textContent = String(hours).padStart(2, '0');
//     document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
//     document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
// }
// setInterval(updateCountdown, 1000);
// updateCountdown();
// // Handle window resize
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });




// Countdown timer

function updateCountdown() {
    const targetDate = new Date('2025-03-22T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(interval); // Stop countdown
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Call once immediately

// Handle window resize for Three.js (if needed)
window.addEventListener('resize', () => {
    if (typeof camera !== 'undefined' && typeof renderer !== 'undefined') {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});