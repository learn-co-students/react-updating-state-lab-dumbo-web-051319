// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }


  bitClick = () => {

    // console.log(this.state.settings.bitrate)
    const settingsCopy = {...this.state.settings}
    settingsCopy.bitrate = 12
    this.setState({
      settings: settingsCopy
    })
  }


  resClick = () => {
    const settingsCopy = {...this.state.settings}
    settingsCopy.video.resolution = '720p'
    this.setState({
      settings: settingsCopy
    })
  }



  render(){
    return(
      <div><button className="bitrate" onClick={this.bitClick}>'Bitrate'</button>

      <button className="resolution"
      onClick={this.resClick}>'Resolution'</button>
      </div>
    )

  }

}

export default YouTubeDebugger;
