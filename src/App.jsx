import { useState } from "react";
import { Button } from "./components/Button";
import { InputComponent } from "./components/InputComponent";

export const App=()=> {
  const [count, setCount] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [countHasStarted, setCountHasStarted] = useState(false);
  
 const handleInputShow = () => {
  setCount(0);
  setShowInput(true);
  setInputValue("")
  setCountHasStarted(false)
}
 const resetNoInput = () => {
  setShowInput(false);
  setCount(0);
  setCountHasStarted(true);
}
const handleInputChange = (event) => {
  setInputValue(event.target.value)
}
const handleCounting = () =>{
  if(showInput && !countHasStarted){
    setCount(Number(inputValue) || 0);
    setCountHasStarted(true);
  }
  else{
    setCount(prevCount=>prevCount+1);
  }
}
  return(
    <div style={{alignItems:'center', justifyContent:'center', display:'flex', margin:'30px, 0, 30px, 0', flexDirection:'column'}}>
    <p>Do you wish to enter a number to start the count?</p>
    <Button 
      onYesClick={handleInputShow}
      onNoClick={resetNoInput}
      />
    {/* If yes ---> then show input text and calculate from the number given*/}
    {showInput && (<InputComponent
      inputValue={inputValue}
      handleInputChange={handleInputChange}
    />)}
    <button onClick={handleCounting}>Increment</button>
    <p>{count}</p>
    </div>

  )
}

export default App;
