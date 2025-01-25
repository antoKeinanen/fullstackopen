import { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/person_form";
import Persons from "./components/persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [search, setSearch] = useState("");

  function handleAddPerson(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    if (persons.find((p) => p.name == name)) {
      window.alert(`${name} is already added to phonebook`);
      return;
    }

    setPersons((p) => [...p, { name, number }]);
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
