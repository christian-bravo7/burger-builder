import { Component } from 'react';

import getOrders from '@/api/getOrders';

import OrderCard from '@/components/Order/OrderCard/OrderCard';

import classes from '@/pages/Orders/Orders.module.scss';

class Orders extends Component {
  state = {
    orders: [],
  };

  async componentDidMount () {
    const orders = await getOrders();

    this.setState({ orders });
  }

  render () {
    return (
      <div className={classes.Orders}>
        {this.state.orders.map(
          ({ id, customerInformation, ingredients }) => (
            <OrderCard
              key={id}
              name={customerInformation.name}
              ingredients={ingredients}
            />
          )
        )}
      </div>
    );
  }
}

export default Orders;
