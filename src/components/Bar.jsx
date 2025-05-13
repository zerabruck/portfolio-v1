import React from "react";

function Bar({text, percent}) {
	return (
		<div className="flex justify-between">
			<div>HTML/CSS</div>
			<div className="text-theme-green/75">80%</div>
		</div>
	);
}

export default Bar;
