// Modo Oscuro
const toggleButton = document.getElementById('toggleDark');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode')
    ? 'Modo Claro'
    : 'Modo Oscuro';
});

// Inicializar Mapa con Leaflet
var map = L.map('map').setView([-6.712, -79.835], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

// Marcadores de ejemplo
L.marker([-6.712, -79.835]).addTo(map).bindPopup('Lambayeque, Perú');
L.marker([-12.0464, -77.0428]).addTo(map).bindPopup('Lima, Perú');

// Efecto de Hover para Imágenes en Estudios de Caso
document.querySelectorAll('.case-study').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('img').style.transform = 'scale(1.1)';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('img').style.transform = 'scale(1)';
  });
});

// Manejador de Envío del Formulario de Contacto
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Consulta enviada exitosamente! Me pondré en contacto contigo pronto.');
});
