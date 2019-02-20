import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Omdb Searcher</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
