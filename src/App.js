import React, { Component } from 'react';
import BarChart from './BarChart';

class App extends Component {
  // ES6 constructor sets the initial state for the App component
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
      <BarChart
        id = "d3-barchart"
        height = {300}
        width = {360}
        barColor = "steelblue"
        dataSet = {[{xelement: 'SomethingA', yelement: 1}, {xelement: 'SomethingB', yelement: .4}, {xelement: 'SomethingC', yelement: .3}]}
        marginTop = {20}
        marginBottom = {30}
        marginLeft = {40}
        marginRight = {20}
        yLabel = "Units"
      />
      </div>
    );
  }
}

export default App;
