import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
