import axios from "axios";
const KEY = "846d1017e26873dea000f335bbd097d41ef1605a9ac142de334bae6c62a8eb2d";

export default axios.create({
  baseURL: "https://api.unsplash.com/search",
  headers: {
    Authorization: `Client-ID ${KEY}`
  },
  params: {
    per_page: 40
  }
});
