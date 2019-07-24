import React from 'react';
import 'whatwg-fetch';
import 'es6-promise';
//import getPlaylist from './Service';

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          playlist: [],
          title: "",
          url: ""
        };
    }

    UNSAFE_componentWillMount() {

    console.log('UNSAFE_componentWillMount', this.props);
    this.getPlaylist();
    
    }

    getPlaylist() {
        var result = fetch('http://localhost:3000/playlist?approved=true',{
            method:'GET',
            headers:{
              'Content-Type':'application/json;charset=UTF-8'
            },
            mode:'cors',
            cache:'default'
          });
        
          result.then(res => {
              res.json().then(data => {
                console.log("data:", data);
                if (data != null) {
                    this.setState({playlist: data});
                    for (let play of data) {
                            console.log("play:", play);
                    }
                }
            });
          });
    }

    componentDidMount() {

    }

    playlistClick(play) {
        this.props.player.current.playlistClick(play.id, play.url);
        this.props.playlistClick(play.id);
    }
    render() {
        var playlistHtml = [];
        
        for (let play of this.state.playlist) {
            playlistHtml.push(<li key={play.id}><a href="javascript:void(0)" onClick={()=>this.playlistClick(play)}> {play.title}</a>&nbsp;&nbsp;</li>);
        }

        return (
            <div>
                <font size="5">
                <ul id="playList">
                    {playlistHtml}
                </ul>
                </font>
            </div>
        );
    }
}

export default Playlist;