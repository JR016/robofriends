import React from "react";

/*Special React Stuff
    props: Object properties
    state: State of React Components
    children: Children of React Components
     */

const Scroll = (props) => 
{
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: "800px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;