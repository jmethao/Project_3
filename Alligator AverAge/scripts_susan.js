 // Sample dataset (use your dataset here)
     const data = [
        [
            { "Date": "August 15, 2022", "Name": "Nancy Becker", "Age": 88, "Sex": "female", "Details": "The victim fell into a pond in a gated community in Hilton Head Island, South Carolina, and was attacked by a nearly 10-foot-long alligator. The victim's body was found being guarded by the alligator and was later recovered." },
            { "Date": "July 15, 2022", "Name": "Rose Marie Wiegand", "Age": "80s", "Sex": "female", "Details": "The victim fell into a pond along a golf course in Englewood, Florida, and was attacked by two alligators." },
            { "Date": "June 24, 2022", "Name": "Micheal Burstein", "Age": 75, "Sex": "male", "Details": "The victim was dragged into a pond in Myrtle Beach, South Carolina. The victim's body was recovered later and a subsequent post-mortem established that Mr Burstein drowned." },
            { "Date": "May 31, 2022", "Name": "Sean McGuinness", "Age": 47, "Sex": "male", "Details": "The victim was attacked while trying to retrieve frisbee golf discs in the lake at John S. Taylor Park in Largo, Florida." },
            { "Date": "August 30, 2021", "Name": "Timothy Satterlee", "Age": 71, "Sex": "male", "Details": "The victim was attacked in floodwaters of Hurricane Ida near the city of Slidell, Louisiana. The attack was witnessed by the victim's wife, who said the alligator bit his arm off." },
            { "Date": "May 1, 2020", "Name": "Cynthia Covert", "Age": 58, "Sex": "female", "Details": "The victim was pulled under and drowned by an alligator in a pond behind a home near Salt Cedar Lane, Kiawah Island, South Carolina." },
            { "Date": "August 20, 2018", "Name": "Cassandra Cline", "Age": 45, "Sex": "female", "Details": "Dragged to her death while walking her dog near a golf course in the gated community of Sea Pines in Hilton Head, South Carolina. Witnesses said Cline was attempting to protect her dog when the alligator pulled her into a lagoon. The dog was unharmed." },
            { "Date": "June 8, 2018", "Name": "Shizuka Matsuki", "Age": 47, "Sex": "female", "Details": "Dragged to her death and dismembered while walking dogs at the Silver Lake Rotary Nature Park in Davie, Florida." },
            { "Date": "July 29, 2016", "Name": "Bonnie Walker", "Age": 90, "Sex": "female", "Details": "Walker's body was found in a retention pond near Brookdale Senior Living Center in Charleston, South Carolina. According to coroners, she died from 'multiple sharp and blunt force injuries' that are consistent with those inflicted by an alligator." },
            { "Date": "June 14, 2016", "Name": "Lane Graves", "Age": 2, "Sex": "male", "Details": "An alligator, 4 to 7 feet long, dragged the victim under water in the Seven Seas Lagoon about 9pm on June 14, 2016, at Disney's Grand Floridian Resort & Spa just outside of Orlando, Florida. His father and mother tried to rescue him; the father was attacked by a second alligator. The victim's body was found nearby the next day, intact and apparently drowned." },
            { "Date": "on or about June 5, 2016", "Name": "Richard Zachary Taylor", "Age": 72, "Sex": "male", "Details": "Police recovered Taylor's body after a report of an alligator with a body in its mouth near Lake Hunter in Lakeland, Florida. A trapper responded a short time later and eventually caught the alligator. Detectives do not know whether Taylor drowned or was killed by the reptile. His body was decomposed, indicating he had been in the water a couple of days or longer. Remains found inside the alligator during a necropsy were a match to Taylor." },
            { "Date": "on or about November 13, 2015", "Name": "Matthew Riggins", "Age": 22, "Sex": "male", "Details": "A police dive team found the victim's body in a pond in Micco, Florida Barefoot Bay community in Brevard County ten days after he was reported missing. Riggins, who had been burglarizing homes in the area, was attacked and partially eaten by an 11-foot (3.4 meters) alligator." },
            { "Date": "October 19, 2015", "Name": "James Okkerse", "Age": 62, "Sex": "male", "Details": "Okkerse was killed while swimming/snorkeling by a 12-foot (3.7 meters) alligator at Blue Spring State Park near Orange City, Florida. The final cause of death was determined by the Volusia County medical examiner's office in consultation with a forensic odontologist from a neighboring county who specializes in animal bites." },
            { "Date": "July 4, 2015", "Name": "Tommie Woodward", "Age": 28, "Sex": "male", "Details": "After an 11-foot alligator appeared at Burkarts Marina in Orange, Texas, bystanders were told to stay out of the water. Tommie Woodward mocked the alligator and jumped into the water in close proximity to the alligator and was immediately pulled underwater; his body was later found with severe trauma to the chest. This was the first recorded fatal alligator attack in Texas since 1836." },
            { "Date": "November 13, 2007", "Name": "Justo Padron", "Age": 36, "Sex": "male", "Details": "A man fleeing police by jumping into a retention pond adjacent to the Miccosukee Resort and Convention Center near Miami was killed by a 9-foot 3-inch (2.8 m) alligator." },
            { "Date": "October 5, 2007", "Name": "Gwen Williams", "Age": 83, "Sex": "female", "Details": "A Canadian woman who had been house sitting for her daughter at The Landings on Skidaway Island, east of Savannah, Georgia, was spotted floating in a lagoon 500 feet (200 m) behind her daughter's house. Autopsy results and a necropsy of the animal established that she had been attacked and killed by an 8-foot (2.5 m) alligator." },
            { "Date": "May 14, 2006", "Name": "Annemarie Campbell", "Age": 23, "Sex": "female", "Details": "Her body was pulled out of an alligator's mouth by friends and relatives in a springhead at Juniper Wayside Park in the Ocala National Forest near Lake George in Marion County, Florida. She had been attacked while snorkeling. Autopsy results confirmed that Campbell died from drowning and multiple blunt-force injuries including lacerations on her head, neck and upper torso, and multiple rib fractures." },
            { "Date": "May 14, 2006", "Name": "Judy W. Cooper", "Age": 43, "Sex": "female", "Details": "Her body was found in a canal near Oldsmar in Pinellas County, Florida, 20 miles (30 km) north of St. Petersburg. She had been in the water for about three days. Preliminary autopsy results indicated a fatal alligator attack. Her arm and hand were later recovered from an 8.5-foot (2.6 m) alligator." },
            { "Date": "May 10, 2006", "Name": "Yovy Suarez Jiménez", "Age": 28, "Sex": "female", "Details": "Her dismembered body was found floating in a canal between Markham County Park and State Road 84 in Sunrise, Florida. She was killed while jogging the previous evening by a 9' 6\" (3 m) alligator; her arms were found in the animal's digestive tract during necropsy. and the Broward County medical examiner concluded that she was attacked on land and dragged into the canal." },
            { "Date": "July 15, 2005", "Name": "Kevin Albert Murray", "Age": 41, "Sex": "male", "Details": "He was killed while swimming in the Apollo waterway in Port Charlotte, Florida by a 12' 2\" (3.7 m) alligator." },
            { "Date": "March 15, 2005", "Name": "Don Owen", "Age": 56, "Sex": "male", "Details": "Fishermen discovered Owen's body about 12 miles (19 km) from his Lakeland, Florida home. He had been missing since March 9. Trappers later caught an 8' 9\" (2.7 m) alligator and recovered some of Owen's body parts." },
            { "Date": "September 26, 2004", "Name": "Michelle Reeves", "Age": 20, "Sex": "female", "Details": "She was killed by a 7' 11\" (2.4 m) alligator while swimming in a retention pond at Lee Memorial Health Park in Lee County, Florida." },
            { "Date": "June 21, 2004", "Name": "Janie Melsek", "Age": 54, "Sex": "female", "Details": "She was attacked by a 12' 3\" (3.7 m) alligator while working on landscaping along Poinciana Circle Sanibel, Florida. She later died in surgery from an infection acquired from being in the water with open wounds." },
            { "Date": "June 18, 2003", "Name": "Brian Griffin", "Age": 12, "Sex": "male", "Details": "He was killed by a 10' 4\" (3.1 m) alligator while swimming in the Dead River near a boat ramp; the river connects Lakes Harris and Eustis in Lake County, Florida." },
            { "Date": "September 11, 2001", "Name": "Robert Steele", "Age": 81, "Sex": "male", "Details": "He was attacked by an alligator while walking his dog on a trail between two wetland areas near the J.N. 'Ding' Darling National Wildlife Refuge on Sanibel, Florida. Steele bled to death after his leg was bitten off below the knee." },
            { "Date": "June 23, 2001", "Name": "Alexandria Murphy", "Age": 2, "Sex": "female", "Details": "She wandered away from her fenced back yard and was killed 700 feet from her home on Lake Cannon in Winter Haven, Florida." },
            { "Date": "May 4, 2001", "Name": "Samuel Wetmore", "Age": 70, "Sex": "male", "Details": "He was killed in a pond near his residence in Venice, Sarasota County, Florida by an 8' 4\" (2.5 m) alligator. Wetmore suffered from dementia and had wandered from his home." },
            { "Date": "March 21, 1997", "Name": "Adam Binford", "Age": 3, "Sex": "male", "Details": "He was killed by an 11-foot (3.4 m) alligator after straying outside a roped-off area in Lake Ashby, Volusia County, Florida. Wildlife officials shot the alligator, which was still holding the lifeless body of the boy 20 hours later." },
            { "Date": "October 3, 1993", "Name": "Grace Eberhart", "Age": 70, "Sex": "female", "Details": "She was killed by one or more alligators at Lake Serenity, Sumter County, Florida. She died of a broken neck caused by an alligator bite to the throat and head." },
            { "Date": "June 19, 1993", "Name": "Bradley Weidenhamer", "Age": 10, "Sex": "male", "Details": "He was killed while wading in the Loxahatchee River at Jonathan Dickinson State Park in Martin County, Florida." },
            { "Date": "June 4, 1988", "Name": "Erin Glover", "Age": 4, "Sex": "female", "Details": "She was killed while walking along the shore of Hidden Lake, Charlotte County, Florida." },
            { "Date": "July 13, 1987", "Name": "George Cummings III", "Age": 29, "Sex": "male", "Details": "He was killed while snorkeling in the Wakulla Springs State Park, Wakulla County, Florida by an 11-foot (3.4 m) alligator." },
            { "Date": "May 4, 1985", "Name": "Paul Mirabito", "Age": 27, "Sex": "male", "Details": "He was killed while diving and harassing small alligators in a canal near West Palm Beach, Florida." },
            { "Date": "August 6, 1984", "Name": "Robert Crespo", "Age": 11, "Sex": "male", "Details": "He was killed by a 12' 4\" (3.8 m) alligator while swimming in a canal in St. Lucie County, Florida." },
            { "Date": "September 10, 1978", "Name": "Phillip Rastrelli", "Age": 14, "Sex": "male", "Details": "He was killed while swimming across the Hidden River Canal off Bessie Creek in Martin County, Florida." },
            { "Date": "September 28, 1977", "Name": "George Leonard", "Age": 52, "Sex": "male", "Details": "He was killed while swimming in the Peace River Canal, Charlotte County, Florida." },
            { "Date": "August 16, 1973", "Name": "Sharon Holmes", "Age": 16, "Sex": "female", "Details": "She was killed while swimming at the Oscar Scherer State Park, Sarasota County, Florida, by an 11' 3\" (3.4 m) alligator." },
            { "Date": "June, 1957", "Name": "Allen Rice", "Age": 9, "Sex": "male", "Details": "He had been missing several days from his Eau Gallie, Florida, home, when his body was discovered by the Civil Air Patrol on the banks of Horse Creek, and parts of his body were found inside an alligator destroyed by authorities." },
            { "Date": "April or June, 1836", "Name": "Gray B. King", "Age": "?", "Sex": "male", "Details": "A settler from Nashville traveling with his family and slaves, he was seized and pulled under by an alligator after jumping into the river to push free a ferry which had run aground. Sources describe the location as Double Bay (just below Anahuac), Buffalo Bayou, or the Trinity River, Texas." },
            { "Date": "10 August, 1734", "Name": "Jacques du Bois", "Age": "?", "Sex": "male", "Details": "The blacksmith at Fort St. Jean Baptiste, near what is now Natchitoches, Louisiana, was found dead on the banks of the Cane River, and a coroner's inquest concluded he was killed by an alligator." },
            { "Date": "1685", "Name": "Dumesnil", "Age": "?", "Sex": "male", "Details": "A servant of René-Robert Cavelier, Sieur de La Salle, he was killed while swimming across the Colorado River in Texas." }
            
        ]

           
            // Add more entries as needed...
        ];

        // Function to populate the table with the data
        function populateTable() {
            const tableBody = document.querySelector("#victimTable tbody");
            tableBody.innerHTML = '';  // Clear any existing rows

            data.forEach(victim => {
                // Create a row for each victim
                const row = document.createElement("tr");

                // Create cells for each piece of data
                const dateCell = document.createElement("td");
                dateCell.textContent = victim.Date;
                row.appendChild(dateCell);

                const nameCell = document.createElement("td");
                nameCell.textContent = victim.Name;
                row.appendChild(nameCell);

                const ageCell = document.createElement("td");
                ageCell.textContent = victim.Age;
                row.appendChild(ageCell);

                const sexCell = document.createElement("td");
                sexCell.textContent = victim.Sex;
                row.appendChild(sexCell);

                const detailsCell = document.createElement("td");
                detailsCell.textContent = victim.Details;
                row.appendChild(detailsCell);

                // Add the row to the table
                tableBody.appendChild(row);
            });
        }

        // Populate the table when the page loads
        window.onload = populateTable;




    