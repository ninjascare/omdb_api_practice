import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter title to search"
        />
      </div>
    );
  }
}
