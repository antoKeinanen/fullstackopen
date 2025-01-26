function SingleCountry({ country }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}m²</p>
      <br />
      <b>languages:</b>
      <ul>
        {Object.values(country.languages).map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
      <br />
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
}

export default SingleCountry;
