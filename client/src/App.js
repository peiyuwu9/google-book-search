import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoSearch from "./pages/NoSearch";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoSearch} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App;