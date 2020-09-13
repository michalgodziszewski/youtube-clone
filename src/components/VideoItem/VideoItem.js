import React from "react";
import "./VideoItem.scss";
import Moment from "react-moment";
import Avatar from "@material-ui/core/Avatar";
const VideoItem = ({
  video: {
    snippet: { thumbnails, title, channelTitle, publishTime },
  },
}) => {
  // console.log(video);
  return (
    <div className="videoItem">
      <img src={thumbnails.high.url} alt="" className="videoItem__thumbnails" />
      <div className="videoItem__info">
        <Avatar>{title[0]}</Avatar>
        <div className="videoItem__text">
          <p className="videoItem__title">{title}</p>
          <p className="videoItem__channelName">{channelTitle}</p>
          <p className="videoItem__time">
            Dodano <Moment fromNow>{publishTime}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
