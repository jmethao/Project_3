# **Alligator Population**

The aim of our project is to explore alligator populations, sightings, and human-related incidents like attacks. Using interactive visualizations, we aim to highlight trends in alligator behavior and interactions with humans, helping raise awareness about alligators in the United States.

Questions we are looking to answer with our project:

Are there any population distribution trends that we are seeing with alligators in Florida? 
Has alligator sightings decreased or increased over time? 
Is there an increase of alligator attacks over time? Where in the United States are the alligator attacks or human-related incidents occurring most frequently?
Average age and gender of alligator attack victims?

## ** How to run our data**

Please note that to run our data, you will have to download our github repository and use a local web server to serve the HTML file (e.g., using a tool like python -m http.server if you have Python installed, or Live Server in VS Code)

## **1) Are there any population distribution trends that we are seeing with alligators in Florida?**




## **2) Has alligator sightings decreased or increased over time?**

First off, in our to view the heatmap, you will have to download the github respository if you have not already. Go the the "Alligator Sighting Heatmap" folder and using a local web server such as python -m http.server if you have Python installed, or Live Server in VS Code, you can open the file: index_mai.html
   
Why It's Important to Know if Alligator Sightings Have Increased or Decreased?
There are many reason why tracking alligator sightings is important. A few of them are the following below:

It helps us understand their population

-	More sightings could mean the alligator population is growing meanwhile fewer sightings could mean their population is decreasing.
  
-	Knowing what location alligators are been seen mostly
  
-	If alligator sightings increase in areas where people live, it could mean that alligators are getting closer to humans. This could raise safety concerns both for humans and the alligators.
  
-	The ecosystem health - How could this be a concern for the alligators? This could mean that there is some issues with their environment. For example, they might be moving to new areas if their habitat changes.

Findings We Gathered From Our Data:

•	Alligator sightings have grown significantly over time. Per the heatmap it has been growing steady from 2013-2017 and onwards.

o	Possible Explanations:

o	There are more observers over the years and more people are using websites iNaturalist to document their sighting.

o	Another reason could be habitat Changes. For example, urban expansion might be affecting the alligators’ habitats.

o	Or else this is because there is an increase in the alligator population over the years.

•	There is a lot of alligator sightings in March and April. We do see that in spring, around March to May the sightings for alligators increase and then in June to August, the sighting decrease. Then in October to December, the sightings increase again.

o	What does this tell us? If you want to see alligators, Spring season is the best time to see them.

•	The top states with the most alligator sighting are Florida, Texas, South Carolina, Louisiana, and Georgia. This is mostly the southeast states which are known to have alligators living there. It’s not surprising because we know alligators live in warm, wet environments such as swamps, rivers, and lakes.

## **3) Is there an increase of alligator attacks over time? Where in the United States are the alligator attacks or human-related incidents occurring most frequently?**




   
## **5) Average age and gender of alligator attack victims?**

## **Resources We Used**

## **James Elander's Resources:**

## **Mai Houa Hang's Resources:**

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

## **Nick O’donnell's Resources:**

## **Mee Thao's Resources:**

## **Susan Thao Vang's Resources:**




