import React, {useState} from "react";
import Header from "../componens/header/Header.jsx";
import PLP from "../componens/PLP/PLP.jsx";
import PDP from "../componens/PDP/PDP.jsx";
import Errorpage from "../componens/errorPage/Errorpage.jsx";
// import Cart from "./cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import NAMES_QUERY from "../graphQLdata/GraphQL.jsx";


export default function Router() {

  const { loading, error, data } = useQuery(NAMES_QUERY);
  const [ PLPcount, setPLP ] = useState(0); 
  const [ symbolCount, setSymbol ] = useState(0);  
  const [ PDPCount, setPDP ] = useState(0);  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const price = symbolCount;
  const description = data.categories[PLPcount].products[PDPCount];
  const products = data.categories[PLPcount].products;
  const currencies = data.currencies;

  return (
    <>
      <BrowserRouter>
        <Header currencies={currencies} name={
          PLPcount => setPLP(PLPcount)} symbolClick={symbolCount => setSymbol(symbolCount)} price={price} />
          
        <Routes>
          <Route path="/" element={<PLP PLPcount={PLPcount} products={products} price={price} index={PDPCount => setPDP(PDPCount)} />} />
          <Route path="pdp/:id" element={<PDP description={description} />} />
          {/* <Route path="cart" element={<Cart />} /> */}

          {/* Routes that arent available */}
          <Route path="/:wrongPage" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
