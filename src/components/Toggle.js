import React,{ useState } from "react";

function Toggle(){
  const[isVisible, setIsVisible]= useState(true);

  return (
    <div>
        <button onClick={()=> setIsVisible(!isVisible)}>
            Toggle Greeting
        </button>
        {isVisible && <h3>Hello,I'm Visible</h3>}
    </div>
  );
}
export default Toggle;