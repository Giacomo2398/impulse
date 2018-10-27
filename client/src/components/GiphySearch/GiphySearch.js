import React, { Component } from "react";
import API from "../../utils/API";
import Gif from "../Gif/Gif";
import Modal from "../../components/Modal/Modal";
import "./style/GiphySearch.css";

class GiphySearch extends Component {

    //set state
    state = {
        searchTerm: "",
        image_url: "http://via.placeholder.com/500x240/31263E/31263E",
        defaultGif: "https://media.giphy.com/media/DGiZfWmc0HWms/giphy.gif"
    }
  
    //mount component
    componentDidMount = () => {
        console.log("Mounted");
    }
  
    //after everything else loads, when the component updates
    componentDidUpdate = () => {
  
      if (this.props.timer) {
  
          let gifObject = {
              socket: this.props.userSocket,
              gif: this.state.defaultGif
          }
  
          this.props.socket.emit('playeroutoftime', gifObject)
          this.props.outOfTime("pendingMessage", "Players choosing gifs")
          this.props.outOfTime("pendingPlayerHeader", "Players done with challenge")
          this.props.outOfTime("showGiphySearch", false)
          this.props.outOfTime("showPending", true)
  
      }
  
    }

    //make api call and show loading gif
    callGIPHY = () => {
    
        this.setState({image_url: "https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"})
    
        API.getGIF(this.state.searchTerm)
        .then(response => {
            this.setState({
                image_url: response.data.original.url
            });
        })
        .catch(err => console.log(err))
      }
    
      //handle input change
      handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
              [name]: value
          });
      };
    
      //set search term in state
      searchTerm = event => {
        const value = event.target.value;
        this.setState({
            searchTerm: value
        });
      }
    
      //confirm button
      confirmSelection = () => {
    
        if (this.state.image_url !== "http://via.placeholder.com/500x240/31263E/31263E") {
        //That gif
        let gifObject = {
            socket: this.props.userSocket,
            gif: this.state.image_url
        }
    
        //SOCKET FUN!
        this.props.socket.emit('playergifchosen', gifObject)
        this.props.outOfTime("pendingMessage", "Players choosing gifs")
        this.props.outOfTime("pendingPlayerHeader", "Players done with challenge")
        this.props.outOfTime("outOfTime", false)
        this.props.outOfTime("showTimer", false)
        this.props.outOfTime("showGiphySearch", false)
        this.props.outOfTime("showPending", true)
        }
      }
    
      render() {
        return (
            <div className="giphy-component">    
              <Modal
                  className="game-instructions"
                  id="giphy-search-instructions"
                  text="?"
                  modalTitle="What Now?"
                  modalInstructions1="Try to find the perfect gif by entering a search term or phrase into the search bar. Click on the magnifying glass to search. You will be returned one gif at a time. If you like the gif, click the check mark button. If you want to shuffle, click the reload button."
                  modalInstructions2="If you want to search a different term or phrase, just use the search bar again."
                  modalInstructions3= "Be sure to choose a gif before the time runs out!"
              >
              </Modal>
  
              <p className="judge" id="giphy-search-judge" style={{backgroundColor:'#C0C0C0'}}><i className="fas fa-gavel"></i> {this.props.judge}</p>
              
              <div className="theme-and-category" id="giphy-search-prompt"> 
                  <p className="theme-prompt" id="giphy-theme-prompt">{this.props.theme}</p>
                  <p className="category-prompt">{this.props.category}</p>
              </div>
  
                <div className="search-holder">
                  <input name="giphySearchBar" onChange={this.searchTerm} type="text" />
                  <div onClick={this.callGIPHY} className="search-button">
                      <i className="fas fa-search"></i>
                  </div>
                  <Gif src={this.state.image_url}/>
  
                  <div className="button-holder">
                      <div className="timer-placeholder">
                          <span className="timer">{this.props.children}</span>
                      </div>
                      <div className="button research" onClick={this.callGIPHY}>
                          <i className="fas fa-redo"></i>
                      </div>
                      <div className="button confirm" onClick={this.confirmSelection}>
                          <i className="fas fa-check"></i>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
  }
    
    export default GiphySearch;