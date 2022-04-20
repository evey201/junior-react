import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <ApolloProvider client={client}>
      <Provider store={store}>
          <BrowserRouter>
            <PersistGate persistor= { persistor }>
                <App />
            </PersistGate>
          </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </>
);
