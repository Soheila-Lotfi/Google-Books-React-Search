import React from "react";


export function Input(props) {
    return <input {...props}>
    </input>


}

export function Formbtn(props) {
    return <button {...props} >{props.children}</button>
}