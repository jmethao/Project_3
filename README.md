# **Alligator Population**

## *Overview* ##

Our project explores alligator populations, sightings, and human-related incidents like attacks. Using interactive visualizations, we aim to highlight trends in alligator behavior and interactions with humans, helping raise awareness about alligators in the United States. The project provides insights into the following key questions:

Are there population distribution trends for alligators in Florida?

Have alligator sightings increased or decreased over time?

Is there an increase in alligator attacks over time?

Where in the United States are alligator attacks occurring most frequently?

What are the average age and gender of alligator attack victims?

## **How to Use & Interact with the Project**

A local web server is required to view the visualizations. Use one of the following:

- Python: python -m http.server

- VS Code: Live Server extension

Running the Visualizations

1) Clone the repository

2) Navigate to the appropriate folder and open the corresponding file

3) Run using a local server python -m or use Live Server in VS Code

## **1) Are there any population distribution trends that we are seeing with alligators in Florida? - Answered by James**

#### The data analysis and how to view the bar graph ####

1) First off, if you want to see the bar graph visualziation, you can go to James_code folder and select the index_james.html.html. Use a local web server such as python -m http.server if you have Python installed, or Live Server in VS Code to view the website and it's bar graph.
2) Now, to prepare the updated the data, make sure that you are in James_code folder, which will have the alligator data.xlsx file and data_cleaner.py file. You will need to run the data_cleaner.py file as it processes the data to count the number of alligator sightings for each county and saves the results to a CSV file. Open a terminal (or gitbash) and navigate to the project directory. Run the following command: python data_cleaner.py
3) If it runs successfully, it will generate a new file named county_gator_counts.csv. Now you can visualize it using the script_james.js file that is also in the James_code folder.
4) Script_james.js creates a bar chart visualization using the D3.js library. It is coded to first wait for the HTML page to fully load using DOMContentLoaded. Once the page is ready, it runs the function that will create the chart.
5) It loads the county_gator_counts.csv file using d3.csv()
6) It sets the size of the chart and leaves space around it for labels.
7) It we then create the bar chart and put in the data for it.
9) If you need to update or change your data, you can update the alligator data.xlsx or rename a new file the same name. However, please note that it should have a all the required columns still.


#### Analysis ####

I expected the most amount of alligators to be harvested in counties that encompassed the Everglades. I was surprised to see that the 2 largest alligator harvests happened in counties that were around the Orlando metro area.

## **2) Has alligator sightings decreased or increased over time? - Answered by Mai**

#### The data analysis in the script_mai.js file and how to view the heatmap ####

1) Please note that to use the Openlayers heatmap, you should have the ol.css and ol.js files downloaded. They are in the Alligator Sighting Heatmap folder along with the *index_mai.html file* that you will have to select to view the heatmap via using a local server (such as python or VS code's Live Server). The heatmap also has a style_mai.css file for how to map is displayed on the website. This file is linked to the html file.
3) First, I initialize an OpenLayers map centered on a location in the USA, and it uses OpenStreetMap tiles for the base layer. A heatmap layer is also added, where each sighting will influence the heatmap's intensity.
4) Next, I used the PapaParse library to load and parse data from inaturalist-alligator-data.csv. I then filtered the data to only include the latitude and longitude values, and the year and month of each sighting.
5) Then, I generated checkboxes for selecting which years and months to display. It groups the years into ranges and adds them to a dropdown. I also genearated checkboxes for all 12 months, from January to December and added them to a dropdown. When users select or deselect years and months, the data is filtered accordingly.
6) I created a fils() function that will filters the sightings based on the selected year ranges and months. The filtered data is used to update the heatmap, where sightings are represented as points, and their intensity is determined by the frequency of sightings at that location.
7) If you have updated data or want to change any of the data, you can update the inaturalist-alligator-data.csv.

This heatmap was created to be an interactive map that users can interactively filter the data by selecting specific year ranges and months, and the heatmap will update in real time to reflect these selection.

#### Analysis ####
   
Why It's Important to Know if Alligator Sightings Have Increased or Decreased?

There are many reason why tracking alligator sightings is important. A few of them are the following below:

It helps us understand their population -	More sightings could mean the alligator population is growing meanwhile fewer sightings could mean their population is decreasing.
  
Knowing what location alligators are been seen mostly - If alligator sightings increase in areas where people live, it could mean that alligators are getting closer to humans. This could raise safety concerns both for humans and the alligators.
  
The ecosystem health - How could this be a concern for the alligators? This could mean that there is some issues with their environment. For example, they might be moving to new areas if their habitat changes.

Findings We Gathered From Our Data:

Alligator sightings have grown significantly over time. Per the heatmap it has been growing steady from 2013-2017 and onwards.

o	Possible Explanations:

o	There are more observers over the years and more people are using websites like iNaturalist to document their sighting.

o	Another reason could be habitat changes. For example, urban expansion might be affecting the alligators’ habitats.

o	Or else this is because there are actual increases in the alligator population over the years.

There is a lot of alligator sightings in March and April. We do see that in spring, around March to May the sightings for alligators increase and in June to August, the sighting decrease. Then in October to December, the sightings increase again.

The top states with the most alligator sighting are Florida, Texas, South Carolina, Louisiana, and Georgia. This is mostly the southeast states which are known to have alligators living there. It’s not surprising because we know alligators live in warm, wet environments such as swamps, rivers, and lakes.

Conclusion:

The growing number of sightings over the years may be a result of more people using platforms like iNaturalist, making it easier to report and track alligator encounters. As human development continues, alligators may be moving into new areas due to changes in their natural habitats. Urban expansion, such as the development of wetlands or construction near waterways, could be pushing alligators closer to human populations. This might lead to more sightings in places where people live, which raises concerns about potential human-wildlife interactions.  The increase in sightings could also reflect a real increase in the alligator population. Our data shows distinct seasonal trends in alligator sightings, with a significant increase in sightings during the spring months. So if you want to see alligators, spring time is the best time.

## **3) Is there an increase of alligator attacks over time? Where in the United States are the alligator attacks or human-related incidents occurring most frequently? - Answered by Mee**

#### The data analysis in the Alligator_Attacks_Overtime_Mee.ipynb file and how to view the scatter plot visualization ####

1st question: Is there an increase of alligator attacks over time? 

I (Mee) thought a scatter plot would do a good job highlighting the visual for this question. This data was collected by kaggle.com. You can view the scatter plot visuzalization by opening the *Alligator_Attacks_Overtime_Mee.ipynb* file in jupyter notebook and running all the codes. This file is located in the folder named "Alligator Plot graph and marker map". Please note to install the pandas and matplotlib library if you do not have it already in your jupyter notebook.

1. I use the fatal_alligator_attacks_US.csv file to load my data
2. I extracted year from the Date column. 
3. Created a new column for Year. Group the data by Year and count the number of attacks per year. 
4. I plotted the data as a scatter plot
5. Added labels and the title 
6. Printed the graph
7. If you need to update or add data, you can add to or replace the existing CSV file with your updated one. Please note it should include all the same columns that this one has.

The data provided from kaggle.com shows the earliest alligator attack was from 1904. There was an incident where a male servant of Rene-Robert Cavelier was killed while swimming across the Colorado River in Texas. There were no other attacks recorded until 1973 where a woman named Sharon Holmes was killed while swimming at Oscar Scherer State Park in Florida by an 11 ft, 3 inch alligator. Between 1977 and 2022 there have been 36 other alligator attacks/incidents. 

#### The data analysis in the script_Mee.js and how to view the map with markers visualization ####

2nd question: Where in the United States are the alligator attacks or human-related incidents occurring most frequently? 

For this question I thought a map with markers that included the name, location, and details of the alligator attacks/incidents would be appropriate. I used JavaScript, loaded the D3 and Leaflet  library to create the map and markers. I loaded the fatal alligator attack US CSV file. This data was collected by kaggle.com. To view script_Mee.js, please go to the Alligator Plot graph and marker map folder.

1. Initialized the map to zoom in to the US only.
2. Add OpenStreetMap tiles
3. Created an array to store the data for the markers. 
4. Used createMarkers function to access the attackData and created a loop to loop over every element in the attackData array. 
5. This created the Leaflet markers at the latitude and longitude of attack objects in the loop and added to map. 
6. And then create the markers on the map so that when you click on the markers it populates the information: victim name, location, and description of the attack.

This data was also collected by kaggle.com. Per the data most of the alligator attacks/human related incidents occurred mostly in Florida. That is not a surprise as Florida has a high alligator population and many people visit the state for water activities. Humans are also building in areas near marsh and wild areas which leads to more changes of alligator encounters and potential conflicts. 

Directions for the Marker Map: 
1. in VS Code open the Alligator Plot graph and marker map folder 
2. open the *index_mee.html file* with Live Server to pull up the Marker Map. This is also located in the Alligator Plot graph and marker map folder.
3. click through the markers to see the description details of each alligator attack

In conclusion, if you're a resident of Florida, it's important to stay aware of your surroundings and understand the potential dangers in your area. The government has installed safety and warning signs to inform and caution tourists, with the aim of preventing future alligator-related incidents.

## **4) Average age and gender of alligator attack victims? - Answered by Susan ** ##

#### The data analysis in scatter_plot_age_#attacks_susan.ipynb file and how to see the scatter plot visualization ####

1) First off, you will open this file in jupyter notebook and run all the codes to view the scatter plot visualzation. To locate the file: scatter_plot_age_#attacks_susan.ipynb, you will go to the Alligator AverAge folder.
2) Before running the analysis, you need to ensure that you have the necessary packages installed. You can install the required Python libraries using the following command: pip install pandas matplotlib
3) The first step is to load the CSV file containing alligator attack data into a pandas DataFrame for analysis.
4) Next I cleaned the data: Strip leading/trailing spaces from column names, convert the 'Age' column to numeric, invalid entries become NaN, and drop rows where 'Age' or 'Details' is missing
5) Data Analysis: Count the number of attacks for each age
6) Now I plot the scatter chart using matplotlib
7) If you have an updated version of the dataset (e.g., with additional rows), you simply replace the existing CSV file with the new one. The code will automatically work with the new data without needing any changes.

#### The data analysis in the script_susan.js file and how to see the bar graph visualization ####

1) *First off, alligator_attack_averageage_map_susan.html is the file you will select to open via a local web server to view the bar graph visualization.* You can locate this file by clicking the Alligator AverAge folder.
2) On the js file, I created an array of objects, where each object contains information about a specific alligator attack.
3) Next, I used the function populateTable() to add rows to the table in the HTML document.
4) I used the forEach method to loop through each victim in the data array
5) Then I create cells for each piece of data.
6) Lastly I populate the table when the page loads using: window.onload = populateTable;
7) In the website, if you hover over the blue bar you can see the average age of male victims which is 44, if you hover over the pink bar you can see the average age of female victims which is 50
8) To update the data, you can go to the "const data" array, which contains the alligator attack information. Add or modify the records in this array. Make sure to maintain the same structure, with each record containing the following fields: Date, name, age, sex, and details. Once that is updated, you can just save and re-run the *alligator_attack_averageage_map_susan.html* file.

For Average age and gender of alligator attack victims-I wanted to use a bar graph to show the average age and provider what the gender was for the average age. I created this by loading the fatal alligator attack  CSV file. Then clean and calculate the average age by gender.If you hover over the blue you can see the average age of male victims which is 44, if you hover over the pink you can see the average age of female victims which is 50.

#### To view the data, open with a local server the file: alligator_data_susan.html ####

From the data set - I created and organized the data set by date, Name, Age, and Sex-Gender, and then the details of what happened. I did this to be able to read it and see it better. (This is just part of the html)

#### Analysis ####

Why is it important to know the average age and gender of alligator attack victims? 

By collecting and analyzing gender data, you might discover other patterns related to age, location, or time of day that could correlate with a particular gender’s vulnerability to alligator attacks. Also, if the data reveals that one gender is more affected by alligator attacks, it could inform public safety campaigns or recommendations. For example, if men are more often victims of attacks, safety measures, such as warnings or educational programs, could be more targeted towards them.

Findings:

Since the gender distribution is nearly equal, it suggests that alligator attacks are not significantly biased toward one gender. This indicates that factors such as geography, environment, or behavior might be influencing the occurrence of attacks equally across genders.

Males (Average Age: 44): This could mean that men might be more likely to engage in riskier activities (like fishing, swimming, or other recreational activities) that bring them into close contact with alligator habitats.

Females (Average Age: 50): This could mean that women may be more susceptible to attacks as they age, possibly due to health-related factors. Alternatively, it could suggest that women in this age range are engaging in activities that expose them to alligator risks.

Conclusion: 

Younger males may be more involved in outdoor activities near water, which increases their risk of encountering alligators. Educating young males about safety when engaging in water-related activities could help reduce the number of attacks in this age group. The older age of female victims suggests they may face greater vulnerability as they age, potentially due to physical decline or other health related issues. This might warrant targeted awareness campaigns or precautions for older women in areas where alligators are prevalent.

## *Ethical Considerations* ##

When working with data, it is crucial to ensure accuracy, transparency, and responsible use. Below are the ethical considerations for this project:

Data Source Verification: While some data sources are reliable, others lack clear origins. The dataset used from Kaggle does not specify its original source. Users should interpret it cautiously and cross-reference findings with authoritative sources.

Reliable Data Sources: Other data sources in this project, such as iNaturalist, are considered reliable due to their government and scientific collaborations. Additionally, data from the Florida Fish and Wildlife Conservation Commission (FWC) is an official and trustworthy source.

Data Privacy: This project does not contain or process personally identifiable information (PII). However, any dataset updates should be reviewed to ensure privacy compliance.

Responsible Interpretation: The findings should not be used to spread misinformation or create unnecessary fear regarding alligator populations. Instead, the goal is to provide educational and research value.

## **Resources We Used**

### **James Elander's Resources:** 

Florida Fish and Wildlife Conservation Commission (FWC). Accessed Feburary 2025. I, James Elander, used this website to obtain alligator population and harvest data for the project. The data was retrieved from the Florida Fish and Wildlife Conservation Commission website. Retrieved from https://myfwc.com/

DataMaps. Accessed February 2025. I, James Elander, used this website as a resource for interactive map visualizations in the project. DataMaps provides an open-source library for creating responsive and dynamic maps using JavaScript. Retrieved from https://datamaps.github.io/

Please note that I used the AI learning assistant and went to office hours to get my code debugged.

### **Mai Houa Hang's Resources:**

iNaturalist. iNaturalist. Accessed January 2025. I, Mai Houa Hang, used this website to obtain alligator observation data for the heatmap project. I downloaded a csv file from the website with 66,617 data. Retrieved from https://www.inaturalist.org/observations?subview=table&taxon_id=26159

OpenLayers. OpenLayers. Accessed January 2025. I, Mai Houa Hang, used this website for help with learning how to use OpenLayers with JavaScript and locating what files I would need to download locally to use this library. Retrieved from https://openlayers.org/

OpenLayers. OpenLayers GitHub Release v6.15.1. Accessed January 2025. I, Mai Houa Hang, used this GitHub page to download the Openlayers zip folder in order to use the library for this project. Retrieved from https://github.com/openlayers/openlayers/releases/tag/v6.15.1

OpenLayers. Heatmap of Earthquakes Example. Accessed January 2025. I, Mai Houa Hang, used this website for guidance in general on how to code my OpenLayers heatmap on my script_mai.js file. Retrieved from https://openlayers.org/en/latest/examples/heatmap-earthquakes.html

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 5 a on the script_mai.js file with how use "DOMContentLoaded" so that I can get my datasets showing on my map. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed January 2025. I, Mai Houa Hang, used this tool for help with step 18 on the script_mai.js file with how to code the weight. It helped me to determine the intensity datapoints have on the heatmap. Retrieved from https://chat.openai.com/chat

Penn State College of Earth and Mineral Sciences (2025). CEI Tool v4.2.0 Quickstart Guide [Documentation]. Accessed February 2025. I, Mai Houa Hang, used this documentation to help with step 21 to 29 in my script_mai.js file to implement the map and heatmap features. Retrieved from https://tools.cei.psu.edu/v4.2.0/doc/quickstart.html
PapaParse. (n.d.). PapaParse Documentation: Config Options. Accessed January 2025. I, Mai Houa Hang, used this website to learn how to use the parse.parse function from the PapaParse library for the script_mai.js file. Retrieved from https://www.papaparse.com/docs#config

Thaekeh. (n.d.). CSV Parsing with PapaParse. Accessed January 2025. I, Mai Houa Hang, used this CodePen example to help me understand and implement the parse.parse function from the PapaParse library. The code provided a practical example of how to parse a CSV file and handle the parsed data using PapaParse, which I applied in my script_mai.js file step 35 to 39. Retrieved from https://codepen.io/thaekeh/pen/OJRXaQO

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed January 2025. I, Mai Houa Hang, used this tool for help with step 40 to 46 on the coding in the script_mai.js file. I kept getting errors with not being able to use my data. With this tool’s help, I was able to get my csv dataset to transfer over so that I can use them to create a map in JavaScript. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 55 to 56 in the script_mai.js file. It helped locate where to put my document.getElementBy and addEventListener codes in my script properly. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 63 to 66 on the coding in the script_mai.js file. It helped me with how to code my data to sort the years into 5 years each. Retrieved from https://chat.openai.com/chat

Tejs. (2012, October 23). JavaScript checkbox create element. Stack Overflow. Accessed February 2025. I, Mai Houa Hang, used this Stack Overflow post’s codes as a guideline to help me with creating checkboxes in my script_mai.js file steps 71 to 87. The solution provided in the post showed how to use the “getElementById”, “createElement”, and “appendChild” function to create checkboxes. Retrieved from https://stackoverflow.com/questions/13033074/javascript-checkbox-create-element

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 100 in the script_mai.js file. It helped provide me the correct coding to clear any options before I add new ones in there. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 123 in the script_mai.js file. It helped provide me the correct coding for the document.querySelectorAll() and the for each loop method. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 117 and 118 in the script_mai.js file. It helped provide me the correct coding to get all the checkboxes that are checked inside the year ranges and months. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 128 and 130 in the script_mai.js file. It helped provide me the correct coding when using “querySelectorAll” to filter the sightings based on the selected years and months. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed February 2025. I, Mai Houa Hang, used this tool for help with step 136 to 137 in the script_mai.js file. It helped corrected my coding using “&&” in my codes so that it can run without any errors. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 148 to 149 in the script_mai.js file. It helped me with how to use the acc function to hold the accumulated results. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 154 to 156 in the script_mai.js file. It helped me with adding the coding for the features or data points to display on the map. It also helped me with the coding for the geometry, which defines the shape and location of the feature. Lastly, it helped me with the coding for the properties, which holds the weight and counts. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 15 in my index_mai.html file on where to add my PapaParse library. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 22 to 24 in my index_mai.html file on where and how to add my checkbox dropdowns. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 35 to 36 in my index_mai.html file for how to put the words “Low” and “High” in my legend. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 10 to 12 in my style_mai.css file for how to put the in the width, height and how to use the z-index. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 17 in my style_mai.css file to help me make my dropdowns and legend show on the map in the website by using “position: absolute;”. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 20 in my style_mai.css file to help me know to use px for my width or else it won’t show on the map. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 29 in my style_mai.css file with adding this code in there: “overflow-y: auto;”. This is for if the content inside the slider container exceeds the height, we can scroll it. Retrieved from https://chat.openai.com/chat

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 40 to 42 in my style_mai.css file with what codes to add to make sure my checkboxes are in the map. Retrieved from https://chat.openai.com/chat

Color Combos. (n.d.). Color scheme 12847 [Website]. Accessed February 2025. I, Mai Houa Hang, used this tool to select the colors for the legend color bar in my style_mai.css file. Retrieved from https://www.colorcombos.com/color-schemes/12847/ColorCombo12847.html

OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. Accessed Feburary 2025. I, Mai Houa Hang, used this tool for help with step 52 to 54 in my style_mai.css file with what codes to add to make sure I am labeling my legend correctly. Retrieved from https://chat.openai.com/chat

### **Mee Thao's Resources:**
Danelo, Adam. Fatal Alligator Attacks in the U.S. Kaggle, 2021, www.kaggle.com/datasets/danela/fatal-alligator-attacks-us.

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 27 Jan. 2025. Mee used ChatGPT to help code the leaflet and D3 libraries into the index.html. I also needed help to find the longitude and latitude for the Marker map as the fatal alligator attack US CSV file downloaded from the kaggle.com website did not have longitude/ latitude data in the data set. At first ChatGPT instructed I use the Geocoder API in order for the markers to populate on the map but the markers were not showing up on the right location on the map. This took up most of my time on 1/27/25.

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 28 Jan. 2025. Mee used ChatGPT to continue to find ways to code JavaScript so that the markers are populating in the correct location per the data from the fatal alligator attack US CSV file. ChatGPT then helped me turn the location description from the attacks into longitude and latitude coordinates. Creating an array to store the data and then add to map was successful. From there I was able to add markers and descriptions and add to map. 

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 30 Jan. 2025. Mee used ChatGPT on this day (to help with the python scatter plot graph) to extract the year from the Date column as the data did not have it's own year column. ChatGPT then helped me create a new column for Year, group the data by year, and count the number of attacks per year. 

### **Susan Thao Vang's Resources:**
Danelo, Adam. Fatal Alligator Attacks in the U.S. Kaggle, 2021, www.kaggle.com/datasets/danela/fatal-alligator-attacks-us.

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 27 Jan. 2025. Susan used ChatGPT to continue to find ways to code JavaScript to create a html with the data from the fatal alligator attack US CSV file. ChatGPT then helped me create a bar graph that is interactive. Creating an array to store the data and then add to map was successful. From there I was able to add markers and descriptions and add to map.

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 28 Jan. 2025. Susan used ChatGPT to continue to find ways to code JavaScript so the average with gender per the data from the fatal alligator attack US CSV file. ChatGPT then helped me create a bar graph that is interactive. Creating an array to store the data and then add to map was successful. From there I was able to add markers and descriptions and add to map.

OpenAI. "ChatGPT." OpenAI, OpenAI, 2023, www.openai.com/chatgpt. Accessed 30 Jan. 2025. Susan used ChatGPT on this day (to help with the python scatter plot graph) to extract the year from the Date column as the data did not have it's own year column. ChatGPT then helped me create a new column for Year, group the data by year, and count the number of attacks per year.




