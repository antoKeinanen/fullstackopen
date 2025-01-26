import { useEffect } from "react";
import { useDeferredValue } from "react";
import { useState } from "react";
import countriesService from "./services/countries";
import CountryList from "./components/country-list";
import SingleCountry from "./components/single-country";

function App() {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search, { timeoutMs: 500 });
  const [countryComponent, setCountryComponent] = useState(
    <CountryList handleShowCountry={handleShowCountry} countries={[]} />
  );

  useEffect(() => {
    countriesService.getAll().then((resp) => {
      const countries = resp.data.filter((c) =>
        c.name.common.toLowerCase().includes(deferredSearch.toLowerCase())
      );

      console.log(countries);

      if (countries.length > 10) {
        setCountryComponent(<p>Too many matches, specify the filter</p>);
      } else if (countries.length == 1) {
        setCountryComponent(<SingleCountry country={countries[0]} />);
      } else {
        setCountryComponent(
          <CountryList
            countries={countries}
            handleShowCountry={handleShowCountry}
          />
        );
      }
    });
  }, [deferredSearch]);

  function handleShowCountry(country) {
    setCountryComponent(<SingleCountry country={country} />);
  }

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
