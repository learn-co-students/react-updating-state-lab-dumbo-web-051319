// Code YouTubeDebugger Component Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class YouTubeDebugger extends React.Component {
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

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
      })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
      })
  }

  render() {
    return(
      <div>
      <button className='bitrate' onClick={this.handleClick}></button>
      <button className='resolution' onClick={this.handleResClick}></button>
      </div>
      )
  }
}
