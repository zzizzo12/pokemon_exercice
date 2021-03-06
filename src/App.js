import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Details from './components/Details';
import DropDowmAbilitys from './components/DropDowmAbilitys';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
