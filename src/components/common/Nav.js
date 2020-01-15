import React from "react";
import "../../css/nav.css";

function Nav(props) {
  return (
    <nav id="navbar" className="nav">
      <ul className="nav-list">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
