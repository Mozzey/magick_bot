import React, { Component } from "react";
import { BasicBot } from "./bot/basicBot";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <button
          style={{ width: "100px", height: "50px", backgroundColor: "green" }}
          onClick={() => BasicBot()}
        >
          Start Bot
        </button> */}
      </div>
    );
  }
}

export default App;
