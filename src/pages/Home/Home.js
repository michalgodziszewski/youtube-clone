import React, { useEffect } from "react";
import "./Home.scss";
import { getVideos } from "../../redux/actions/video";
import { useDispatch, useSelector } from "react-redux";
import VideoItem from "../../components/VideoItem/VideoItem";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector(({ video }) => video);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  console.log(videos);

  return (
    <div className="home">
      <h1>Recommended Video</h1>
      <div className="home__videoList">
        {!loading && videos.length > 0 ? (
          videos.map(({ id, snippet }) => (
            <VideoItem key={id.videoId} video={{ id, snippet }} />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
