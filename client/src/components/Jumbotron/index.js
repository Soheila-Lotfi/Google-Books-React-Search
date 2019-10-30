import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "green"}}
            className="jumbotron"
        >

{/* background-color: #8f7de2bd;
    color: white;
    font-family: "Cormorant SC */}
            <h1>(React) Google Books Search</h1>
            <h2>Search for and Save Books of Interest</h2>
        </div>
    );
}

export default Jumbotron;
