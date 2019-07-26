// Code YouTubeDebugger Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class YouTubeDebugger extends React.Component{
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
}

onClickHandler=()=>{
  this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12
    }
  })
}

onClickResolutionHandler=()=>{
  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        resolution: '720p'
    }
  }
})
}

  render(){
    return(
      <div>
        <button className = 'bitrate' onClick={this.onClickHandler}></button>
        <button className = 'resolution' onClick={this.onClickResolutionHandler}></button>
      </div>
    )
  }
}
export default YouTubeDebugger;
