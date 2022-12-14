import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
ReactDOM.render(
  <>
  <QueryClientProvider client = { queryClient }>
    <App />
  </QueryClientProvider>
  </>,
  document.getElementById('root')

);

