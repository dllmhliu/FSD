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
       
        let postData = {"id": Date.now(), "title": this.state.title, "url": this.state.url, "approved": false};
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
        window.location.reload(true);
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
          window.location.reload(true);
    }
    playlistEdit(play) {
        //let count = this.state.playlist.length;
        //let postData = {"id": play.id, "title": this.state.title, "url": this.state.url, "approved": false};
        // this.state.title.value=play.title;
        // this.state.url=play.url;
        // this.state.add="Save";

        //let count = this.state.playlist.length;
        //let postData = {"id": play.id, "title": this.state.title, "url": this.state.url, "approved": false};

        play.title = this.state.title;
        play.url = this.state.url;

        var result = fetch('http://localhost:3000/playlist/'+play.id,{
            method:'PUT',
            headers:{
              'Content-Type':'application/json;charset=UTF-8'
            },
            mode:'cors',
            cache:'default',
            body: JSON.stringify(play)
          });
          result.then(res => {
              res.json().then(data => {
                console.log("data:", data);
                if (data != null) {
                    this.getPlaylist();
                }
            });
          });
          window.location.reload(true);
        // console.log(this.state.url);

    }
    playlistApprove(play) {
        //let postData = {"id": play.id, "title": this.state.title, "url": this.state.url, "approved": true};
        play.approved = true;
        var result = fetch('http://localhost:3000/playlist/'+play.id,{
            method:'PUT',
            headers:{
              'Content-Type':'application/json;charset=UTF-8'
            },
            mode:'cors',
            cache:'default',
            body: JSON.stringify(play)
          });
          result.then(res => {
              res.json().then(data => {
                console.log("data:", data);
                if (data != null) {
                    this.getPlaylist();
                }
            });
          });
          window.location.reload(true);
        //   console.log("http://localhost:5000/");
        //   window.location.reload
    }
    render() {
        var playlistHtml = [];
        let i=1;
        for (let play of this.state.playlist) {
            playlistHtml.push(<tr key={play.id}><td>{i}&nbsp;&nbsp;</td><td>{play.title}&nbsp;&nbsp;</td><td>{play.url}&nbsp;&nbsp;</td><td><button onClick={()=>this.playlistEdit(play)} style={{color:'blueviolet'}}>Edit</button>&nbsp;&nbsp; </td><td><button onClick={()=>this.playlistDelete(play)} style={{color:'blueviolet'}}>Delete</button>&nbsp;&nbsp;</td><td> <button class="btn btn-success" onClick={()=>this.playlistApprove(play)} style={{color:'blueviolet'} } disabled= {play.approved}>Approve</button></td></tr>);
            i++;
        }
        return (
            <div>
                <font size="3">
                <label>Title:</label>
                <input type="input" id="title" onChange={this.inputChangeHandler.bind(this)} defaultValue={this.state.title}/>
                <label>URL:</label>
                <input type="input" id="url" onChange={this.inputChangeHandler.bind(this)} defaultValue={this.state.url}/>&nbsp;&nbsp;
                <input id="add" type="submit" value="Add Video" onClick={()=>{this.addVideo()}} />
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