import React from "react";


function Content(props ){
    return <div className="note">
       <p> {props.value}</p>
    </div>
}
export default Content;