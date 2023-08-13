import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BecomeComponent = (props) => {
	return (
		<div>
			<div className="btn-wrapper">
				<button className="button">{props.text}</button>
			</div>
		</div>
	);
};

export default BecomeComponent;
