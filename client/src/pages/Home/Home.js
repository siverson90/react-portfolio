import React, { Component } from "react";
import Hero from '../../components/Hero/Hero.js';

class Home extends Component {

  // components should include:
  // Projects/work
  // Contact
  // About me section
  // Languages to show experience
  // languages I am focused on

  render() {
    return (
      <div>
        <Hero />
        <section>
          <h1>Projects</h1>
        </section>
        <section>
          <h1>Technology</h1>
        </section>
         <section>
          <h1>contact</h1>
        </section>
      </div>
    )
  }
}

export default Home;