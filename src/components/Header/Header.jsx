import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"> Fiore dentro di Me 🌸</div>
      <nav className="header__nav">
        <a className="header__nav-link" href="">
          Home
        </a>
        <a className="header__nav-link" href="">
          Gallery
        </a>
        <a className="header__nav-link" href="">
          Purpose
        </a>
        <a className="header__nav-link" href="">
          About us
        </a>
      </nav>
    </header>
  );
}

export default Header;
