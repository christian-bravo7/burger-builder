import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import proptypes from 'prop-types';

import MainLayout from '@/layouts/Main/MainLayout';

import Orders from '@/pages/Orders/Orders';
import Checkout from '@/pages/Checkout/Checkout';
import BurgerBuilder from '@/pages/BurgerBuilder/BurgerBuilder';

import Aux from '@/components/App/Aux/Aux';
import AppModal from '@/components/App/Modal/AppModal';
import AppNotifications from '@/components/Notifications/Notifications';

import {
  DISPLAY_MODAL_WITH_COMPONENT,
  HIDDE_MODAL,
} from '@/store/actions/modal';
import {
  ADD_NOTIFICATION,
  DELETE_NOTIFICATION,
} from './store/actions/notifications';

class App extends Component {
  handleSetNotification = (type, message) => {
    const notification = { type, message };
    const notificationId = Date.now();
    const timeoutId = setTimeout(
      this.props.onDeleteNotification,
      5000,
      notificationId
    );

    notification.id = notificationId;
    notification.timeoutId = timeoutId;

    this.props.onAddNotification(notification);
  };

  render () {
    return (
      <Aux>
        <MainLayout>
          <Route path="/" exact={true} component={BurgerBuilder} />
          <Route
            exact={true}
            path="/checkout"
            render={props => {
              return (
                <Checkout
                  {...props}
                  onSetNotification={this.handleSetNotification}
                />
              );
            }}
          />
          <Route exact={true} path="/orders" component={Orders} />
        </MainLayout>
        {this.props.isModalActive && <AppModal />}
        <AppNotifications
          onSetNotification={this.handleSetNotification}
        />
      </Aux>
    );
  }
}

App.propTypes = {
  isModalActive: proptypes.bool,
  modalComponent: proptypes.element,
  modalTitle: proptypes.string,
  displayModalWithComponent: proptypes.func,
  hiddeModal: proptypes.func,
  onDeleteNotification: proptypes.func,
  onAddNotification: proptypes.func,
};

const mapStateToProps = state => {
  return {
    isModalActive: state.modal.isActive,
    modalComponent: state.modal.component,
    modalTitle: state.modal.title,
  };
};

const mapActionsToProps = dispatch => {
  return {
    displayModalWithComponent: ({ component, title }) => {
      dispatch({
        type: DISPLAY_MODAL_WITH_COMPONENT,
        payload: { component, title },
      });
    },
    hiddeModal: () => dispatch({ type: HIDDE_MODAL }),
    onAddNotification: notification => {
      dispatch({ type: ADD_NOTIFICATION, payload: { notification } });
    },
    onDeleteNotification: notificationId => {
      dispatch({
        type: DELETE_NOTIFICATION,
        payload: { notificationId },
      });
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
