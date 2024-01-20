  // Filtrujeme místa v okruhu n km
  let nearbyPlaces = places.filter(place => haversineDistance(selectedPlace, place) <= n);

  // Přidáme body na mapu
  nearbyPlaces.forEach(place => {
    L.marker([place.x, place.y]).addTo(map)
      .bindPopup(place.name)
      .on('click', () => {
        // Aktualizujeme vybrané místo a vzdálenost n
        selectedPlace = place;
        n = n - haversineDistance(selectedPlace, place);
        if (n > 0) {
          drawMarkers();
        }
      })
      .openPopup();
  });
