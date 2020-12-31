import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};

export default {
  Fetch: (url) => {
    return axios.post(url, { headers: headers });
  },
  isAuth: function () {
    return localStorage.getItem("token") !== null;
  },
  logout: function () {
    localStorage.clear();
  },
};
