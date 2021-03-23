import { Component } from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '@/layouts/Main/MainLayout';

import Orders from '@/pages/Orders/Orders';
import Checkout from '@/pages/Checkout/Checkout';
import BurgerBuilder from '@/pages/BurgerBuilder/BurgerBuilder';

import Aux from '@/components/App/Aux/Aux';
import AppModal from '@/components/App/Modal/AppModal';
import AppNotifications from '@/components/Notifications/Notifications';

class App extends Component {
  state = {
    modal: {
      component: null,
      isActive: false,
      title: '',
    },
    notifications: [],
  };

  handleModalClose = () => {
    this.setState(state => {
      const modal = { ...state.modal };
      modal.isActive = false;

      return {
        modal,
      };
    });
  };

  handleModalOpenWith = ({ component, title }) => {
    this.setState(state => {
      const modal = { ...state.modal };
      modal.component = component;
      modal.title = title;
      modal.isActive = true;

      return {
        modal,
      };
    });
  };

  handleAddNotification = notification => {
    this.setState(state => {
      const notifications = [...state.notifications];
      notifications.push(notification);

      return {
        notifications,
      };
    });
  };

  handleDeleteNotification = id => {
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

  handleSetNotification = (type, message) => {
    const notification = { type, message };
    const notificationId = Date.now();
    const timeoutId = setTimeout(
      this.handleDeleteNotification,
      5000,
      notificationId
    );

    notification.id = notificationId;
    notification.timeoutId = timeoutId;

    this.handleAddNotification(notification);
  };

  BurgerBuilderComponent = props => (
    <BurgerBuilder
      {...props}
      modal={{
        onModalClose: this.handleModalClose,
        onModalOpenWith: this.handleModalOpenWith,
      }}
    />
  );

  CheckoutComponent = props => (
    <Checkout
      {...props}
      notifications={{
        onSetNotification: this.handleSetNotification,
        onDeleteNotification: this.handleDeleteNotification,
      }}
    />
  );

  render () {
    return (
      <Aux>
        <MainLayout>
          <Route
            path="/"
            exact={true}
            component={this.BurgerBuilderComponent}
          />
          <Route
            exact={true}
            path="/checkout"
            component={this.CheckoutComponent}
          />
          <Route exact={true} path="/orders" component={Orders} />
        </MainLayout>
        {this.state.modal.isActive && (
          <AppModal
            onClose={this.handleModalClose}
            title={this.state.modal.title}
            component={this.state.modal.component}
          />
        )}
        <AppNotifications
          notifications={this.state.notifications}
          onSetNotification={this.handleSetNotification}
          onDeleteNotification={this.handleDeleteNotification}
        />
      </Aux>
    );
  }
}

export default App;
