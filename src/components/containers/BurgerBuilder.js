import React, { Component } from 'react';
import proptypes from 'prop-types';
import Burger from '@/components/Burger/Burger';
import BuildControls from '@/components/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      meat: 2,
      salad: 0,
      cheese: 1,
    },
  };

  handleIngredientState = (ingredient, callback) => {
    this.setState(({ ingredientsState }) => {
      const ingredientQuantity = ingredientsState[ingredient];
      const newIngredientsState = {
        ...ingredientsState,
        [ingredient]: callback(ingredientQuantity),
      };

      return { ingredients: newIngredientsState };
    });
  };

  handleAddIngredient = ingredient => {
    this.handleIngredientState(ingredient, quantity => quantity + 1);
  };

  handleRemoveIngredient = ingredient => {
    this.handleIngredientState(ingredient, quantity => {
      if (quantity > 0) {
        return quantity - 1;
      }

      return quantity;
    });
  };

  render () {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onAddIngredient={this.handleAddIngredient}
          onRemoveIngredient={this.handleRemoveIngredient}
        />
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  children: proptypes.element,
};

export default BurgerBuilder;
