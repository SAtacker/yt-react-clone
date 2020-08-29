import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props)=>{
    console.log(props.list);
    const renderedList = props.list.map((video)=>{
        console.log(video.id.videoId!==undefined?video.id.videoId:video.id.channelId);
        return (<VideoItem onVideoSelect={props.onVideoSelect} item={video} key={video.id.videoId!==undefined?video.id.videoId:video.id.channelId} />);
    });

    return (
        <div className="row">
            {renderedList}
        </div>
    );
}

export default VideoList;