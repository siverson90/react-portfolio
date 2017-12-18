import React, { Component } from "react";
import HeroImg from "../HeroImg/HeroImg.js";


class Hero extends Component {

  // components should include:
  // Projects/work
  // Contact
  // About me section
  // Languages to show experience
  // languages I am focused on

  render() {
    return (
        <section>
          <h1>Hero</h1>
          <HeroImg />
        </section>
    )
  }
}

export default Hero;