import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import Notfound from "./Components/NotFound/NotFound";
import Payment from "./Components/Payment/Payment";
import Login from "./Components/User/Login";
import Profile from "./Components/User/Profile";
import Register from "./Components/User/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route exact path="/home" >
          <Home></Home>
        </Route>
        <Route exact path="/register" >
          <Register></Register>
        </Route>
        <Route exact path="/login" >
          <Login></Login>
        </Route>

        <Router exact path="/package/payment/:name">
          <Payment></Payment>
        </Router>

        <Router exact path="/admin">
          <Admin></Admin>
        </Router>

        <Router exact path="/profile">
          <Profile></Profile>
        </Router>



        <Route path="*" >
          <Notfound></Notfound>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
