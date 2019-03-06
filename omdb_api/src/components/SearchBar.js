import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter title to search"
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
