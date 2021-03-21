import { Component } from 'react';
import proptypes from 'prop-types';

import deserializeQueryParams from '@/utils/deserializeQueryParams';
import Burger from '@/components/Burger/Burger';

class Checkout extends Component {
  state = {
    ingredients: {},
    totalCost: 0,
  };

  componentDidMount () {
    const queryParams = this.props.location.search;

    const deserializedParams = deserializeQueryParams(queryParams);
    const ingredientParams = {};

    Object.keys(deserializedParams).forEach(ingredient => {
      ingredientParams[ingredient] = Number(
        deserializedParams[ingredient]
      );
    });

    this.setState({ ingredients: ingredientParams, totalCost: 10 });
  }

  render () {
    return (
      <div>
        <Burger
          ingredients={this.state.ingredients}
          totalCost={this.state.totalCost}
        />
      </div>
    );
  }
}

Checkout.propTypes = {
  location: proptypes.shape({
    search: proptypes.string,
  }),
};

export default Checkout;
