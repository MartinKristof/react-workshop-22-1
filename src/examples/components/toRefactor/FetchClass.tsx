import React, { Fragment } from 'react';
import axios from 'axios';

interface State {
  query: string;
  search: string;
  data: { hits: { objectID: string; url: string; title: string }[] };
}

class FetchClass extends React.PureComponent<unknown, State> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      query: 'redux',
      search: 'redux',
      data: { hits: [] },
    };
  }

  fetchData = async (search: string) => {
    const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`);

    this.setState(state => ({ ...state, data: result.data }));
  };

  componentDidMount() {
    this.fetchData(this.state.search);
  }

  componentDidUpdate(prevProps: unknown, prevState: State) {
    if (this.state.search !== prevState.search) {
      this.fetchData(this.state.search);
    }
  }

  setQuery = (query: string) => {
    this.setState(state => ({ ...state, query }));
  };

  setSearch = (search: string) => {
    this.setState(state => ({ ...state, search }));
  };

  render() {
    const { query, data } = this.state;

    return (
      <Fragment>
        <input type="text" value={query} onChange={event => this.setQuery(event.target.value)} />
        <button type="button" onClick={() => this.setSearch(query)}>
          Search
        </button>
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default FetchClass;
