import REACT,{useState, useEffect } from 'react';

function Exercise(){

    useEffect(()=>{
        console.log("component intialoiized")
    },[]);
    const[name,setName]=useState("");
    const handleName=(e)=>{
        setName(e.target.value);
    };
    return(
        <div>
            <input type="text" onChange={handleName}/>
            <p>
                my favorite name is:{name}
            </p>
         
        </div>
    );

}
export default Exercise;