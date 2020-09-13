import { GET_RECOMMENDED_VIDEOS } from "../actions/types";
import axios from "../../axios/axios";

export const getVideos = () => async (dispatch) => {
  try {
    const response = await axios.get("/search", {
      params: {
        key: "AIzaSyAVt4I88QE_2ZbUPvUHLkcpmyTvrXgeO3A",
        part: "snippet",
        q: "programming",
        type: "video",
        maxResults: "30",
      },
    });

    dispatch({
      type: GET_RECOMMENDED_VIDEOS,
      payload: response.data.items,
    });
  } catch (error) {
    console.log(error.message);
  }
};
