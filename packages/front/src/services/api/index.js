import axios from "axios";

const getToken = (api) => { }

export default (() => axios.create({
  baseURL: process.env.VUE_APP_API || "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer todo"
  },
}))()
