function Persons({ persons, search }) {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person, i) => (
          <p key={i}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
}

export default Persons;
