import { combineReducers, createStore } from 'redux';

import modalReducer from '@/store/reducers/modal';
import notificationsReducer from '@/store/reducers/notifications';

const reducers = combineReducers({
  modal: modalReducer,
  notifications: notificationsReducer,
});

const store = createStore(reducers);

export default store;
