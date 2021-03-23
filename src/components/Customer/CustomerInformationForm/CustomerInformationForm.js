import proptypes from 'prop-types';

import AppButton from '@/components/App/Button/AppButton';
import AppInputField from '@/components/App/AppInputField/AppInputField';

import classes from '@/components/Customer/CustomerInformationForm/CustomerInformationForm.module.scss';
import { Component } from 'react';

class CustomerInformationForm extends Component {
  state = {
    customerInformation: {
      name: '',
      address: '',
      email: '',
    },
  };

  handleFormValidations = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.customerInformation);
  };

  handleInputChange = event => {
    const { id, value } = event.target;

    const inputStateKeys = {
      customerName: 'name',
      customerAddress: 'address',
      customerEmail: 'email',
    };

    const key = inputStateKeys[id];

    this.setState(state => {
      const customerInformation = { ...state.customerInformation };
      customerInformation[key] = value;

      return { customerInformation };
    });
  };

  getFormData = () => {};

  render () {
    return (
      <form
        onSubmit={this.handleFormValidations}
        className={classes.CustomerInformationForm}
      >
        <div className={classes.CustomerInformationForm__Fields}>
          <AppInputField
            value={this.state.customerInformation.name}
            onChange={this.handleInputChange}
            isRequired={true}
            type="text"
            label="Name"
            id="customerName"
          />
          <AppInputField
            value={this.state.customerInformation.address}
            onChange={this.handleInputChange}
            isRequired={true}
            type="text"
            label="Address"
            id="customerAddress"
          />
          <AppInputField
            value={this.state.customerInformation.email}
            onChange={this.handleInputChange}
            isRequired={true}
            type="email"
            label="Email"
            id="customerEmail"
          />
        </div>
        <div
          className={classes.CustomerInformationForm__ButtonContainer}
        >
          <AppButton isLoading={this.props.isLoadingOrder}>
            Order now
          </AppButton>
        </div>
      </form>
    );
  }
}

CustomerInformationForm.propTypes = {
  onSubmit: proptypes.func.isRequired,
  isLoadingOrder: proptypes.bool.isRequired,
};

export default CustomerInformationForm;
