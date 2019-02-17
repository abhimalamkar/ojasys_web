import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/body/Home";
import Topbar from "./components/navigation/TopNavigation";
import BottomNavigation from "./components/navigation/BottomNavigation";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Home />
        
        <BottomNavigation></BottomNavigation>
      </div>
    );
  }
}

export default App;
