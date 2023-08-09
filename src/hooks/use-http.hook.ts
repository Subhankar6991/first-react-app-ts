import { useState, useEffect, useCallback } from 'react';

export interface RequestConfig<RequestData> {
  url: string;
  method: string;
  data?: RequestData;
  headers?: Record<string, string>;
}

export default function useHttp(
  requestConfig: RequestConfig<Record<string, string>>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setResponse(null);
    const request = async (config: RequestConfig<Record<string, string>>) => {
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        body: config.data ? JSON.stringify(config.data) : null,
      });
      const data = await response.json();
      return data;
    };
    request(requestConfig)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setResponse(res);
      })
      .catch((err) => {
        setError(err.message);
        setResponse(null);
      });
  }, [requestConfig]);

  return [loading, error, response];
}
