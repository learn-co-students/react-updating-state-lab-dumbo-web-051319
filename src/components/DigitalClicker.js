// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{

constructor () {
  super()

  this.state = {
       timesClicked: 0,
     };
   }

  increaseClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseClick}> {this.state.timesClicked} </button>
      </div>
    )
  }
}

export default DigitalClicker;


//NOTE: Medium article on increasing/decreasing
// https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c
