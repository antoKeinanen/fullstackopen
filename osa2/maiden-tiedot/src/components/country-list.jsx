function CountryList({ countries }) {
  console.log(countries);
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>{country.name.common}</li>
      ))}
    </ul>
  );
}

export default CountryList;
