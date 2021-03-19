import { Component } from 'react';
import proptypes from 'prop-types';

import AppButton from '@/components/App/Button/AppButton';
import OrderDetailsTable from '@/components/Order/OrderDetailsTable/OrderDetailsTable';

import createOrder from '@/api/createOrder';

import formatPrice from '@/utils/formatPrice';
import { ingredientsConfig } from '@/utils/config';

import classes from '@/components/Order/OrderDetails/OrderDetails.module.scss';

class OrderDetails extends Component {
  state = {
    isLoading: false,
  };

  get orderIngredients () {
    return Object.keys(this.props.ingredientsState)
      .filter(
        ingredient =>
          this.props.ingredientsState[ingredient].count > 0
      )
      .map(ingredient => {
        const count = this.props.ingredientsState[ingredient].count;
        const price = ingredientsConfig[ingredient].price;
        const label = ingredientsConfig[ingredient].label;

        return {
          label,
          count,
          unitPrice: formatPrice(price),
          totalPrice: formatPrice(price * count),
        };
      });
  }

  createOrderHandler = async () => {
    this.setState({ isLoading: true });
    await createOrder({
      customer: {
        name: 'christian',
      },
      ingredients: this.orderIngredients,
      price: this.props.totalCost,
    }).finally(() => {
      this.setState({ isLoading: false });
      this.props.onComplete();
    });
  };

  render () {
    return (
      <div className={classes.OrderDetails}>
        <div>
          <p className={classes.OrderDetails__Description}>
            Here you will find the details of your order, check them
            well before completing your order
          </p>
          <OrderDetailsTable
            orderIngredients={this.orderIngredients}
          />
        </div>
        <div className={classes.OrderDetails__Footer}>
          <div>
            <AppButton
              isLoading={this.state.isLoading}
              onClick={this.createOrderHandler}
            >
              <div
                className={
                  classes.OrderDetails__ConfirmOrderButtonContent
                }
              >
                <span>Confirm? </span>
                <span
                  className={classes.OrderDetails__ConfirmOrderPrice}
                >
                  {formatPrice(this.props.totalCost)}
                </span>
              </div>
            </AppButton>
          </div>
        </div>
      </div>
    );
  }
}

OrderDetails.propTypes = {
  ingredientsState: proptypes.object,
  totalCost: proptypes.number.isRequired,
  onComplete: proptypes.func,
};

export default OrderDetails;
