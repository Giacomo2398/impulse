import React from "react";
import "./style/BottomNav.css";

const BottomNav = props => (
	<nav className={props.class}>
		<div className="content-holder">
			<i onClick={props.expand} className="fas fa-bars home-button"></i>
		</div>
		{props.children}
	</nav>
);

export default BottomNav;