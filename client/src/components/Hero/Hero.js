import React, { Component } from "react";
import coffee from './coffee.jpg';
import Scrollchor from 'react-scrollchor';


const displayHeroText = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
};

class Hero extends Component {

  // components should include:
  // Projects/work
  // Contact
  // About me section
  // Languages to show experience
  // languages I am focused on

  render() {
    const heroStyle = {
      backgroundImage: 'url(' + coffee + ')',
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
        <section style={Object.assign({}, heroStyle, this.props.style)}>
          <div style={displayHeroText}>
            <h1 >Hi! Josh</h1>
            <h2>Learn more about me</h2>
            <button><Scrollchor 
                to="#portfolio" 
                className="nav-link" 
                animate={{offset: 10, duration: 700}}>Seem more info</Scrollchor></button>
          </div>
        </section>
    )
  }
}

export default Hero;