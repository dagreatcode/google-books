import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Book Library
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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="books">
            <NavLink to="/books" className="nav-link">
              Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/books/search" className="nav-link">
              Search New Book
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/books/saved" className="nav-link">
              Saved Books
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
