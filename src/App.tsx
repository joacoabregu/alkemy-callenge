import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  let [loggedUser, setloggedUser] = useState<boolean>(true);
  useEffect(() => {
    console.log(loggedUser);
    if (loggedUser) {
      let loggedUserJson = window.localStorage.getItem("loggedUser");
      if (!loggedUserJson) {
        console.log("no esta loggeado");
        setloggedUser(false);
      } else {
        console.log("loggeado");

        setloggedUser(true);
      }
    }
  }, [loggedUser]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          {loggedUser ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
