import React from 'react';

const VideoDetail = function({video}){
	if (!video){
		return <div>Loading....</div>
	}
	return (
				<div className="col-md-8">
					<h2>{video.name}</h2>
					<p>{video.address}</p>
					<hr/>
					<div className="">
						<h4>{video.email}</h4>
						<b>{video.phone}</b>
					</div>
				</div>	
	);
}

export default VideoDetail;