
import React from "react";
import "./App.scss";
import Header from "./Header.js";
import ProductPage from "../ProductPage/ProductPage"

function App() {

  return (
    <div className="app">
      <Header />

      <main className="app-main">
       <ProductPage />
      </main>
    </div>
  );
}

export default App;
