import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/" exact component={Rooms} />
            <Route path="/rooms/:id" exact component={SingleRoom} />
            <Route  component={Error} />
        </Switch>
    </div>
  );
}

export default App;
