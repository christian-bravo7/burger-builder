import getOrders from '@/api/getOrders';
import { Component } from 'react';

class Orders extends Component {
  async componentDidMount () {
    await getOrders();
  }

  render () {
    return <div>Hello world</div>;
  }
}

export default Orders;
