import React from 'react';
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
          </Switch>
        </div>
  );
}

export default App;
