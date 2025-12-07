let map = L.map("map").setView([51.14881, 4.45836], 16);
L.tileLayer(
  "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=W5IPosBJACivbW9By6ah",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

let apMarker = L.marker([51.14881, 4.45836]).addTo(map);
apMarker.bindPopup("Ernestjouretlaan 74, 2650 Edegem").openPopup();
