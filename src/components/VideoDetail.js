import React from 'react';

const VideoDetail = ({video})=>{
    console.log('from video detail ',video);
    if(video ===null){
        return (
            <div >
                Search & Select a Video
            </div>)
        ;
    }
    return (
        <div className="card text-white text-center bg-secondary border-primary text-truncate">
            <h1 className="card-header display-4">{video.snippet.title}</h1>
            <div className="card-body embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/"+video.id.videoId} allowFullScreen title={video.snippet.title}></iframe>
            </div>
            <p className="card-footer">{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;