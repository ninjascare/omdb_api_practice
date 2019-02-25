import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome!!</h1>
        <Link to="/movies">
          <button>Go Look for your favorite movies</button>
        </Link>
      </div>
    );
  }
}
