import proptypes from 'prop-types';

import classes from '@/components/Notifications/Notification/Notification.module.scss';

const AppNotification = ({ message, type }) => {
  const notificationClasses = {
    success: classes.Notification__IsSuccess,
    error: classes.Notification__IsError,
  };

  return (
    <div
      className={`${classes.Notification} ${notificationClasses[type]}`}
    >
      {message}
    </div>
  );
};

AppNotification.propTypes = {
  message: proptypes.string.isRequired,
  type: proptypes.string,
};

export default AppNotification;
