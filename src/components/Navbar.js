import React, { Component } from "react";
import "./css/Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="navbar__brand">Magick_Bot</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
