import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/video_searchbar.component';
import VideoList from './components/video_list.component';
import VideoDetail from './components/video_detail.component';
const API_KEY = 'AIzaSyDFCcJF3OtbveetGsLPaUZI6IWIhf7w35k';


class App extends Component{

	constructor(props){
		super(props);
		this.state={videos:[],selectedVideo:null};
		this.videoSearch("surfboard")
	}

	videoSearch(term){
		YTSearch({key:API_KEY,term:term},(videos)=>{
		  this.setState({videos:videos,selectedVideo:videos[0]});
			// console.log(this.state.videos)
		});
	}
	render(){
			const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
			return (
						<div>
							<SearchBar onSearchTermChanged={videoSearch} />
							<VideoDetail video={this.state.selectedVideo}/>
							<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
						</div>
			)
	}
}


ReactDOM.render(<App/>,document.querySelector(".container"));