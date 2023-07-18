import React, { useContext, useState } from 'react';
import GlobalContext from './global-context';
import './App.css';

function App(): React.JSX.Element {
  const context = useContext(GlobalContext);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [displayedCities, setDisplayedCities] = useState([] as string[]);
  return (
    <div>
      <select
        value={country}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedCountry = e.target.value;
          setCountry(selectedCountry);
          setDisplayedCities(
            context.countries.find((c) => c.value === selectedCountry)
              ?.cities ?? []
          );
          setCity(
            context.countries
              .find((c) => c.value === selectedCountry)
              ?.cities?.at(0) ?? ''
          );
        }}
      >
        <option value="">Select a country</option>
        {context.countries.map(({ name, value }, index) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
      <select
        value={city}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCity(e.target.value)
        }
      >
        {displayedCities.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <div>
        Selected Country: {country} , Selected City: {city}
      </div>
    </div>
  );
}

export default App;
