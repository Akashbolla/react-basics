import React,{useState,useEffect} from 'react';

function Quote(){
const[quote,setQuote]=useState("");
useEffect(()=>{
   
    fetch("https://dummyjson.com/quotes/1")
    .then((res)=>res.json())
    .then((data)=>{
        setQuote(data.quote);
    })
    .catch((err)=>console.log("errorfetching quote",err));
},[]);
return(
    <div>
        <h2>Quote of the day</h2>
        <p>{quote}</p>
    </div>
);

}
export default Quote;