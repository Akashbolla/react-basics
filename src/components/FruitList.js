import REACT from'react';
 
function FruitList(){

    const fruit=["mango","apple","banana","grapes"];
    return(
<ol>
    {fruit.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
    ))}
</ol>
    );
}
export default FruitList;