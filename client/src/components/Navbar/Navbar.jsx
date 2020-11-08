import React from "react";
import Books from "../../containers/Books/Books";
import Saved from "../../containers/pages/savedController";
import Search from "../../containers/pages/searchController";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <li className="nav-item">
            <Link to="Books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Search" className="nav-link">
              Search New Book
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Saved" className="nav-link">
              Saved Books
            </Link>
            <Router>
            <Navbar />
            <Switch>
              <Route exact path="/Saved" component={Saved} />
              <Route exact path="/Search" component={Search} />
              <Route exact path="/" component={Books} />
            </Switch>
            </Router>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
