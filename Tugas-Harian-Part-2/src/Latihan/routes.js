import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from '../Latihan/home'
import Satu from '../Latihan/satu'
import Login from '../Latihan/login'

const Routes = () => {

  const [user] = ""
  
  const PrivateRoute = ({user, ...props}) => {
    if (user){
      return <Route {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }

  const LoginRoute = ({user, ...props}) => user ? <Redirect to="/" /> : <Route {...props}/>

  return (
    <>
      <div>
      <Switch>
        <Route exact path ="/" user={user} component={Home}/>
        <LoginRoute exect path ="/login" user={user} component ={Login}/>
        <PrivateRoute exact path ="/satu" user={user} component={Satu}/>
      </Switch>
      </div>
    </>
  );
};

export default Routes;