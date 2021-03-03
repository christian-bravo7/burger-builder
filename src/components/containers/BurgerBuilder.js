import React, { Component } from 'react';
import proptypes from 'prop-types';
import Burger from '@/components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      meat: 2,
      salad: 2,
      cheese: 1,
    },
  };

  render () {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <div>Builder controls</div>
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  children: proptypes.element,
};

export default BurgerBuilder;
