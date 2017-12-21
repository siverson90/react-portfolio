import React, { Component } from "react";
import { StickyContainer, Sticky } from 'react-sticky';
// import NavBar from '../Navbar';

const stickyStyle = {
}
class NavWrapper extends Component {

render() {
    return (
      <StickyContainer>
        <Sticky>
          {
            () => {
              return (
                <NavBar style={stickyStyle}/>
              )
            }
          }
        </Sticky>
      </StickyContainer>
    );
  }
}

export default NavWrapper;