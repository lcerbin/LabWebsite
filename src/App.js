import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home.js'
import GetInvolved from './components/GetInvolved.js'
import Links from './components/Links.js'
import Members from './components/Members.js'
import Research from './components/Research.js'
import Teaching from './components/Teaching.js'
import Navigation from './components/Navigation.js'
import Publications from './components/Publications.js'



class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/getinvolved" component={GetInvolved} />
            <Route path="/links" component={Links} />
            <Route path="/members" component={Members} />
            <Route path="/research" component={Research} />
            <Route path="/teaching" component={Teaching} />
            <Route path="/publications" component={Publications} />
          </Switch>
        </div>
      </BrowserRouter>
      )
    }
  }


export default App;
