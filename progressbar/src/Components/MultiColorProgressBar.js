import React from "react"
import './Progressbar.css'
import ReactDOM from 'react-dom'

class MultiColorProgressBar extends React.Component {
  constructor(props) {
    super(props);   
  }
 
  render() {    
      const parent = this.props;

    let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.value > 0) {
        return (
          <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
          </div>
        )
      }
    }, this);

    let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.value > 0) {
        return (
          <div className="graduation" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
          </div>
        )
      }
    }, this);

    let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
      if(item.value > 0) {
        return (
          <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}>
          </div>
        )
      }
    }, this);

    let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
        if(item.value > 0) {
          return (
            <div className="legend" key={i}>
            </div>
         )
       }
    }, this);

    return (
      <div className="multicolor-bar">
        <div className="values">
          {values == ''?'':values}
        </div>
        <div className="scale">
          {calibrations == ''?'':calibrations}
        </div>
        <div className="bars">
          {bars == ''?'':bars}
        </div>
        <div className="legends">
          {legends == ''?'':legends}
        </div>
      </div>
    );
  }
}

let readings = [
  {
    name: 'Sharique',
    value: 35,
    color: 'rgba(242, 153, 74, 0.58)'
  },
  {
    name: 'Utkarsh',
    value: 35,
    color: 'rgba(242, 153, 74, 0.65)'
  },
  {
    name: 'TitanII',
    value: 10,
    color: '#F2994A'
  },
  {
    name: 'Titan',
    value: 5,
    color: '#E27F28'
  },
  {
    name: 'Available',
    value: 15,
    color: 'rgba(196, 196, 196, 0.53)'
  }
];



ReactDOM.render(<MultiColorProgressBar readings={readings}/>, document.getElementById('root'));

export default MultiColorProgressBar;

  