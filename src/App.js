import React from 'react';
import Homepage from "./pages/homepage/homepage.component.jsx"
import './App.css';
import {Switch, Route} from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/hats" component={HatsPage} />
          </Switch>
        </div>
  );
}

export default App;
