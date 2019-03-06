import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  state = {
    movieList: [],
    searchInput: {
      title: ""
    }
  };

  componentDidMount() {
    //     const input = handleSubmit();
    const key = "805b29cc";
    axios.get(`http://www.omdbapi.com/?s={input}&apikey=${key}`).then(res => {
      console.log(res.data.Search);
      this.setState({
        movieList: res.data.Search
      });
    });
  }

  handleChange = e => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const newSearch = { ...this.state.searchInput };
    newSearch[e.target.name] = e.target.value;
    this.setState({
      searchInput: newSearch
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            id="search"
            value={this.state.searchInput.title}
            placeholder="Enter title to search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
