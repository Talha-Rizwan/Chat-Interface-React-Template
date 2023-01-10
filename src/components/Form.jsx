import React, { useState } from "react";

function Form(props){

    const [val,setval] = useState("");

    function ftn(e){
        e.preventDefault();
        props.toAdd(val);
        setval("");

    }
    function handleChange(event){
        console.log(event.target.value);
        setval(event.target.value);

    }

    return (
        <div className="textbox">
        <form>
            <input onChange={handleChange} type="text" placeholder="write a message..." name="message" value={val}></input>
            <button onClick={ftn}>Post</button>
        </form>
        </div>
    );
}


export default Form;
// onChange={(e)={
//     return( setval(e.target.value));
//  }}