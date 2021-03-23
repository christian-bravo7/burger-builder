import { Component } from 'react';
import proptypes from 'prop-types';

import deserializeQueryParams from '@/utils/deserializeQueryParams';
import getTotalPriceForIngredients from '@/utils/getTotalPriceForIngredients';

import Burger from '@/components/Burger/Burger';
import CustomerInformationForm from '@/components/Customer/CustomerInformationForm/CustomerInformationForm';

import classes from '@/pages/Checkout/Checkout.module.scss';
import createOrder from '@/api/createOrder';

class Checkout extends Component {
  state = {
    ingredients: {},
    isLoadingOrder: false,
  };

  componentDidMount () {
    this.handleQueryParams();
  }

  handleQueryParams = () => {
    const queryParams = this.props.location.search;

    const ingredients = deserializeQueryParams(queryParams);
    const totalCost = getTotalPriceForIngredients(ingredients);

    if (!totalCost) {
      this.props.history.replace('/');
    }

    this.setState({ ingredients });
  };

  handleSubmitOrder = async customerInformation => {
    this.setState({ isLoadingOrder: true });

    const ingredients = this.state.ingredients;
    await createOrder({ ingredients, customerInformation });
    this.props.notifications.onSetNotification(
      'success',
      'Order created successfully'
    );

    this.setState({ isLoadingOrder: false });
  };

  render () {
    return (
      <div>
        <div className={classes.Checkout__BurgerContainer}>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <CustomerInformationForm
          isLoadingOrder={this.state.isLoadingOrder}
          onSubmit={this.handleSubmitOrder}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  location: proptypes.shape({
    search: proptypes.string,
  }),
  history: proptypes.shape({
    push: proptypes.func,
    replace: proptypes.func,
  }),
  notifications: proptypes.shape({
    onSetNotification: proptypes.func,
  }),
};

export default Checkout;
