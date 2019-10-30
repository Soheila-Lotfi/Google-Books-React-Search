import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
      <a style={{fontFamily:"Open Sans"}}className="navbar-brand" href="/">
        Google Books
      </a>
      <a style={{position:"absolute", right:"5vw", fontFamily:"Open Sans"}} className="navbar-brand" href="/Saved">
        Saved
      </a>
      <a  style={{position:"absolute", left:"80vw",fontFamily:"Open Sans"}} className="navbar-brand" href="/searchbook">
        Search
      </a>
      

    </nav>
  );
}

export default Nav;
