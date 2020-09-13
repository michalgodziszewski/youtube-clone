import React, { useEffect } from "react";
import "./Home.scss";
import { getRecommendedVideos } from "../../redux/actions/video";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendedVideos());
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
