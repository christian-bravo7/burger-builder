import { Component } from 'react';
import proptypes from 'prop-types';

import deserializeQueryParams from '@/utils/deserializeQueryParams';
import getTotalPriceForIngredients from '@/utils/getTotalPriceForIngredients';

import Burger from '@/components/Burger/Burger';

class Checkout extends Component {
  state = {
    ingredients: {},
    totalCost: 0,
  };

  componentDidMount () {
    const queryParams = this.props.location.search;

    const deserializedParams = deserializeQueryParams(queryParams);
    const ingredients = {};

    Object.keys(deserializedParams).forEach(ingredient => {
      ingredients[ingredient] = Number(
        deserializedParams[ingredient]
      );
    });

    const totalCost = getTotalPriceForIngredients(ingredients);

    this.setState(() => ({
      ingredients,
      totalCost,
    }));

    if (!totalCost) {
      this.props.history.replace('/');
    }
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
  history: proptypes.shape({
    push: proptypes.func,
    replace: proptypes.func,
  }),
};

export default Checkout;
