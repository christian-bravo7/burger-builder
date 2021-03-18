import { Component } from 'react';

import { axiosClient } from '@/utils/axios';

import AppNotification from '@/components/Notifications/Notification/Notification';

import classes from '@/components/Notifications/Notifications.module.scss';

class AppNotifications extends Component {
  state = {
    notifications: [],
  };

  componentDidMount () {
    axiosClient.interceptors.response.use(
      response => {
        console.log(response);

        if (response.status === 200) {
          this.setNotification('success', 'Operacion exitosa');
        }

        return response;
      },
      error => {
        this.setNotification('error', error.message);
        throw error;
      }
    );
  }

  setNotification = (type, message) => {
    this.setState(({ notifications }) => {
      const newNotifications = [...notifications];
      newNotifications.push({ message, type });
      return {
        notifications: newNotifications,
      };
    });
  };

  render () {
    return (
      <div className={classes.Notifications}>
        {this.state.notifications.map(({ message, type }, index) => (
          <AppNotification
            key={index}
            message={message}
            type={type}
          />
        ))}
      </div>
    );
  }
}

export default AppNotifications;
