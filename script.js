// Constants for dimensions
const width = 1200;
const height = 500;
const padding = 80;

const svg = d3.select("#chart")
  .attr("width", width)
  .attr("height", height);

const tooltip = d3.select("#tooltip"); // Select the tooltip

// Load data
const url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";

d3.json(url).then(data => {
  const baseTemperature = data.baseTemperature;
  const dataset = data.monthlyVariance;

  // Scale setup
  const xScale = d3.scaleLinear()
    .domain([d3.min(dataset, d => d.year), d3.max(dataset, d => d.year)])
    .range([padding, width - padding]);

  const yScale = d3.scaleBand()
    .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    .range([padding, height - padding])
    .padding(0.1);

  // Color scale setup
  const colorScale = d3.scaleSequential()
    .domain(d3.extent(dataset, d => d.variance))
    .interpolator(d3.interpolateRdYlBu);

  // Create axes
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
  const yAxis = d3.axisLeft(yScale)
    .tickFormat((d, i) => d3.timeFormat("%B")(new Date(0, i))); // Display month names

  // Append x-axis
  svg.append("g")
    .attr("id", "x-axis")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(xAxis);

  // Append y-axis
  svg.append("g")
    .attr("id", "y-axis")
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);

  // Draw cells
  svg.selectAll(".cell")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("class", "cell")
    .attr("x", d => xScale(d.year))
    .attr("y", d => yScale(d.month - 1)) // month - 1 because dataset months are 1-indexed
    .attr("width", (width - 2 * padding) / (d3.max(dataset, d => d.year) - d3.min(dataset, d => d.year)))
    .attr("height", yScale.bandwidth())
    .attr("fill", d => colorScale(d.variance))
    .attr("data-month", d => d.month - 1)
    .attr("data-year", d => d.year)
    .attr("data-temp", d => baseTemperature + d.variance)
    .on("mouseover", (event, d) => {
      tooltip.style("visibility", "visible")
        .attr("data-year", d.year)
        .html(`Year: ${d.year}<br>Month: ${d3.timeFormat("%B")(new Date(0, d.month - 1))}<br>Temp: ${(baseTemperature + d.variance).toFixed(2)}°C<br>Variance: ${d.variance.toFixed(2)}°C`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 30) + "px");
    })
    .on("mousemove", (event) => {
      tooltip.style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 30) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("visibility", "hidden");
    });

  // Legend dimensions
  const legendWidth = 300;
  const legendHeight = 20;

  const legendColors = d3.scaleSequential()
    .domain(d3.extent(dataset, d => d.variance))
    .interpolator(d3.interpolateRdYlBu);

  const legendSvg = d3.select("#legend")
    .append("svg")
    .attr("width", legendWidth)
    .attr("height", legendHeight + 40)
    .attr("id", "legend");

  // Define the number of color steps
  const legendData = d3.range(d3.min(dataset, d => d.variance), d3.max(dataset, d => d.variance), (d3.max(dataset, d => d.variance) - d3.min(dataset, d => d.variance)) / 10);

  // Draw color blocks for the legend
  legendSvg.selectAll("rect")
    .data(legendData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (legendWidth / legendData.length))
    .attr("y", 20)
    .attr("width", legendWidth / legendData.length)
    .attr("height", legendHeight)
    .attr("fill", d => legendColors(d));

  // Define the x-axis scale for the legend
  const legendXScale = d3.scaleLinear()
    .domain(d3.extent(dataset, d => baseTemperature + d.variance))
    .range([0, legendWidth]);

  const legendXAxis = d3.axisBottom(legendXScale)
    .tickFormat(d3.format(".1f"))
    .ticks(legendData.length);

  // Append the x-axis for the legend
  legendSvg.append("g")
    .attr("transform", `translate(0, ${legendHeight + 20})`)
    .call(legendXAxis);
});
