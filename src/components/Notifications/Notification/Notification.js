import proptypes from 'prop-types';

import classes from '@/components/Notifications/Notification/Notification.module.scss';

const AppNotification = ({ message, type, onDismiss }) => {
  const notificationClasses = {
    success: classes.Notification__IsSuccess,
    error: classes.Notification__IsError,
  };

  return (
    <div
      className={`${classes.Notification} ${notificationClasses[type]}`}
    >
      {message}
      <button
        onClick={onDismiss}
        className={classes.Notification__CloseButton}
      >
        x
      </button>
    </div>
  );
};

AppNotification.propTypes = {
  message: proptypes.string.isRequired,
  type: proptypes.string.isRequired,
  onDismiss: proptypes.func.isRequired,
};

export default AppNotification;
