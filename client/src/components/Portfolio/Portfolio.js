import React, { Component } from "react";
import GalleryImages from '../Gallery';

class Portfolio extends Component {

  render() {
    return (
      <section id="portfolio" style={this.props.style}>
      <div className="container">
          <h1>portfolio</h1>
          <GalleryImages />
      </div>
      </section>
    )
  }
}

export default Portfolio;