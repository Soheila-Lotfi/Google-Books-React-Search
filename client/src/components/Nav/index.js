import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a  style={{position:"absolute", right:"80px"}} className="navbar-brand" href="/searchbook">
        Search
      </a>
      <a style={{position:"absolute", right:0}} className="navbar-brand" href="/Saved">
        Saved
      </a>

    </nav>
  );
}

export default Nav;
