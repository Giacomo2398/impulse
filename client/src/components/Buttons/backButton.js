import React, { Component } from "react";
import "./style/buttons.css";

class BackBtn extends Component {

  backFunction = () => {
    console.log("back-it-up button has been clicked")
    window.location.href = "/"
  }

  render() {
    return(
      <span className="btn back-btn" onClick = {this.backFunction}>
        Home
      </span>
    )
  }

}

export default BackBtn;