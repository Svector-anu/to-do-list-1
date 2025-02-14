import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			This is not the page you're looking for.
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default NotFound;
