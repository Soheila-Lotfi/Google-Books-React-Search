import React from "react";

export function Container({ fluid, children }) {
    return <div className={`container ${fluid ? "-fluid" : " "}`}></div>

}

export function Row({ fluid, children }) {

    return <div className={`row${fluid ? "-fluid" : ""}`}></div>
}

