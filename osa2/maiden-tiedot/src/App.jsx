import { useEffect } from "react";
import { useDeferredValue } from "react";
import { useState } from "react";
import countriesService from "./services/countries";
import CountryList from "./components/country-list";
import SingleCountry from "./components/single-country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search, { timeoutMs: 500 });

  let countryComponent = <CountryList countries={countries} />;
  if (countries.length > 10) {
    countryComponent = <p>Too many matches, specify the filter</p>;
  }
  if (countries.length == 1) {
    countryComponent = <SingleCountry country={countries[0]} />;
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then((resp) =>
        setCountries(
          resp.data.filter((c) =>
            c.name.common.toLowerCase().includes(deferredSearch.toLowerCase())
          )
        )
      );
  }, [deferredSearch]);

  return (
    <main>
      <section>
        find countries:{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </section>
      <section>{countryComponent}</section>
    </main>
  );
}

export default App;
