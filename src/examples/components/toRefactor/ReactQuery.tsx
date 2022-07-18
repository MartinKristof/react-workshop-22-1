import { QueryClient, QueryClientProvider } from 'react-query';
import FetchReactQuery from './FetchReactQuery';

const queryClient = new QueryClient();

const ReactQuery: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <FetchReactQuery />
  </QueryClientProvider>
);

export default ReactQuery;
