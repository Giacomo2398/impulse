import React, { Component } from "react";
import "./style/winnerPage.css";

class WinnerPage extends Component {
  state = {
    judge: "",
    gif: "",
    winner: "",
    winnerColor: "",
    userJudge: ""
  }

	componentDidMount = () => {
    this.setState({gif: this.props.winner.gif})
    this.setState({winner: this.props.winner.member.name})
    this.setState({winnerColor: this.props.winner.member.color})
    this.setState({judge: this.props.judge})
    this.setState({userJudge: this.props.userJudge})  
  }
  
  componentDidUpdate = () => {
    if (this.props.winner.member.name !== this.state.winner) {
      this.setState({winner: this.props.winner.member.name})
    }

    if (this.props.winner.member.color !== this.state.winnerColor) {
      this.setState({winnerColor: this.props.winner.member.color})
    }

    if (this.props.winner.gif !== this.state.gif) {
      this.setState({gif: this.props.winner.gif})
    }

    if (this.props.judge !== this.state.judge) {
      this.setState({judge: this.props.judge})
    }

    if (this.props.userJudge !== this.state.userJudge) {
      this.setState({userJudge: this.props.userJudge})
    }
  }

  startGame = () => {
    const self = this
    self.props.socket.emit('startnextround')
  }

	render() {
		return (
			<div className="winnerScreen-component">

        <div className="theme-and-category" id="winner-pg-prompt"> 
            <p className="theme-prompt" id="winner-pg-theme">{this.props.theme}</p>
            <p className="category-prompt" id="winner-pg-category">{this.props.category}</p>
        </div>

        <div className="winning-gif-holder">
          <img className="winning-gif" src={this.state.gif} alt=""/>
        </div>

        <h1 className="winner-name">{this.state.winner} wins!</h1>

        <span className="btn">
          { this.state.userJudge ? 
            <p className="next-round-btn" onClick={this.startGame}>Next Round</p>
          : null}
        </span>

      </div>
			);
	}
}

export default WinnerPage;