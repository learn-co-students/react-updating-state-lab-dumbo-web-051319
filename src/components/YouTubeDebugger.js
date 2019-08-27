// Code YouTubeDebugger Component Here

import React from 'react';


class YouTubeDebugger extends React.Component {
    
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
        };
    }

        
        handleBitRateChange = () => {
            this.setState({
                settings: {
                    ...this.state.settings, 
                    bitrate: 12 
                }
            })
            // console.log('hii');
        }

        handleResolutionChange = () => {
            this.setState({
                settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
                }
            });

        }

    
    render() {
        return(
            <div>
                <button className= "bitrate"  onClick={this.handleBitRateChange}> Bitrate
                
                </button>         
                
                <button className="resolution" onClick={this.handleResolutionChange}>Change resolution
                
                </button>

        </div>


        )
    }
}





export default YouTubeDebugger 