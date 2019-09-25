import React from "react";
import "../App.css";
import Home from "../pages/home";
import Rooms from "../pages/rooms";
import SingleRoom from "../pages/singleRoom";
import Error from "../pages/Error";
import Navbar from "../components/Navbar.jsx";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/rooms/:id" component={SingleRoom} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
