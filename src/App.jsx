import React, { Component } from "react";
import Router from "./routes/Router.jsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

export default class App extends Component {


  render() 
  {
    return (
      <>
       <ApolloProvider client={client}>
         <Router />
       </ApolloProvider>
      </>
    );
  }
}

