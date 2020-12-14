import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken, getUser } from './Common';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <div>
      
      <Route
        {...rest}
        render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
      />

    </div>
    
  )
}
 
export default PublicRoute;