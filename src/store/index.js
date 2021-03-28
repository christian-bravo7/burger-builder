import { combineReducers, createStore } from 'redux';

import modalReducer from '@/store/reducers/modal';
import notificationsReducer from '@/store/reducers/notifications';
import burgerReducer from '@/store/reducers/burger';

const reducers = combineReducers({
  modal: modalReducer,
  notifications: notificationsReducer,
  burger: burgerReducer,
});

const store = createStore(reducers);

export default store;
