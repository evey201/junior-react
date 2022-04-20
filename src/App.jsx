import React, { Component } from "react";
import { connect } from 'react-redux' 
import Header from './components/header/Header.jsx'
import { fetchProductsAsync } from "./redux/products/products.action.js";
// import Router from "./routes/Router.jsx";

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache()
// });

// export default class App extends Component {


//   render() 
//   {
//     return (
//       <>
//        <ApolloProvider client={client}>
//          <Router />
//        </ApolloProvider>
//       </>
//     );
//   }
// }

class App extends Component {

  // componentDidMount() {
  //   const { fetchProductsAsync } = this.props;
  //   const data = fetchProductsAsync();
  //   console.log(data);
  // }

  render () {
    return (
      <>
        {/* <Header /> */}kk
      </>
    )
  }
}

const mapsDispatchToProps = dispatch => ({
  fetchProductsAsync: () => dispatch(fetchProductsAsync())
});

export default connect(null, mapsDispatchToProps)(App);

