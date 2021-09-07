import axios from 'axios';

const KEY = "AIzaSyBfQyyCrpUNhcCUs3tv8yFsKf-s9PH_2OA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY
  }
})