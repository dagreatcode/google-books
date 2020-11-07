import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="./Home" className="navbar-brand">
        Google-Books
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="books">
            <Link to="./Home" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./search" className="nav-link">
              Search New Book
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./saved" className="nav-link">
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
