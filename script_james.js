document.addEventListener("DOMContentLoaded", function () {
    d3.csv("county_gator_counts.csv", function (error, data) {
        if (error) {
            console.error("❌ Error loading CSV:", error);
            return;
        }

        console.log("✅ CSV Loaded Successfully!", data);

        var margin = { top: 50, right: 50, bottom: 220, left: 100 }, // space for labels
            width = 1600 - margin.left - margin.right, // width for spacing
            height = 600 - margin.top - margin.bottom; //height for better visibility

        var svg = d3.select("#bar-chart-container")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.ordinal()
            .domain(data.map(function (d) { return d.County; }))
            .rangeBands([0, width], 0.9); //spacing between bars

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return +d["Number of Gators"]; })])
            .range([height, 0]);

        var xAxis = d3.svg.axis().scale(x).orient("bottom");
        var yAxis = d3.svg.axis().scale(y).orient("left");

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end")
            .style("font-size", "14px"); // Bigger font for readability

        svg.append("g").call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.County); })
            .attr("y", function (d) { return y(+d["Number of Gators"]); })
            .attr("width", x.rangeBand()) 
            .attr("height", function (d) { return height - y(+d["Number of Gators"]); })
            .attr("fill", "#e76f51");
    });
});