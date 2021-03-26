import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from '@/App';
import reportWebVitals from '@/reportWebVitals';

import modalReducer from '@/store/reducers/modal';
import notificationsReducer from '@/store/reducers/notifications';

import '@/index.scss';

const reducers = combineReducers({
  modal: modalReducer,
  notifications: notificationsReducer,
});

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
