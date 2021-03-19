import { Component } from 'react';

import { axiosClient } from '@/utils/axios';

import AppNotification from '@/components/Notifications/Notification/Notification';

import classes from '@/components/Notifications/Notifications.module.scss';

const messages = {
  'create-order-success': 'Your order has been created successfully',
  'create-order-error':
    'There was a problem creating your order, please try again',
  'success-default': 'Successful operation',
  'error-default': 'Something went wrong',
};

class AppNotifications extends Component {
  state = {
    notifications: [],
  };

  componentDidMount () {
    axiosClient.interceptors.response.use(
      response => {
        if (response.status === 200) {
          const message =
            response.config.headers.request === 'create-order'
              ? messages['create-order-success']
              : messages['success-default'];

          this.setNotification('success', message);
        }

        return response;
      },
      error => {
        const message =
          error.config.headers.request === 'create-order'
            ? messages['create-order-error']
            : messages['error-default'];

        this.setNotification('error', message);

        throw error;
      }
    );
  }

  addNotification = notification => {
    this.setState(state => {
      const notifications = [...state.notifications];
      notifications.push(notification);

      return {
        notifications,
      };
    });
  };

  deleteNotification = id => {
    this.setState(state => {
      const notifications = state.notifications.filter(
        notification => {
          clearTimeout(notification.timeoutId);
          return notification.id !== id;
        }
      );

      return {
        notifications,
      };
    });
  };

  setNotification = (type, message) => {
    const notification = { type, message };
    const notificationId = Date.now();
    const timeoutId = setTimeout(
      this.deleteNotification,
      5000,
      notificationId
    );

    notification.id = notificationId;
    notification.timeoutId = timeoutId;

    this.addNotification(notification);
  };

  render () {
    return (
      <div className={classes.Notifications}>
        {this.state.notifications.map(
          ({ message, type, id }, index) => (
            <AppNotification
              onDismiss={() => {
                this.deleteNotification(id);
              }}
              key={index}
              message={message}
              type={type}
            />
          )
        )}
      </div>
    );
  }
}

export default AppNotifications;
