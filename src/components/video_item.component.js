import React from 'react';

const VideoItem = ({person,onVideoSelect})=>{
	return (
				<li className='list-group-item' onClick={()=>onVideoSelect(person)}>
					<h5 className="list-group-heading">{person.name}</h5>
					<p className="list-group-text">{person.email}</p>
				</li>
	)
}

export default VideoItem