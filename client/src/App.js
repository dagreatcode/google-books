import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import Books from "./containers/Books/Books";
import Saved from "./containers/pages/savedController";
import Search from "./containers/pages/searchController";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/Saved" component={Saved} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/" component={Books} />
    </Switch>
    </Router>
    </div>

  );
}

export default App;
