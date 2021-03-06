import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import proptypes from 'prop-types';

import AppNotification from '@/components/Notifications/Notification/Notification';

import { axiosClient } from '@/utils/axios';

import { deleteNotification } from '@/store/actionCreators/notifications';

import classes from '@/components/Notifications/Notifications.module.scss';

const messages = {
  'create-order-success': 'Your order has been created successfully',
  'create-order-error':
    'There was a problem creating your order, please try again',
  'success-default': 'Successful operation',
  'error-default': 'Something went wrong',
};

class AppNotifications extends Component {
  componentDidMount () {
    axiosClient.interceptors.response.use(
      response => response,
      error => {
        const message =
          error.config.headers.request === 'create-order'
            ? messages['create-order-error']
            : messages['error-default'];

        this.props.onSetNotification('error', message);

        throw error;
      }
    );
  }

  render () {
    return (
      <div className={classes.Notifications}>
        {this.props.notifications.map(
          ({ message, type, id }, index) => (
            <AppNotification
              onDismiss={() => {
                this.props.deleteNotification(id);
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

AppNotifications.propTypes = {
  notifications: proptypes.array,
  onSetNotification: proptypes.func.isRequired,
  deleteNotification: proptypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    notifications: state.notifications.notifications,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ deleteNotification }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNotifications);
