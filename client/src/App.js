import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./containers/pages/savedController";
import Search from "./containers/pages/searchController";

function App() {
  return (
    <div>
      <Router>
            <Navbar />
            <Switch>
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/" component={Home} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
