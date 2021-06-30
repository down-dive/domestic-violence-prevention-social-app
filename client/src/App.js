import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Profile from './pages/Profile';
import Friends from './pages/Friends';


function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <div className="container">
        <Switch>
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/friends" component={Friends} />
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
