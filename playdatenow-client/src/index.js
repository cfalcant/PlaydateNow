import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store";
import { Provider } from 'react-redux';
import {fetchUsers} from './redux/actions/users'


let newStore = store();

newStore.dispatch(fetchUsers());



ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
