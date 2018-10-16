import React from "react";
import "./style/gif.css";

const Gif = props => (
  <div className="gif-component" onClick={props.onClick} key={props.user}>
    <img src={props.src} className="gif-preview" data={props.user} alt=""/>
  </div>
)

export default Gif;