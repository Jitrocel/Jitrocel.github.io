// Načtení GeoJSON souboru (předpokládá se, že je umístěn ve stejném adresáři jako HTML soubor)
    function loadGEOJSON(route){
    fetch(route)
        .then(response => response.json())
        .then(data => {
            // Funkce pro vložení dat do tabulky
            function populateTable(features) {
                //const tableBody = document.getElementById('geoTableBody');

                features.forEach(feature => {
                    const geometry = feature.geometry;
                    const coordinates = geometry.coordinates;

                    //const row = document.createElement('tr');
                    //const idCell = document.createElement('td');
                    //const nameCell = document.createElement('td');
                    //const latCell = document.createElement('td');
                    //const lonCell = document.createElement('td');


                    let nazev = [];
                    let x = [];
                    let y = [];

                    nazev = (feature.properties.nazev);
                    x = (coordinates[1]);
                    y = (coordinates[0]);
                    //idCell.textContent = feature.id;
                    //nameCell.textContent = feature.properties.name; // Přidání jména (přizpůsobte podle skutečného názvu vlastnosti)
                    //latCell.textContent = coordinates[1];
                    //lonCell.textContent = coordinates[0];

                    //row.appendChild(idCell);
                    //row.appendChild(nameCell);
                    //row.appendChild(latCell);
                    //row.appendChild(lonCell);

                    //tableBody.appendChild(row);
                });
            }

            // Získání seznamu prvků (bodů) z GeoJSON dat
            const features = data.features;

            // Volání funkce pro vložení dat do tabulky
            populateTable(features);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
    }
    
