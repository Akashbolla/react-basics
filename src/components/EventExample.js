import REACT ,{ useState } from 'react'

function EventExample(){
  const[name,setValue]=useState("");
  const handleChange=(e)=>{
    setValue(e.target.value);
  };
  return(
  <div>
  <input type="text" onChange={handleChange}/>
{name}
</div>);
}
export default EventExample;