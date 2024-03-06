import axios from 'axios';
import { CACHE_TIME } from 'constants/cacheTime';
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { initialize } from 'react-ga';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import App from './App';
initialize('G-KG7KQ8K3GP');

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: CACHE_TIME.MINUTE_5,
      staleTime: CACHE_TIME.MINUTE_5,
    },
  },
});
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

axios.defaults.baseURL = PROXY_URL;
axios.defaults.withCredentials = true;
const container = document.getElementById('root');

if (document.getElementById('root').hasChildNodes()) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
          <ReactQueryDevtools />
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
          <ReactQueryDevtools />
        </RecoilRoot>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
