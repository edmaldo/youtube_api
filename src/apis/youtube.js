import axios from 'axios';

const KEY = 'AIzaSyBM4zk6188tuAww52hhzbNhAwexBwYDQE0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});