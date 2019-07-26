// Code DigitalClicker Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClicker extends React.Component{
  constructor(){
    super()

    this.state = {
      timesClicked: 0
    }
  }
  onClickHandler = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render(){
    return(
      <button onClick={this.onClickHandler}>{this.state.timesClicked}</button>
    )
  }
}
export default DigitalClicker;
