import axios from "axios";

// process.env.NODE_ENV

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://bancotalentosapi.herokuapp.com";
const api = axios.create({ baseURL: url });

export default api;
