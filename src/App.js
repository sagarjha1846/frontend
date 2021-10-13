import "./App.css";
import { useState } from "react";
import Login from "./Component/Login/Login";
import Signup from "./Component/SignUp/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [loginClicked, setLoginClicked] = useState(true);
  return (
    <div className="App">
      {loginClicked === true ? (
        <Router>
          <Switch>
            <Route path="/">
              <Login
                setLoginClicked={setLoginClicked}
                loginClicked={loginClicked}
              />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/">
              <Signup
                loginClicked={loginClicked}
                setLoginClicked={setLoginClicked}
              />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
