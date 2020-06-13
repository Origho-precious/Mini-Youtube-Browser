import React from 'react';
import './VideoItem.css';

const VideoItem = ({select, video}) => {

    return(
        <div onClick={() => select(video)} className="video-item item">
            <img className="ui image" src= {video.snippet.thumbnails.medium.url} alt="img-thumbnail"/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;