import axios from "axios";

const KEY = "AIzaSyDairLoitm5IUD4APCoTVcymMc3MXd5xnE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
