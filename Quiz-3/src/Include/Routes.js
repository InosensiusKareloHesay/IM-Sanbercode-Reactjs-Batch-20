import React, { useContext } from "react";
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from '../Page/Home'
import About from '../Page/About'
import Buku from '../Page/Buku'
import Login from '../Page/Login'
import {UserContext} from '../Context/UserContext'

const Routes = () => {

  const [user] = useContext(UserContext)
  
  const UserRoute = ({user, ...props}) => {
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
        <Route exact path ="/about" user={user} component={About}/>
        <UserRoute exact path ="/book" user={user} component={Buku}/>
        <LoginRoute exact path ="/login" user={user} component={Login}/>
      </Switch>
      </div>
    </>
  );
};

export default Routes;