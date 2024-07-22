import React from "react";
import NavMenu from "./components/navMenu";
import { Homeitems } from "./components/homepageitems";
import HomePage from "./components/homePage";
import StorePage from "./components/storePage";
import storeItems from "./components/storeItems";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage items={Homeitems} />} />
          <Route path="/store" element={<StorePage items={storeItems} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
