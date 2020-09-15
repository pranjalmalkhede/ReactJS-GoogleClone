import React from "react";
import "./App.css";
import GoogleClone from "./google-clone/Google-Clone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/google" component={GoogleClone}></Route>
          <Route path="/">
            <p>homepage</p>
            <Link to='/google'>Google</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
