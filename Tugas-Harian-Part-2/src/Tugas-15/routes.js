import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Tugas9 from '../Tugas-9/tugas9'
import Tugas10 from '../Tugas-10/tugas10'
import Tugas11 from '../Tugas-11/tugas11'
import Tugas12 from '../Tugas-12/tugas12'
import Tugas13 from '../Tugas-13/tugas13'
import Tugas14 from '../Tugas-14/Buah'
import Home from './home'

const Routes = () => {
  return (
    <>
      <div>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/tugas9" component={Tugas9}/>
        <Route exact path ="/tugas10" component={Tugas10}/>
        <Route exact path ="/tugas11" component={Tugas11}/>
        <Route exact path ="/tugas12" component={Tugas12}/>
        <Route exact path ="/tugas13" component={Tugas13}/>
        <Route exact path ="/tugas14" component={Tugas14}/>
      </Switch>
      </div>
    </>
  );
};

export default Routes;