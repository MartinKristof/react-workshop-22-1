import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const FetchReactQuery: React.FC = () => {
  const [query, setQuery] = useState<string>('redux');
  const [search, setSearch] = useState<string>('redux');

  const { isLoading, error, data } = useQuery<{ hits: { objectID: string; url?: string; title?: string }[] }>(
    search,
    async () => {
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);

      return data;
    },
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof Error) {
    return <p>An error has occurred: {error.message}</p>;
  }

  return (
    <>
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <ul>
        {data?.hits.map(item =>
          item.url && item.title ? (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ) : null,
        )}
      </ul>
    </>
  );
};

export default FetchReactQuery;
