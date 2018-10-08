//Login Page
import React, { Component } from "react";
//import { SignupBtn, LoginBtn, EnterBtn } from "../../components/Buttons";
//import { Enter } from "../../components/Enter";
//import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";

class Login extends Component {

    //TODO
    //Set state here   state = {}

    //component did mount button

    //validate input for room key login

    //Key down listener to save key to state and validate

    //Generate Random Word using mnGen and save to state

    //Generate Random URL using mnGen

    //Save session data function

    //Load session data function

    //Delete Session Data function

    //Enter game function based on session/word data

    //handle input change to update set state
 
    render() {
        return (
            <div>
                    {/* add buttons */}
                <Modal 
                    className="game-instructions" 
                    id="general-game-instructions" 
                    text="How to Play"
                    modalTitle="How to Play"
                    modalInstructions1= 
                        "If you are starting a new game with friends, click 'Create Game' to generate a unique room key." 
                    modalInstructions2="Click 'Join Game' and enter your room key to start playing. "
                    modalInstructions3="Share your room key with your friends to all play together!"
                ></Modal>

                {/* <button onClick={this.deleteSavedSessions}>Delete Sessions</button> */}
                
            </div>
        );
    }
}

export default Login;