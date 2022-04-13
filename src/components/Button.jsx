import React from "react";

const Button = (props) => {
   return <button className={`btn btn-${props.name}`} onClick={() => props.onclick()}><i className={`fa fa-${props.icon}`}></i></button>
}

export default Button