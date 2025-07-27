import REACT from 'react';

function InputComponent({onTextChange}){

    return(
        <input type="text"
        placeholder="Type something"
        onChange={(e)=>onTextChange(e.target.value)}/>
    );
}
export default InputComponent;