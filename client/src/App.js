import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Saved from "../src/pages/savedController";
import Search from "../src/pages/searchController";

function App() {
  return (
    <div>
      <Router>
            <Navbar />
            <Switch>
              <Route exact path="/books/saved" component={SaveBook} />
              <Route exact path="/books/search" component={SearchBook} />
              <Route exact path="/books" component={AllBooks} />
              <Route exact path="/" component={Home} />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
