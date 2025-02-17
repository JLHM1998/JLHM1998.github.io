// Dark Mode Toggle
const toggleButton = document.getElementById('toggleDark');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Initialize Map with Leaflet
var map = L.map('map').setView([-6.712, -79.835], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);
// Example Markers
L.marker([-6.712, -79.835]).addTo(map).bindPopup('Lambayeque, Peru');
L.marker([-12.0464, -77.0428]).addTo(map).bindPopup('Lima, Peru');

// Case Study Image Hover Effect
document.querySelectorAll('.case-study').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('img').style.transform = 'scale(1.1)';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('img').style.transform = 'scale(1)';
  });
});

// Form Submission Handler
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Inquiry sent successfully. I will get in touch soon!');
});