import Login from "./Components/Pages/Login";
import PrivateRoute from "./Components/utils/PrivateRoute";
import PublicRoute from "./Components/utils/PublicRoute";
import {BrowserRouter, NavLink, Switch, } from 'react-router-dom'

import Dashboard from "./Components/Pages/Dashboard";

//User Management
import CreateUser from "./Components/Pages/Screens/User/CreateUser";

// Configuaration
import ExchangeHouseInformation from "./Components/Pages/Screens/Configuration/ExchangeHouseInformation";
import ExchangeRate from "./Components/Pages/Screens/Configuration/ExchangeRate";

import Chart from "./Components/Pages/Screens/Chart";
import Table from "./Components/Pages/Screens/Table";
import ExchangeHouseAdd from "./Components/Pages/Screens/Configuration/ExchangeHouseAdd";


function App() {
  return (
    <div> 
      <BrowserRouter>
        <div>
          <NavLink activeClassName='active' to="/"> </NavLink>
          <NavLink activeClassName='active' to="/dashboard"> </NavLink>
          
          <NavLink activeClassName='active' to="/user"> </NavLink>

          <NavLink activeClassName='active' to="/exchange-rate"> </NavLink>
          <NavLink activeClassName='active' to="/exchange-house-information"> </NavLink>
          <NavLink activeClassName='active' to="/exchange-house-add"> </NavLink>

          <NavLink activeClassName='active' to="/chart"> </NavLink>
          <NavLink activeClassName='active' to="/table"> </NavLink>
        </div>

        <Switch>
          <PublicRoute path='/' component={Login} exact/>
          <PrivateRoute path='/dashboard' component={Dashboard}  exact />

          <PrivateRoute path='/user' component={CreateUser}  exact />

          <PrivateRoute path='/exchange-rate' component={ExchangeRate}  exact />
          <PrivateRoute path='/exchange-house-information' component={ExchangeHouseInformation}  exact />
          <PrivateRoute path='/exchange-house-add' component={ExchangeHouseAdd}  exact />

          <PrivateRoute path='/chart' component={Chart }  exact />
          <PrivateRoute path='/table' component={Table }  exact />
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
