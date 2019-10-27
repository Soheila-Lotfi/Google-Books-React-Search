import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/searchbook">
        Search
      </a>
      <a className="navbar-brand" href="/Saved">
        Saved
      </a>

    </nav>
  );
}

export default Nav;
