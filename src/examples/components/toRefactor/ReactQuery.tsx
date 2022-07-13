import { Fragment, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const ReactQuery: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Fetch />
    </QueryClientProvider>
  );
};

const Fetch: React.FC = () => {
  const [query, setQuery] = useState<string>('redux');
  const [search, setSearch] = useState<string>('redux');

  const { isLoading, error, data } = useQuery<{ hits: { objectID: string; url: string; title: string }[] }>(
    ['repoData', search],
    async () => {
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);

      return data;
    },
  );

  if (isLoading) {
    return <p>'Loading...'</p>;
  }

  if (error) {
    return <p>'An error has occurred: ' + error.message</p>;
  }

  return (
    <Fragment>
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <ul>
        {data?.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ReactQuery;
