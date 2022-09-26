import React, { Component } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/home";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path='/' component={Home} />
        </div>
      </BrowserRouter>      
    );
  }  
}

export default App;
