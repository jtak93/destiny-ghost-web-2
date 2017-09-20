import 'semantic-ui-css/semantic.min.css';

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import About from './about'
import Auth from './AuthRedirectPage'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import NavBar from './common/NavBar'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <NavBar />
            <main>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/auth" component={Auth} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
