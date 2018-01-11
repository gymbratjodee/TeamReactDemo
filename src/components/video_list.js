import React from 'react';
import VideoListItem from './video_list_item';

//No state so make function-based components
const VideoList = (props) => { //"props" from parent will arrive as an argument here!
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
  });

  return (
    <ul className="col-md-4 list-group"> {/*Using Bootstrap (see index.html) --> */}
      {videoItems}
    </ul>
  );
};

export default VideoList;
