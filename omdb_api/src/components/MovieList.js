import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../App.css";


export default class MovieList extends Component {
  render() {
    return (
      <div className="App">
        <h1>Omdb Searcher</h1>
        <SearchBar />
      </div>
    );
  }
}
