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
  };

  handleModalConfig = ({ component, title }) => {
    this.setState(state => {
      const modal = { ...state.modal };
      modal.component = component;
      modal.title = title;

      return {
        modal,
      };
    });
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

  BurgerBuilderComponent = props => (
    <BurgerBuilder
      {...props}
      modal={{
        onModalClose: this.handleModalClose,
        onModalOpenWith: this.handleModalOpenWith,
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
          <Route exact={true} path="/checkout" component={Checkout} />
          <Route exact={true} path="/orders" component={Orders} />
        </MainLayout>
        {this.state.modal.isActive && (
          <AppModal
            onClose={this.handleModalClose}
            title={this.state.modal.title}
            component={this.state.modal.component}
          />
        )}
        <AppNotifications />
      </Aux>
    );
  }
}

export default App;
