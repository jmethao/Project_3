// Initialize variables
let sightings = [];

function initMap() {
    const vs = new ol.source.Vector();  

    const heatmapLayer = new ol.layer.Heatmap({
        source: vs,
        radius: 5,
        blur: 10,
        weight: feature => feature.get('weight') || 0.5
    });

    // Assign map to the already declared 'map' variable
    map = new ol.Map({
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

    Papa.parse('inaturalist-alligator-data.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: ({ data }) => {
            sightings = data.filter(s => s.latitude && s.longitude)
                             .map(s => ({ 
                                 lat: s.latitude, 
                                 lon: s.longitude, 
                                 year: new Date(s.observed_on).getFullYear(),
                                 month: new Date(s.observed_on).getMonth() + 1 
                             }));

            // Sort the years
            const sortedYears = [...new Set(sightings.map(s => s.year))].sort((a, b) => a - b);
            const yrRanges = yrranges(sortedYears, 5);
            popYrDropdown(yrRanges);
            popMonthDropdown();  
            allFilters();
            document.getElementById('year-range-dropdown').addEventListener('change', fils);
            document.getElementById('month-dropdown').addEventListener('change', fils);  

            fils(); 
        }
    });

    function yrranges(yrs, size) {
        return yrs.reduce((ranges, year, i) => {
            if (i % size === 0) ranges.push(`${year}-${yrs[Math.min(i + size - 1, yrs.length - 1)]}`);
            return ranges;
        }, []);
    }

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

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
            dropdown.appendChild(checkboxContainer);
        });
    }

    // Create checkbox for months
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

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
            dropdown.appendChild(checkboxContainer);
        });
    }

    function allFilters() {
        document.querySelectorAll('#year-range-dropdown input, #month-dropdown input').forEach(checkbox => checkbox.checked = true);
    }

    function fils() {
        const selectedYears = Array.from(document.querySelectorAll('#year-range-dropdown input:checked')).map(checkbox => checkbox.value);
        const selectedMonths = Array.from(document.querySelectorAll('#month-dropdown input:checked')).map(checkbox => parseInt(checkbox.value));

        const filteredSightings = sightings.filter(s => {
            return selectedYears.some(range => {
                const [start, end] = range.split('-').map(Number);
                return s.year >= start && s.year <= end;
            }) &&
            selectedMonths.includes(s.month);  
        });

        updHeatmap(filteredSightings);
    }

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

window.onload = initMap;
