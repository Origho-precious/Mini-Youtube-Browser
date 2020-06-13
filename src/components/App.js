import React, { Component } from 'react';
import SearchBar from './Searchbar';
import Youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onTermSubmit('Reactjs')    
    }

    onTermSubmit = async term => {
        const KEY = "AIzaSyADyDWTPCh7Gsdbs2kzfjmtPVwYp5MLcOQ";
        const response = await Youtube.get("/search", {
            params: {
                q: term,
                part: 'snippet', 
                type: 'video',
                maxResults: 10,
                key: `${KEY}`
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row Grid">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                select={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// AIzaSyADyDWTPCh7Gsdbs2kzfjmtPVwYp5MLcOQ

export default App;