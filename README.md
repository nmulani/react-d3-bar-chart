# D3 Bar Chart Component in React

A simple implementation of a bar chart D3 visualization component in React. Data is passed in as an array of objects. See source code for annotations with rationale behind various pieces of code included here.

Clone repository and run `npm start` to launch example. Accepted parameters include:
- id (identifier for this component)
- height (Component height)
- width (Component width)
- barColor (Bar color)
- dataSet (Dataset for populating bar chart, in the form of an array of objects)
- marginTop (Margin between top of chart and top of SVG canvas)
- marginBottom (Margin between bottom of chart and bottom of SVG canvas)
- marginLeft (Margin between left edge of chart and left edge of SVG canvas)
- marginRight (Margin between right edge of chart and right edge of SVG canvas)
- yLabel (Label to show for Y-axis units)

See `src/App.js` for initialization of React-D3 component and `src/BarChart.js` for definition of React-D3 arc component.

Built on top of the [Create React App](https://github.com/facebookincubator/create-react-app) boilerplate. Based on bar chart structure shown in Mike Bostock's [bar chart block](https://bl.ocks.org/mbostock/3885304) tutorial.
