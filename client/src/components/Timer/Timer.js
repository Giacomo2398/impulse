import React from "react";

class Timer extends React.Component {

  //Set state and countdown function

render() {
  return (
    <div>
      <i id="timer-icon" className="fas fa-stopwatch"></i>
      <span className="loading-screen-timer">{/*countdown*/}</span>
    </div>
    )
  }
}

export default Timer;