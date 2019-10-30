import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "#f4cd23", color:"white", fontFamily:"Open Sans"}}
            className="jumbotron"
        >

            <h1 style={{fontFamily:"Montserrat"}}>(React) Google Books Search</h1>
            <h4 style={{fontFamily:"Montserrat", marginTop:"15px"}}>Search for and Save Books of Interest</h4>
        </div>
    );
}

export default Jumbotron;
