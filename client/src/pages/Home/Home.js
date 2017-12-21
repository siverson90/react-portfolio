import React, { Component } from "react";
import Hero from '../../components/Hero';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Technology from '../../components/Technology';
import NavBar from '../../components/Navbar';

 const sectionStyle = {
      width: "100wh",
      height: "100vh",
      display: "flex"
    }

class Home extends Component {

  // components should include:
  // Portfolio/work
  // Contact
  // About me section
  // Languages to show experience
  // languages I am focused on

  render() {

    return (
      <div>
      <NavBar />
        <div>
          <Hero 
            style={sectionStyle}
          />
          <Portfolio 
            style={sectionStyle}
          />
          <Technology 
            style={sectionStyle}
          />
           <Contact 
            style={sectionStyle}
          />
        </div>
      </div>
    )
  }
}

export default Home;