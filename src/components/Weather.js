import REACT,{useState} from 'react';
function Weather(){
const[city,setCity]=useState("");
const[data,setData]=useState(null);

const fetchWeather=()=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=999abd0c978d46e3a64175958252607&q=${city}`)
    .then((res)=>res.json())
    .then((weather)=>setData(weather))
    .catch((err)=>console.error(err));
};
return(
    <div>
        <h1>WEATHER APP</h1>
        <input type="text" value={city} placeholder="enter city" onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={fetchWeather}>get Wheather</button>
    
    {data&& (
        <div>
        <p>Location:{data.location.name}</p>
        <p>Temp:{data.current.temp_c}</p>
        </div>
    )}
    </div>
);


}
export default Weather;