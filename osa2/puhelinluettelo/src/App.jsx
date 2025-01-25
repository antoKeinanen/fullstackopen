import { useState } from "react";

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
      <div>
        search: <input onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h3>Add new</h3>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input id="name" />
        </div>
        <div>
          number: <input id="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default App;
