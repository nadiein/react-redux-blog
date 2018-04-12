import './styles/app.scss';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from './app/reducers';

import Layout from "./app/components/Layout";
import Articles from "./app/components/Articles";
import Article from "./app/components/Article";

const muiTheme = createMuiTheme({});
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={store}>
        <Router history={history}>
          <div>
            <Route component={Layout}>
                <Route path="/" component={Articles} />
            </Route>
            <Route path="/articles/:id" component={Article} />
          </div>
        </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
