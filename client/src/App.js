import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import Home from "./containers/Home/Home"
import Books from "./containers/Books/Books";
import AllBooks from "./containers/AllBooks/AllBooks"
import Saved from "./containers/pages/savedController";
import Search from "./containers/pages/searchController";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NotFound from './containers/NotFound/NotFound';


function App() {
  return (
    <div>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/AllBooks" component={AllBooks} />
      <Route exact path="/Saved" component={Saved} />
      <Route exact path="/Search" component={Search} />
      <Route component={NotFound} />
    </Switch>
    </Router>
    </div>

  );
}

export default App;
