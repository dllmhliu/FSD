import React from 'react';
import Player from './Player';
import Controls from './Controls';
import Playlist from './Playlist';
import AddVideo from './AddVideo';

class VideoPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progressValue: 0, currentVideoId: 1}
    }

    onTimeUpdateHandler(value) {
        this.setState({progressValue: value});
    }

    playlistClickHandler(value) {
        this.setState({currentVideoId: value});
        console.log("video player currentVideoId", value);
    }

    refPlayer = React.createRef();
    render () {
        return (
        <div className="container">
      <div className="row">
        <div className="col-lg-9" style={{ textAlign: 'center' }}>
          <h1>Video Player By React JS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <Player ref={this.refPlayer} onTimeUpdate={(value)=>{this.onTimeUpdateHandler(value)}}></Player>
          <Controls player = {this.refPlayer} progressValue = {this.state.progressValue} currentVideoId = {this.state.currentVideoId}></Controls>
        <p></p>
        <p></p>
        </div>
        <div className="col-lg-5" id="landscapePlayList" >
          <Playlist player = {this.refPlayer} playlistClick={(value)=>{this.playlistClickHandler(value)}}></Playlist>
        </div>
        <div>
        <AddVideo player = {this.refPlayer} playlistClick={(value)=>{this.playlistClickHandler(value)}}></AddVideo>
        </div>
      </div>
    </div>
    )
    }
}

export default VideoPlayer;