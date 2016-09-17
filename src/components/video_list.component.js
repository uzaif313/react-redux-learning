import React  from 'react';
import VideoListItem from './video_item.component';
const VideoList = (props)=>{

		const videoItems = props.videos.map((video,key)=>{
				return <VideoListItem 
							 onVideoSelect={props.onVideoSelect}	
							 key={key} 
							 video={video}/>
		});

		return (
				<ul className='col-md-4 list-group'>
					{videoItems}
				</ul>
		)
}

export default VideoList	