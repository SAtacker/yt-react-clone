import React from 'react';
import SearchBar from './SearchBar';
import axios from '../apis/youtubeapi.js';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = "AIzaSyA20WqWDXAr5H6jO80qPvIO2T71YHKNi30";

class App extends React.Component{
    state = {videos: [],selectedVideo:null,err:null};
    handleSubmit = async (term)=>{
        console.log(term);
        await axios.get("/search",{
            params: {
                part: 'snippet',
                maxResults: '5',
                key: `${KEY}`,
                q: term
            }
        })
        .then(
            (res)=>{
                console.log(res.data.items);
                this.setState({videos: res.data.items});
            }
        )
        .catch(
            (error)=>{
                console.log("The error is ",error.response);
                this.setState({err:error});
            }
         );
    }

    onVideoSelect = (video)=>{
        console.log('From app ',video);
        this.setState({selectedVideo: video});
    }

    render(){
        if(this.state.err!==null){
            return (
                <div className="err col jumbotron jumbotron-fluid row justify-content-center">
                    <h1 className="display-4 col-4">{this.state.err.response.status}</h1>
                    <p className="lead col-4">{this.state.err.response.data.error.message}</p>
                </div>
            );
        }
        return (
            <div className="col text-white bg-dark">
                <SearchBar onFormSubmit={this.handleSubmit}/>
                <div className="container-fluid row justify-content-around">
                    <div className="col-9">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="col-3">
                        <VideoList 
                            list={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;