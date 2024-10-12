import React from "react";

export const InputComponent = ({inputValue, handleInputChange}) => 
(<input 
      type="text"
      placeholder="Enter a number"
      value={inputValue}
      onChange={handleInputChange}/>
);