import { useEffect, useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/person_form";
import Persons from "./components/persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAllPersons().then((resp) => setPersons(resp.data));
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

    personService.createPerson(newPerson).then((resp) => {
      console.log(resp);
      setPersons((p) => [...p, newPerson]);
    });
  }

  function handleDeletePerson(id, name) {
    if (window.confirm(`Haluatko varmasti poistaa ${name}`))
    personService.deletePerson(id).then((resp) => {
      console.log(resp);
      setPersons(persons.filter((p) => p.id != id));
    });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setSearch={setSearch} />
      <h2>Add new</h2>
      <PersonForm onSubmit={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        search={search}
        handleDeletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
