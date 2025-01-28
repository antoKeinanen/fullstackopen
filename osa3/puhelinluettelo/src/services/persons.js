import axios from "axios";
const baseUrl =
  import.meta.env.NODE_ENV == "production"
    ? "https://fullstackopen-sgex.onrender.com"
    : "http://localhost:3001/api/persons";

function getAllPersons() {
  return axios.get(baseUrl);
}

function createPerson(person) {
  return axios.post(baseUrl, person);
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

function updatePerson(id, person) {
  return axios.put(`${baseUrl}/${id}`, person);
}

export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};
