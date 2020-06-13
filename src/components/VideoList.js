import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({select, videos}) => {
    const renderedVideos = videos.map((video, id) => {
        return <VideoItem key={id} video={video} select={select}/>
    })
    
    return(
        <div className="ui relaxed divided list">{renderedVideos}</div>
    )
}

export default VideoList;