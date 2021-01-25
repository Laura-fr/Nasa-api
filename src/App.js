import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// components
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <Router>
      <Route path="/apod">
        <NasaPhoto />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
