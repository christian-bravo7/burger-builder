import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '@/store/actions/notifications';

const initialState = {
  notifications: [],
};

const notificationsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_NOTIFICATION:
      return addNotification(state, payload);
    case DELETE_NOTIFICATION:
      return deleteNotification(state, payload);
    default:
      return state;
  }
};

export default notificationsReducer;

const addNotification = (state, { notification }) => {
  const notifications = [...state.notifications];

  notifications.push(notification);

  return {
    ...state,
    notifications,
  };
};

const deleteNotification = (state, { notificationId }) => {
  const notificationsCopy = [...state.notifications];

  const notifications = notificationsCopy.filter(
    notification => notification.id !== notificationId
  );

  return {
    ...state,
    notifications,
  };
};
