import proptypes from 'prop-types';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainLayout from '@/layouts/Main/MainLayout';

import Orders from '@/pages/Orders/Orders';
import Checkout from '@/pages/Checkout/Checkout';
import BurgerBuilder from '@/pages/BurgerBuilder/BurgerBuilder';

import Aux from '@/components/App/Aux/Aux';
import AppModal from '@/components/App/Modal/AppModal';
import AppNotifications from '@/components/Notifications/Notifications';

import {
  addNotification,
  deleteNotification,
} from '@/store/actionCreators/notifications';

class App extends Component {
  handleSetNotification = (type, message) => {
    const notification = { type, message };
    const notificationId = Date.now();
    const timeoutId = setTimeout(
      this.props.deleteNotification,
      5000,
      notificationId
    );

    notification.id = notificationId;
    notification.timeoutId = timeoutId;

    this.props.addNotification(notification);
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
  deleteNotification: proptypes.func,
  addNotification: proptypes.func,
};

const mapStateToProps = state => ({
  isModalActive: state.modal.isActive,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { addNotification, deleteNotification },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
