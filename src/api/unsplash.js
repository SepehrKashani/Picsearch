import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID wOUagmFcB2OTR5OXN5V04radQfmf46Mrx_X60IDQ89s",
  },
});
