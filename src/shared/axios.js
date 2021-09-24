import axios from "axios";

const lmsAPIMostProd = "https://api.lms.net";
const lmsAPIMostDev = "http://localhost:3001";
const lmsAPIMost =
  process.env.NODE_ENV === "development" ? lmsAPIMostDev : lmsAPIMostProd;

const instance = axios.create({
  baseURL: lmsAPIMost,
});

export default instance;
