import React from "react";
import "./style/playerlistHolder.css";

const PlayerListHolder = props => (
  <div className="playerlist-holder">
    {props.children}
  </div>
)

export default PlayerListHolder;