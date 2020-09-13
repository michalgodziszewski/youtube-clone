import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3";

const instance = axios.create({
  baseURL,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "X-Requested-With",
  // },
  // params: {
  //   key: "AIzaSyAVt4I88QE_2ZbUPvUHLkcpmyTvrXgeO3A",
  //   part: "snippet",
  // },
});

export default instance;
