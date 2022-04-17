import React from "react";

const Button = (props) => {
    return <button className={`btn btn-${props.name} fa fa-${props.icon}`}
        type={props.type}
        onClick={props.onclick}>        
    </button>
}

export default Button