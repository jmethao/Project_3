// Initialize the map to the USA only
const map = L.map('map').setView([30, -95], 5); 

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Geocode (latitude, longitude, name)
const attackData = [
    {
        name: "Nancy Becker",
        location: "Hilton Head Island, South Carolina",
        lat: 32.216, 
        lon: -80.752, 
        details: "The victim fell into a pond in a gated community in Hilton Head Island, South Carolina, and was attacked by a nearly 10-foot-long alligator. The victim's body was found being guarded by the alligator and was later recovered."
    },
    {
        name: "Rose Marie Wiegand",
        location: "Englewood, Florida",
        lat: 26.9805, 
        lon: -82.3483, 
        details: "The victim fell into a pond along a golf course in Englewood, Florida, and was attacked by two alligators."
    },
    {
        name: "Micheal Burstein",
        location: "Myrtle Beach, South Carolina",
        lat: 33.6803, 
        lon: -78.0332, 
        details: "The victim was dragged into a pond in Myrtle Beach, South Carolina. The victim's body was recovered later and a subsequent post-mortem established that Mr Burstein drowned."
    },
    {   name: "Sean McGuinness", 
        location: "Largo, Florida", 
        lat: 27.9093, 
        lon: -82.7766, 
        details: "The victim was attacked while trying to retrieve frisbee golf discs in the lake at John S. Taylor Park in Largo, Florida. Police believed McGuinness had entered the lake during nighttime hours." 
    },
    {   name: "Timothy Satterlee", 
        location: "Slidell, Louisiana", 
        lat: 30.2712, 
        lon: -89.7818, 
        details: "The victim was attacked in floodwaters of Hurricane Ida near the city of Slidell, Louisiana. The attack was witnessed by the victim's wife." 
    },
    {   name: "Cynthia Covert", 
        location: "Kiawah Island, South Carolina", 
        lat: 32.5924, 
        lon: -80.1294, 
        details: "The victim was pulled under and drowned by an alligator in a pond behind a home near Salt Cedar Lane, Kiawah Island, South Carolina." 
    },
    {   name: "Cassandra Cline", 
        location: "Hilton Head Island, South Carolina", 
        lat: 32.216, 
        lon: -80.752, 
        details: "Dragged to her death while walking her dog near a golf course in the gated community of Sea Pines in Hilton Head, South Carolina." 
    },
    {   name: "Shizuka Matsuki", 
        location: "Davie, Florida", 
        lat: 26.0713, 
        lon: -80.2542, 
        details: "Dragged to her death and dismembered while walking dogs at the Silver Lake Rotary Nature Park in Davie, Florida." 
    },
    {   name: "Bonnie Walker", 
        location: "Charleston, South Carolina", 
        lat: 32.7765, 
        lon: -79.9311, 
        details: "Walker's body was found in a retention pond near Brookdale Senior Living Center in Charleston, South Carolina. The cause of death was consistent with an alligator attack." 
    },
    {   name: "Lane Graves", 
        location: "Lake Buena Vista, Florida", 
        lat: 28.3715, 
        lon: -81.5494, 
        details: "An alligator dragged the victim under water in the Seven Seas Lagoon at Disney's Grand Floridian Resort & Spa." 
    },
    {   name: "Richard Zachary Taylor", 
        location: "Lakeland, Florida", 
        lat: 28.0392, 
        lon: -81.9498, 
        details: "Police recovered Taylor's body after a report of an alligator with a body in its mouth near Lake Hunter in Lakeland, Florida." 
    },
    {   name: "Matthew Riggins", 
        location: "Micco, Florida", 
        lat: 27.8416, 
        lon: -80.5604, 
        details: "A police dive team found the victim's body in a pond in Micco, Florida, after he had been reported missing. He had been attacked by an 11-foot alligator." 
    },
    {   name: "James Okkerse", 
        location: "Orange City, Florida", 
        lat: 28.9998, 
        lon: -81.3134, 
        details: "Okkerse was killed while swimming by a 12-foot alligator at Blue Spring State Park near Orange City, Florida." 
    },
    {   name: "Tommie Woodward", 
        location: "Orange, Texas", 
        lat: 30.0919, 
        lon: -93.7934, 
        details: "Woodward mocked an alligator at Burkarts Marina, jumped into the water, and was immediately pulled underwater by an 11-foot alligator." 
    },
    {   name: "Justo Padron", 
        location: "Miami, Florida", 
        lat: 25.7115, 
        lon: -80.3802, 
        details: "A man fleeing police by jumping into a retention pond near the Miccosukee Resort and Convention Center was killed by an alligator." 
    },
    {   name: "Gwen Williams", 
        location: "Skidaway Island, Georgia", 
        lat: 31.9956, 
        lon: -81.0402, 
        details: "A Canadian woman who had been house-sitting for her daughter was killed by an 8-foot alligator while floating in a lagoon behind her daughter's house." 
    },
    {   name: "Annemarie Campbell", 
        location: "Ocala, Florida", 
        lat: 29.1980, 
        lon: -81.6355, 
        details: "Her body was pulled out of an alligator's mouth while snorkeling at Juniper Wayside Park in Ocala National Forest." 
    },
    {   name: "Judy W. Cooper", 
        location: "Oldsmar, Florida", 
        lat: 28.0557, 
        lon: -82.6938, 
        details: "Her body was found in a canal near Oldsmar, Florida. Preliminary autopsy results indicated a fatal alligator attack." 
    },
    {   name: "Yovy Suarez Jiménez", 
        location: "Sunrise, Florida", 
        lat: 26.1333, 
        lon: -80.2330, 
        details: "Her dismembered body was found in a canal after being killed by an alligator while jogging." 
    },
    {   name: "Kevin Albert Murray", 
        location: "Port Charlotte, Florida", 
        lat: 27.0120, 
        lon: -82.1298, 
        details: "He was killed while swimming in the Apollo Waterway by a 12-foot alligator." 
    },
    {   name: "Don Owen", 
        location: "Lakeland, Florida", 
        lat: 28.0392, 
        lon: -81.9498, 
        details: "Fishermen discovered Owen's body 12 miles from his Lakeland home. He had been missing since March 9." 
    },
    {   name: "Michelle Reeves", 
        location: "Lee County, Florida", 
        lat: 26.5476, 
        lon: -81.8580, 
        details: "She was killed by a 7' 11\" alligator while swimming in a retention pond at Lee Memorial Health Park." 
    },
    {   name: "Janie Melsek", 
        location: "Sanibel, Florida", 
        lat: 26.4552, 
        lon: -82.1304, 
        details: "She was attacked by a 12' 3\" alligator while working on landscaping along Poinciana Circle in Sanibel, Florida." 
    },
    {   name: "Brian Griffin", 
        location: "Lake County, Florida", 
        lat: 28.8923, 
        lon: -81.6442, 
        details: "He was killed by a 10' 4\" alligator while swimming in the Dead River near a boat ramp." 
    },
    {   name: "Robert Steele", 
        location: "Sanibel, Florida", 
        lat: 26.4552, 
        lon: -82.1304, 
        details: "He was attacked by an alligator while walking his dog near the J.N. 'Ding' Darling National Wildlife Refuge." 
    },
    {   name: "Alexandria Murphy", 
        location: "Winter Haven, Florida", 
        lat: 28.0378, 
        lon: -81.7371, 
        details: "She was killed by an alligator after wandering away from her fenced backyard near Lake Cannon." 
    },
    {   name: "Samuel Wetmore", 
        location: "Venice, Florida", 
        lat: 27.1128, 
        lon: -82.4587, 
        details: "He was killed in a pond near his residence in Venice, Florida, by an 8' 4\" alligator." 
    },
    {   name: "Adam Binford", 
        location: "Lake Ashby, Florida", 
        lat: 29.0846, 
        lon: -81.3839, 
        details: "He was killed by an 11-foot alligator after straying outside a roped-off area at Lake Ashby." 
    },
    {   name: "Grace Eberhart", 
        location: "Lake Serenity, Florida", 
        lat: 28.3396, 
        lon: -81.8297, 
        details: "She was killed by an alligator at Lake Serenity, Sumter County, Florida, after a bite to the throat and head." 
    },
    {   name: "Bradley Weidenhamer", 
        location: "Jonathan Dickinson State Park, Florida", 
        lat: 27.0477, 
        lon: -80.1397, 
        details: "He was killed by an alligator while wading in the Loxahatchee River at Jonathan Dickinson State Park." 
    },
    {   name: "Erin Glover", 
        location: "Hidden Lake, Florida", 
        lat: 27.0303, 
        lon: -81.4249, 
        details: "She was killed while walking along the shore of Hidden Lake in Charlotte County, Florida." 
    },
    {   name: "George Cummings III", 
        location: "Wakulla Springs State Park, Florida", 
        lat: 30.1469, 
        lon: -84.3256, 
        details: "He was killed while snorkeling in Wakulla Springs State Park by an 11-foot alligator." 
    },
    {   name: "Paul Mirabito", 
        location: "West Palm Beach, Florida", 
        lat: 26.7153, 
        lon: -80.0534, 
        details: "He was killed while diving and harassing small alligators in a canal near West Palm Beach." 
    },
    {
        name: "Robert Crespo",
        location: "St. Lucie County, Florida",
        lat: 27.2811,
        lon: -80.3641,
        details: "He was killed by a 12 ft 4 inch alligator while swimming in a canal in St. Lucie County, Florida."
    }
];  

// Create markers from the attack data
function createMarkers() {
    attackData.forEach(function(attack) {
        const marker = L.marker([attack.lat, attack.lon]).addTo(map);
        marker.bindPopup(`
            <b>${attack.name}</b><br>
            Location: ${attack.location}<br>
            Details: ${attack.details}
        `);
    });
}

// Create the markers on the map
createMarkers();
