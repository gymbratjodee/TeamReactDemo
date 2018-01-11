import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search' //npm file are all in known location
import SearchBar from './components/search_bar'; //files you create need full path reference
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDzRcs0VDhD-2TkHdjZMXsQ18cUgyze2HE';


//Create new component to produce some HTML. Needs state so make class-based component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //IN ES6 setState({videos})  means this.setState({videos: videos}). Use when names match
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    
    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} /> {/* passing "props" to children */}
        </div>
    );
  }
}

//Add component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
