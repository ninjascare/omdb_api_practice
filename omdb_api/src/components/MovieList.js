import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import axios from "axios";
import { DebounceInput } from "react-debounce-input";

export default class MovieList extends Component {
  state = {
    movieList: [],
    searchInput: {
      title: ""
    },
    typingTimeout: 0
  };

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const newSearch = e.target.value;
    this.componentDidMount(newSearch);
  };
  componentDidMount(input) {
    const key = "805b29cc";
    axios.get(`http://www.omdbapi.com/?apikey=${key}&s=` + input).then(res => {
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
        <form>
          <DebounceInput
            minLength={2}
            debounceTimeout={1000}
            onChange={this.handleChange}
            type="text"
            name="title"
            id="search"
            value={this.state.searchInput.title}
            placeholder="Enter title to search"
          />
        </form>
        {/* <SearchBar {...this.props} /> */}
        {moviePoster}
      </div>
    );
  }
}
