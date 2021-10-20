import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/register'>
          <Register/>
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    </Router>
  )
  
}

export default App;
