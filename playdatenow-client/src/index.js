import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store";
import { Provider } from 'react-redux';
import {fetchUsers} from './redux/actions/users'
import { fetchUserPlaydates } from "./redux/actions/users";
import {fetchPlaydates} from './redux/actions/playdates'



let newStore = store();

newStore.dispatch(fetchUsers());
newStore.dispatch(fetchPlaydates());
newStore.dispatch(fetchUserPlaydates(1));


ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
