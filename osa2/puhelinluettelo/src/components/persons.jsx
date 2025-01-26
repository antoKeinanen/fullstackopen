function Persons({ persons, search, handleDeletePerson }) {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person, i) => (
          <p key={i}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDeletePerson(person.id, person.name)}>
              delete
            </button>
          </p>
        ))}
    </>
  );
}

export default Persons;
