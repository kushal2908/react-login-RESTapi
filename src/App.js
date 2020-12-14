import Dashboard from "./Components/Pages/Dashboard";
import Login from "./Components/Pages/Login";
import PrivateRoute from "./Components/utils/PrivateRoute";
import PublicRoute from "./Components/utils/PublicRoute";

import {BrowserRouter, NavLink, Route, Switch, } from 'react-router-dom'


function App() {
  return (
    <div> 
      <BrowserRouter>
        <div>
        <NavLink activeClassName='active' to="/"> </NavLink>
        <NavLink activeClassName='active' to="/dashboard"> </NavLink>
        </div>

        <Switch>
          <PublicRoute path='/' component={Login} exact/>
          <PrivateRoute path='/dashboard' component={Dashboard}  exact />
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
