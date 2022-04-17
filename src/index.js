import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { store } from './redux/store.js';
import { Provider } from 'react-redux';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
);
