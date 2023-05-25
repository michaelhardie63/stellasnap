import React from 'react';

const Button = ({ color, text, onClick, textColor }) => {
  	return (
    	<button className={`bg-${color}-500 text-${textColor} py-1 px-2`} onClick={onClick}>
      	{text}
    	</button>
  	);
};

export default Button;
