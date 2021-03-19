import React, { Component } from 'react';

import MainLayout from '@/layouts/Main/MainLayout';

import Aux from '@/components/App/Aux/Aux';
import AppModal from '@/components/App/Modal/AppModal';
import BurgerBuilder from '@/containers/BurgerBuilder';
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

  render () {
    return (
      <Aux>
        <MainLayout>
          <BurgerBuilder
            modal={{
              onModalClose: this.handleModalClose,
              onModalOpenWith: this.handleModalOpenWith,
            }}
          />
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
