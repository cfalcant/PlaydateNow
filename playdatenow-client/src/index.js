import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store";
import { Provider } from 'react-redux';
import {fetchUsers} from './redux/actions/users'
import { fetchUserPlaydates } from "./redux/actions/users";
import {fetchPlaydates} from './redux/actions/playdates'
import {addPlaydate} from './redux/actions/playdates'



let newStore = store();

newStore.dispatch(fetchUsers());
newStore.dispatch(fetchPlaydates());
newStore.dispatch(fetchUserPlaydates(1));
newStore.dispatch(addPlaydate());


ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
