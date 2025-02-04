var map;

document.addEventListener("DOMContentLoaded", function () {
    map = new Datamap({
        element: document.getElementById("map-container"),
        scope: "usa",
        responsive: true,

        setProjection: function (element) {
            var projection = d3.geo.albers()
                .center([5, 27])
                .rotate([82, 0])
                .parallels([24, 31])
                .scale(6500)
                .translate([(element.offsetWidth / 2) + 300, (element.offsetHeight / 2) + 150]);

            var path = d3.geo.path().projection(projection);
            return { path: path, projection: projection };
        },

        geographyConfig: {
            highlightBorderColor: "#bada55",
            popupOnHover: true,
            highlightOnHover: true,
            popupTemplate: function (geo, data) {
                if (!data || !data.harvested) {
                    return `<div class="datamaps-hoverover"><strong>${geo.properties.name}</strong><br>No Data</div>`;
                }
                return `<div class="datamaps-hoverover">
                    <strong>${data.name}</strong><br>
                    Alligators Harvested: ${data.harvested}
                </div>`;
            }
        },

        fills: {
            HIGH: "#d62828",
            MEDIUM: "#e76f51",
            LOW: "#f4a261",
            DEFAULT: "#ddd"
        },
        data: {}
    });

    d3.csv("county_gator_counts.csv", function (data) {
        countyData = {};

        data.forEach(row => {
            var county = row["County"].trim().toUpperCase().replace(/\./g, "");
            if (!county.endsWith("COUNTY")) {
                county += " COUNTY";
            }

            var harvested = parseInt(row["Number of Gators"]) || 0;

            countyData[county] = {
                fillKey: harvested > 300 ? "HIGH" : harvested > 100 ? "MEDIUM" : "LOW",
                harvested: harvested
            };
        });

        console.log("Final County Names:", Object.keys(countyData));

        if (map) {
            setTimeout(() => {
                map.updateChoropleth(countyData);
            }, 1000);
        } else {
            console.error("Map failed to initialize.");
        }
    });
});