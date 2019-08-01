import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withMUI from "./hoc/withMUI";
// import withUser from "./hoc/withUser";
// import withAuthentication from "./hoc/withAuthentication";
// import logo from "./logo.svg";
import "./App.css";
import GameZoneContainer from "./containers/GameZone";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" render={props => <GameZoneContainer {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default withMUI(App);
