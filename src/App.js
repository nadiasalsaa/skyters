import {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './pages/login';
import Homepage from './pages/homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
          </Switch>
          </div>
        </Router>
      );
    }
}

export default App;
