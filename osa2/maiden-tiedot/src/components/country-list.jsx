function CountryList({ countries, handleShowCountry }) {
  console.log(countries);
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>
          {country.name.common}{" "}
          <button onClick={() => handleShowCountry(country)}>show</button>
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
