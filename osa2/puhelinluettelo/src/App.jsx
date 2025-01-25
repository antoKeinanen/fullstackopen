import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  // const [newName, setNewName] = useState("");

  function handleAddPerson(event) {
    event.preventDefault();
    const name = event.target.name.value;
    if (persons.find((p) => p.name == name)) {
      window.alert(`${name} is already added to phonebook`);
      return;
    }
    
    setPersons((p) => [...p, { name }]);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input id="name" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <p key={i}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
