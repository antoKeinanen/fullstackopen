import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

function getAll() {
  return axios.get(baseUrl + "all");
}

export default {
  getAll,
};
