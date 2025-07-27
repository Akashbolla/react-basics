import React from "react";

function Card(props){

    return(
        <div>
            <h1>hi {props.name}</h1>
            <h2>im {props.age}</h2>
            <h3>and {props.msg} you</h3>

        </div>
    );
}
export default Card;