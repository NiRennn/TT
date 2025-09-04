import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">Test Task</div>

      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <Link to="/" className="header__link" onClick={() => setMenuOpen(false)}>
          Главная
        </Link>

      </nav>

      <button
        className={`burger ${menuOpen ? "burger--active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      > 
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
