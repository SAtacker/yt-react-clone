import React from 'react';
import './VideoItem.css';

const VideoItem = ({item,onVideoSelect})=>{
    return (
        <div onClick={()=>onVideoSelect(item)} className="card text-white text-center bg-secondary border-info text-truncate" style={{width: "18rem"}}>
            <img src={item.snippet.thumbnails.medium.url} className="card-img-top" alt={item.snippet.channelTitle} />
            <div className="card-body">
                <h5 className="card-title">{item.snippet.title}</h5>
                <p className="card-text">{item.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoItem;