// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{

  constructor () {
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

increaseBitrate = () => {
  this.setState({
    settings: Object.assign({}, this.state.settings,{
      bitrate: 12
    })
  })
}

decreaseResolution = () => {
  this.setState({
    settings: {
      ...this.state.settings,
        video: {
          ...this.state.settings.video,
            resolution: '720p'
        }
    }
  })
}

  render() {
    return (
      <div>

        <button className="bitrate" onClick={this.increaseBitrate}> Bitrate: {this.state.settings.bitrate} </button>
        <br/><br/>
        <button className="resolution" onClick={this.decreaseResolution}> Resolution: {this.state.settings.video.resolution} </button>

      </div>
    )
  }
}

export default YouTubeDebugger;
