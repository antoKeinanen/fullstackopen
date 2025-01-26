import { useEffect, useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/person_form";
import Persons from "./components/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data))
      .catch((e) => console.error("Failed to fulfill request: ", e));
  }, []);

  function handleAddPerson(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    const newPerson = { name, number };
    if (persons.find((p) => p.name == name)) {
      window.alert(`${name} is already added to phonebook`);
      return;
    }

    axios
      .post("http://localhost:3001/persons", newPerson)
      .then((resp) => {
        console.log(resp);
        setPersons((p) => [...p, { name, number }]);
      })
      .catch((e) => console.error(e));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <h2>Add new</h2>
      <PersonForm onSubmit={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
