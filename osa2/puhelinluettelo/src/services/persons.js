import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

function getAllPersons() {
  return axios.get(baseUrl);
}

function createPerson(person) {
  return axios.post(baseUrl, person);
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {
  getAllPersons,
  createPerson,
  deletePerson,
};
