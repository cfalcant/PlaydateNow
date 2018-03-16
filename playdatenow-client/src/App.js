import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from '././components/TopNav';
import Home from '././components/Home';
import Playdates from '././components/Playdates';
import MyPlaydates from '././components/MyPlaydates';
import Logout from "././components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/playdates" component={Playdates} />
            <Route path="/users/:id/playdates" component={MyPlaydates} />
            <Route path="/logout" component={Logout}/>
          </Switch>
        </div>
      </Router>
     ) 
  }
}

export default App;
