import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/index.scss';
import './fonts/Comic_Sans_MS_Bold.ttf';
import './fonts/Comic_Sans_MS.ttf';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://child-care-strapi.onrender.com/graphql',
  //uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
