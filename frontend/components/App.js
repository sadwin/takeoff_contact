import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AnimatedSwitch, spring } from 'react-router-transition';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Dashboard from './contacts/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import MainRoute from './common/MainRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Alerts />
            <div>
              <AnimatedSwitch
                {...pageTransitions}
                runOnMount={location.pathname === '/'}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              >
                <MainRoute exact path="/" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
              </AnimatedSwitch>
            </div>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
