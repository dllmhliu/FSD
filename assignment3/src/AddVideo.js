import React from 'react';
import 'whatwg-fetch';
import 'es6-promise';

class AddVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          playlist: [],
          title: "",
          url: "",
          approve:false
        };
    }

    UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount', this.props);
    this.getPlaylist();
    }

    getPlaylist() {
        var result = fetch('http://localhost:3000/playlist',{
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

    addVideo() {
        let count = this.state.playlist.length;
        let postData = {"id": count+1, "title": this.state.title, "url": this.state.url, "approved": false};
        var result = fetch('http://localhost:3000/playlist/',{
            method:'POST',
            headers:{
              'Content-Type':'application/json;charset=UTF-8'
            },
            mode:'cors',
            cache:'default',
            body: JSON.stringify(postData)
          });
        
          result.then(res => {
              res.json().then(data => {
                console.log("data:", data);
                if (data != null) {
                    this.getPlaylist();
                }
            });
          });
        console.log(this.state.url);
    }

    inputChangeHandler(e) {
        
        console.log("inputChangeHandler", e.target);
        
        if (e.target.id === 'title') {
            
            this.setState({"title": e.target.value});
        } else if (e.target.id === 'url') {
            this.setState({"url": e.target.value});
        }
        
    }
    playlistDelete(play) {
        var result = fetch('http://localhost:3000/playlist/'+play.id,{
            method:'DELETE',
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
                    this.getPlaylist();
                }
            });
          });
    }

    render() {
        var playlistHtml = [];
        for (let play of this.state.playlist) {
            playlistHtml.push(<tr key={play.id}><td>{play.id}&nbsp;&nbsp;</td><td>{play.title}&nbsp;&nbsp;</td><td>{play.url}&nbsp;&nbsp;</td><td><a href="javascript:void(0)" onClick={()=>this.playlistDelete(play)} style={{color:'blueviolet'}}>Edit</a>&nbsp;&nbsp; </td><td><a href="javascript:void(0)" onClick={()=>this.playlistDelete(play)} style={{color:'blueviolet'}}>Delete</a>&nbsp;&nbsp;</td><td> <a href="javascript:void(0)" onClick={()=>this.playlistDelete(play)} style={{color:'blueviolet'}}>Approve</a></td></tr>);

        }
        return (
            <div>
                <font size="3">
                <label>Title:</label>
                <input type="input" id="title" onChange={this.inputChangeHandler.bind(this)} defaultValue={this.state.title}/>
                <label>URL:</label>
                <input type="input" id="url" onChange={this.inputChangeHandler.bind(this)} defaultValue={this.state.url}/>&nbsp;&nbsp;
                <input type="submit" value="Add Video" onClick={()=>{this.addVideo()}} />
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">S.no</th>
                        <th scope="col" nowrap>Title</th>
                        <th scope="col">URL</th>
                        <th scope="col" colspan="3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {playlistHtml}
                    </tbody>
                </table>
                </font>
            </div>
        );
    }
}

export default AddVideo;