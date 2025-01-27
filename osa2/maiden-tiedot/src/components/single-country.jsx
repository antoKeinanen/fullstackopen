import { useEffect } from "react";
import weatherService from "../services/weather";
import { useState } from "react";
import Weather from "./weather";

function SingleCountry({ country }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService.getWeather(country.capital[0]).then((resp) => {
      console.log(resp.data);
      setWeather(resp.data);
    });
  }, [country.capital]);

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
      <br />
      <Weather weather={weather} />
    </div>
  );
}

export default SingleCountry;
