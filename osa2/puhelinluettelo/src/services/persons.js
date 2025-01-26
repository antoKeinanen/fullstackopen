import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

function getAllPersons() {
  return axios.get(baseUrl);
}

function createPerson(person) {
  return axios.post(baseUrl, person);
}

export default {
  getAllPersons,
  createPerson,
};
