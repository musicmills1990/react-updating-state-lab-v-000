// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
export default class YouTubeDebugger extends Component {

  constructor(){
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state.settings)
  }


  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
    console.log(this.state.settings)
  }



  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}
