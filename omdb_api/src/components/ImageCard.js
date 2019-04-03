import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef(); /* This line of code creates a Ref to reach into the DOM to update elemnts  */
  }

  render() {
    const { Year, Poster } = this.props.image;
    return (
      <div>
        <img src={Poster} alt="PosterImage" />
        <h3>({Year})</h3>
      </div>
    );
  }
}
