import React from 'react';
import Navigation from './components/Navigation'
import './styles/base.scss'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageRenderer from './PageRenderer'

function App() {
  const user = {
    firstName: 'EDnotSheeran',
    lastName: ''
  }

  return (
    <Router>
      <div className="App">
        <Navigation user={user}/>
        <Switch>
          <Route path='/:page' component={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
