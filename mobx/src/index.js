import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import MealsStore from './stores/MealsStore';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const mealsStore = new MealsStore();

ReactDOM.render(
  <Provider mealsStore={mealsStore}>
    <React.Fragment>
      <App />
      <DevTools />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
