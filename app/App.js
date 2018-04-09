import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import reducers from './reducers/';

import TopContainer from "./components/TopContainer";
import SampleContainer from "./components/SampleContainer";

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
            <Route exact path="/" component={TopContainer} />
            <Route path="/articles" component={SampleContainer} />
          </div>
        </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
