import { useEffect, useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/person_form";
import Persons from "./components/persons";
import personService from "./services/persons";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    personService.getAllPersons().then((resp) => setPersons(resp.data));
  }, []);

  function handleAddPerson(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const newPerson = { name, number };
    const found = persons.find((p) => p.name == name);

    if (
      found &&
      window.confirm(
        `${name} is already added to phonebook would you like to update the number?`
      )
    ) {
      personService
        .updatePerson(found.id, newPerson)
        .then(() => {
          setPersons(persons.map((p) => (p.id == found.id ? newPerson : p)));

          setMessage(`Updated ${found.name}`);
          setIsError(false);

          setTimeout(() => setMessage(null), 2000);
        })
        .catch(() => {
          setMessage(`${found.name} has already been deleted`);
          setIsError(true);

          setTimeout(() => setMessage(null), 2000);
        });

      return;
    }

    personService.createPerson(newPerson).then(() => {
      setPersons((p) => [...p, newPerson]);

      setMessage(`Added ${newPerson.name}`);
      setIsError(false);

      setTimeout(() => setMessage(null), 2000);
    });
  }

  function handleDeletePerson(id, name) {
    if (window.confirm(`Delete ${name}?`))
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter((p) => p.id != id));

        setMessage(`Deleted ${name}`);
        setIsError(false);

        setTimeout(() => setMessage(null), 2000);
      });
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={isError} />
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
