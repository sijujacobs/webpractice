console.log(" BarChart :: : ");

var svg = d3.select("svg"),
  margin = 200,
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin;
var xScale = d3
    .scaleBand()
    .range([0, width])
    .padding(0.4),
  yScale = d3.scaleLinear().range([height, 0]);
var g = svg.append("g").attr("transform", "translate(" + 100 + "," + 100 + ")");

d3.json("../data/chartData.json", function(error, data) {
  console.log(" d3Json Datat :: : ", data);
  if (error) {
    throw error;
  }
  xScale.domain(data.map(d => d.year));
  yScale.domain([0, d3.max(data, d => d.value)]);

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  g.append("g").call(
    d3
      .axisLeft(yScale)
      .tickFormat(d => "$" + d)
      .ticks(5)
  );

  g.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) {
      return xScale(d.year);
    })
    .attr("y", function(d) {
      return yScale(d.value);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
      return height - yScale(d.value);
    })
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);

  console.log(" Chart Loaded :: : ");
});
function handleMouseOver(d, i) {
  // Add interactivity
  d3.select(this).style(
    "box-shadow",
    "2px 2px 10px 10px rgba(80, 80, 80, 0.6)"
  );
}

function handleMouseOut(d, i) {
  d3.select(this).style("box-shadow", "none");
}
