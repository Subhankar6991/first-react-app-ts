import React, { useMemo } from 'react';
import useHttp from '../hooks/use-http.hook';
export default function App(): React.JSX.Element {
  const requestConfig = useMemo(() => {
    return {
      url: 'https://swapi.dev/api/people/1',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }, []);
  const [loading, error, response] = useHttp(requestConfig);
  return (
    <div>
      <h1>Hello World!</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {response && <p>{JSON.stringify(response, null, 9)}</p>}
    </div>
  );
}
