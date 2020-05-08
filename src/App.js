import React from 'react';
import './App.css';
import Home from './pages/Home'
import Navig from './components/Navig'
import Login from './pages/login'
import Register from './pages/register'
import Landing from './pages/Landing'
import Pagenotfound from './pages/pagenotfound'
import Greeting from './pages/greeting'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Merchant from './pages/Mapmerchant'



function App() {
  return (
    <div>
        <Navig/>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/merchant" component={Merchant}/>          
          <Route exact path="/landing" component={Landing}/>
          <Route exact path="/greeting" component={Greeting}/>
          <Route component={Pagenotfound}/>
      </Switch> 
      
      </div>
  );
}
export default App;