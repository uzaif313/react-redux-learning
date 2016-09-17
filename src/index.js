import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchBar from './components/video_searchbar.component';
import VideoList from './components/video_list.component';
import VideoDetail from './components/video_detail.component';
class App extends Component {
	
	constructor(props){
		super(props);
						$.ajax({
									url:"data.json",
									type:'GET'
								}).then((persons)=>{
									this.setState({persons:persons,selectedVideo:persons[0]});
									// console.log(this.state.persons);
								})
		this.state = {persons:[],selectedVideo:null}
	}

	render(){
		return (<div>
							<SearchBar/>
							<VideoDetail  video={this.state.selectedVideo}/>
							<VideoList  onVideoSelect={selectedVideo=>this.setState({selectedVideo})} persons={this.state.persons}/>
					 </div>)
	}
};

ReactDOM.render(<App/>,document.querySelector('.container'))