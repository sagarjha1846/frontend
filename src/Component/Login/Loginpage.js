import React from "react";
import { Router, Route } from "react-router";
import { Switch } from "@mui/material";
import Login from "./Login";
function Loginpage() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Loginpage;
