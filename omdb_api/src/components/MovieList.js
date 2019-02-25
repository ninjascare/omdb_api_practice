import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import axios from "axios";

export default class MovieList extends Component {
  state = {
    movieList: []
  };

  componentDidMount() {
    const key = "805b29cc";
    axios.get(`http://www.omdbapi.com/?s=Avengers&apikey=${key}`).then(res => {
      console.log(res.data.Search);
      this.setState({
        movieList: res.data.Search
      });
    });
  }

  render() {
    var moviePoster = this.state.movieList.map((movie, i) => (
      <div key={i}>
        <img src={movie.Poster} alt="eeads" />
      </div>
    ));

    return (
      <div className="App">
        <h1>Omdb Searcher</h1>
        <SearchBar />
        {moviePoster}
      </div>
    );
  }
}
