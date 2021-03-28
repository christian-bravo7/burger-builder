import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from '@/store/actions/notifications';

const addNotification = notification => ({
  type: ADD_NOTIFICATION,
  payload: { notification },
});

const deleteNotification = notificationId => ({
  type: DELETE_NOTIFICATION,
  payload: { notificationId },
});

export { addNotification, deleteNotification };
