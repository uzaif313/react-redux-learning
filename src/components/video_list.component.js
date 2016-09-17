import React from 'react';
import VideoItem from './video_item.component';


const VideoList = (props)=>{
	const personList = props.persons.map((person,key)=>{
		return <VideoItem onVideoSelect={props.onVideoSelect} 
											key={key}
											person={person}/>;
	})
	console.log(props.persons.length);
	return (<ul className='col-md-4 list-group'>
		{personList}
	</ul>);
}

export default VideoList;