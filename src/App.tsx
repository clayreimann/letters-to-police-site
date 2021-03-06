import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Main from "./pages/main/Main";
import Letters from "./pages/letters/Letters";
import { to } from "./helpers";

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container container mx-auto pb-4">
        <div className="app-content">
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Route path={to("/letters")}>
              <Letters />
            </Route>
            {/* <Route path="/contact">
              <Contact />
            </Route> */}
            <Route path={to("/")} exact>
              <Main />
            </Route>
            <Redirect to={to("/")} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
