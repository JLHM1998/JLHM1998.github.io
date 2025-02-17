// Google Earth Engine (GEE) location
const geeLocation = {
  region: "Lambayeque",
  country: "Peru",
  description: "The research works were conducted in the Lambayeque region of Peru."
};

console.log(`Research Location: ${geeLocation.region}, ${geeLocation.country}`);
console.log(geeLocation.description);

// Function to initialize Google Maps iframe
function initMap() {
  const mapFrame = document.getElementById('mapFrame');
  mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Lambayeque,Peru`;
}

document.addEventListener('DOMContentLoaded', initMap);