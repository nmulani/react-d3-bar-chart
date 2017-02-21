import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  displayName: 'BarChart';

  propTypes: {
    id: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    dataSet: PropTypes.array,
    barColor: PropTypes.string,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    yLabel: PropTypes.string
  }

  // Once the component is mounted on the page, append
  // an SVG canvas with height, width and centered content
  componentDidMount() {
    this.drawBarChart();
  }

  drawBarChart(){
    const context = this.setContext();

    // Once SVG canvas is drawn, draw x and y axis and bars
    this.drawAxesBars(context);

  }

  // This is the SVG Canvas where the visualization is drawn
  setContext() {
    const { height, width, id, marginLeft, marginTop} = this.props;
    return d3.select(this.refs.bar).append('svg')
      .attr('height', height)
      .attr('width', width)
      .attr('id', id)
      .append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`);
  }


  // This is where we'll need to draw the axes and bars
  // TODO: find a way to separate out axes into separate functions
  drawAxesBars(context){
    const {height, width, dataSet, barColor, marginTop, marginBottom, marginLeft, marginRight, yLabel} = this.props;

    const data = dataSet;

    // Scale height and width to account for margins
    var scaledWidth = width - marginLeft - marginRight;
    var scaledHeight = height - marginTop - marginBottom;

    // Draw the x axis
    var x = d3.scaleBand().rangeRound([0, scaledWidth]).padding(0.1);
    x.domain(data.map(function(d) { return d.xelement; }));

    context.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0, ${scaledHeight})`)
      .call(d3.axisBottom(x));

    // Draw the y axis
    var y = d3.scaleLinear().rangeRound([scaledHeight, 0]);
    y.domain([0, d3.max(data, function(d) { return d.yelement; })]);

    context.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(5))
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text(`${yLabel}`);

    // Draw the bars
    context.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.xelement);})
        .attr("y", function(d) {return y(d.yelement);})
        .attr("width", x.bandwidth())
        .attr("height", function(d) {return scaledHeight - y(d.yelement);})
        .style("fill", `${barColor}`);

  }

  render() {
    return (
      <div ref="bar"></div>
    )
  }


}

export default BarChart;
