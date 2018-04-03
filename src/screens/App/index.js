import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Navbar from 'components/Navbar';
import routes from 'routes';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
