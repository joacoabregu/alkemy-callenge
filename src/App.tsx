import React, { useEffect } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { setUserState } from "./state/loginSlice";

function App() {
  //let [loggedUser, setloggedUser] = useState<boolean>(true);
  let loggedUser = useSelector((state: RootState) => state.user.user);
  let dispatch = useDispatch();
  useEffect(() => {
    
    if (loggedUser) {
      let loggedUserJson = window.localStorage.getItem("loggedUser");
      if (!loggedUserJson) {
        dispatch(setUserState("logout"));
      } else {
        dispatch(setUserState("login"));
      }
    }
  }, [loggedUser, dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/detail/:id">
          <Hero />
        </Route>

        <Route path="/">
          {loggedUser ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
