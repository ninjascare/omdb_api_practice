import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import SingleMovie from "./components/SingleMovie";
import HomePage from "./components/HomePage";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/movies" component={MovieList} />

            <Route exact path="/movies/:movieId" component={SingleMovie} />
            {/* ⬆️ The top Route is a testing route so I might not use it ⬆️ */}

            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
