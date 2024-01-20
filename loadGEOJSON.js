// Načtení GeoJSON souboru (předpokládá se, že je umístěn ve stejném adresáři jako HTML soubor)
    function loadGEOJSON(route){
    fetch(route)
        .then(response => response.json())
        .then(data => {
            function populateTable(features) {

                features.forEach(feature => {
                    const geometry = feature.geometry;
                    const coordinates = geometry.coordinates;

                    let nazev = [];
                    alert(nazev);
                    let x = [];
                    let y = [];
                    
                    nazev = (features.properties.nazev);
                    x = (coordinates[1]);
                    y = (coordinates[0]);
                    let crd = ("'x':"+x+",'y':"+y);
                    return(crd);
                });
            }
            // Získání seznamu prvků (bodů) z GeoJSON dat
            const features = data.features;
            // Volání funkce pro vložení dat do tabulky
            populateTable(features);
        })
        .catch(error => console.error('Error loading GeoJSON:', error)); 
    }

   


    
