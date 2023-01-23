import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import Detail from "./Components/PokemonDetail/PokemonDetail.js";
import Form from "./Components/Form/Form.js";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path={["/Home", "/Create", "/home/:id"]}>
        <NavBar />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/home/:id">
        <Detail />
      </Route>
      <Route exact path="/Create">
        <Form />
      </Route>
    </div>
  );
}

export default App;
