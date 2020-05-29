import React from 'react';
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">

     <Navigation/> 
     <Switch>
     <Route path ="/:page" />
     <Route path ="/" render = {()=> <Redirect to ="/home" />} />
     <Route omponent = {() => 404 }/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
