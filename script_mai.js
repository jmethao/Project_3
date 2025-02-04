// Initialize variables
let sightings = [];

// Wait until the DOM is fully loaded before running any code
document.addEventListener("DOMContentLoaded", function() {
    
    // Initialize the map
    initMap();

    // Define the initMap function
    function initMap() {
        const vs = new ol.source.Vector();  

        const heatmapLayer = new ol.layer.Heatmap({
            source: vs,
            radius: 5,
            blur: 10,
            weight: feature => feature.get('weight') || 0.5
        });

        const map = new ol.Map({
            layers: [
                new ol.layer.Tile({ source: new ol.source.OSM() }), 
                heatmapLayer
            ],
            target: 'map',
            view: new ol.View({
                center: ol.proj.fromLonLat([-90, 30]),
                zoom: 6
            })
        });

        // Load the data from CSV and process it
        Papa.parse('inaturalist-alligator-data.csv', {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: ({ data }) => {
                sightings = data
                    .filter(({ latitude, longitude }) => latitude && longitude)
                    .map(({ latitude, longitude, observed_on }) => ({
                        lat: latitude,
                        lon: longitude,
                        year: new Date(observed_on).getFullYear(),
                        month: new Date(observed_on).getMonth() + 1
                    }));

                // Sort the years
                const sortedYears = [...new Set(sightings.map(({ year }) => year))].sort((a, b) => a - b);
                const yrRanges = yrranges(sortedYears, 5);
                popYrDropdown(yrRanges);
                popMonthDropdown();  
                allFilters();
                document.getElementById('year-range-dropdown').addEventListener('change', fils);
                document.getElementById('month-dropdown').addEventListener('change', fils);  

                fils();
            }
        });

        // Function to create year ranges
        function yrranges(yrs, size) {
            return yrs
                .map((year, i) => (i % size === 0) ? `${year}-${yrs[Math.min(i + size - 1, yrs.length - 1)]}` : null)
                .filter(Boolean);
        }

        // Populate the year dropdown with checkboxes
        function popYrDropdown(ranges) {
            const dropdown = document.getElementById('year-range-dropdown');
            ranges.forEach(range => {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'checkbox-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = range;
                checkbox.id = range;
                checkbox.checked = true;

                const label = document.createElement('label');
                label.setAttribute('for', range);
                label.textContent = range;

                checkboxContainer.append(checkbox, label);
                dropdown.appendChild(checkboxContainer);
            });
        }

        // Populate the month dropdown with checkboxes
        function popMonthDropdown() {
            const dropdown = document.getElementById('month-dropdown');  
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'
            ];

            // Clear any existing options before adding new ones
            dropdown.innerHTML = '';

            months.forEach((month, index) => {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'checkbox-item';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = index + 1;  
                checkbox.id = month;
                checkbox.checked = true;

                const label = document.createElement('label');
                label.setAttribute('for', month);
                label.textContent = month;

                checkboxContainer.append(checkbox, label);
                dropdown.appendChild(checkboxContainer);
            });
        }

        // Function to ensure all checkboxes are selected when opening the website
        function allFilters() {
            document.querySelectorAll('#year-range-dropdown input, #month-dropdown input').forEach(checkbox => checkbox.checked = true);
        }

        // Function to filter the sightings based on the selected years and months
        function fils() {
            const selectedYears = Array.from(document.querySelectorAll('#year-range-dropdown input:checked'))
                .map(checkbox => checkbox.value);
            const selectedMonths = Array.from(document.querySelectorAll('#month-dropdown input:checked'))
                .map(checkbox => parseInt(checkbox.value));

            const filteredSightings = sightings.filter(({ year, month }) => 
                selectedYears.some(range => {
                    const [start, end] = range.split('-').map(Number);
                    return year >= start && year <= end;
                }) && selectedMonths.includes(month)
            );

            updHeatmap(filteredSightings);
        }

        // Function to update the heatmap with filtered sightings
        function updHeatmap(filteredSightings) {
            vs.clear();
            const counts = filteredSightings.reduce((acc, { lat, lon }) => {
                const key = `${lat},${lon}`;
                acc[key] = (acc[key] || 0) + 1;
                return acc;
            }, {});

            filteredSightings.forEach(({ lat, lon }) => {
                const coords = ol.proj.fromLonLat([lon, lat]);
                vs.addFeature(new ol.Feature({
                    geometry: new ol.geom.Point(coords),
                    weight: Math.min(0.5, counts[`${lat},${lon}`] / 10)
                }));
            });
        }
    }
});
