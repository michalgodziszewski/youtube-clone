import { GET_RECOMMENDED_VIDEOS } from "../actions/types";
import axios from "../../axios/axios";

export const getRecommendedVideos = () => async (dispatch) => {
  try {
    const response = await axios.get("/search", {
      params: {
        key: "AIzaSyAVt4I88QE_2ZbUPvUHLkcpmyTvrXgeO3A",
        part: "snippet",
        q: "eminem",
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
