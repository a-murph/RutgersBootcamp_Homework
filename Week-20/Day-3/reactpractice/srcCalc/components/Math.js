import React from "react";

const Math = (props) => {
	let result = null;
	switch (props.operator) {
		case "+" :
			result = props.num1 + props.num2;
			break;
			
		case "-" :
			result = props.num1 - props.num2;
			break;
			
		case "*" :
			result = props.num1 * props.num2;
			break;
			
		case "/" :
			result = props.num1 / props.num2;
			break;
	}
	return (
		<span>{result}</span>
	);
}

export default Math;