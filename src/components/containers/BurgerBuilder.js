import React, { Component } from 'react';

import Burger from '@/components/Burger/Burger';
import BuildControls from '@/components/BuildControls/BuildControls';
import classes from '@/components/containers/BurgerBuilder.module.css';

const ingredientsCost = {
  bacon: 20,
  meat: 20,
  salad: 5,
  cheese: 10,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      meat: 2,
      salad: 0,
      cheese: 1,
    },
    totalCost: 0,
  };

  get totalCost () {
    const cost = Object.keys(this.state.ingredients).reduce(
      (accumulator, currentIngredient) => {
        const unitCost = ingredientsCost[currentIngredient];
        const quantity = this.state.ingredients[currentIngredient];

        return accumulator + unitCost * quantity;
      },
      0
    );

    return cost;
  }

  get buildButtonStateByIngredient () {
    const buttonsState = Object.keys(this.state.ingredients).reduce(
      (accumulator, currentIngredient) => {
        accumulator[currentIngredient] = {
          price: ingredientsCost[currentIngredient],
          disabled: this.state.ingredients[currentIngredient] <= 0,
          count: this.state.ingredients[currentIngredient],
        };

        return accumulator;
      },
      {}
    );

    return buttonsState;
  }

  handleIngredientState = (ingredient, callback) => {
    this.setState(({ ingredients }) => {
      const ingredientQuantity = ingredients[ingredient];
      const newIngredientsState = {
        ...ingredients,
        [ingredient]: callback(ingredientQuantity),
      };

      return { ingredients: newIngredientsState };
    });
  };

  handleAddIngredient = ingredient => {
    this.handleIngredientState(ingredient, quantity => quantity + 1);
  };

  handleRemoveIngredient = ingredient => {
    this.handleIngredientState(ingredient, quantity =>
      quantity > 0 ? quantity - 1 : quantity
    );
  };

  render () {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger
          ingredients={this.state.ingredients}
          totalCost={this.totalCost}
        />
        <BuildControls
          controlsState={this.buildButtonStateByIngredient}
          onAddIngredient={this.handleAddIngredient}
          onRemoveIngredient={this.handleRemoveIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
