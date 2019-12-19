
import React from "react";
import "./App.scss";
import Header from "./Header.js";
import ProductPage from "../ProductPage/ProductPage"
import data from "../data.json"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
       <ProductPage products={data} />
      </main>
    </div>
  );
}

export default App;
