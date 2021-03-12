import React, { Component } from 'react';

import Burger from '@/components/Burger/Burger';
import BuildControls from '@/components/BuildControls/BuildControls';
import AppButton from '@/components/App/Button/AppButton';
import AppModal from '@/components/App/Modal/AppModal';
import OrderDetails from '@/components/OrderDetails/OrderDetails';

import { ingredientsConfig } from '@/utils/config';

import classes from '@/components/containers/BurgerBuilder.module.css';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      meat: 2,
      salad: 0,
      cheese: 1,
    },
    totalCost: 0,
    isOrderDetailsModalVisible: false,
  };

  get totalCost () {
    const cost = Object.keys(this.state.ingredients).reduce(
      (accumulator, currentIngredient) => {
        const unitCost = ingredientsConfig[currentIngredient].price;
        const quantity = this.state.ingredients[currentIngredient];

        return accumulator + unitCost * quantity;
      },
      0
    );

    return cost;
  }

  get ingredientsState () {
    const buttonsState = Object.keys(this.state.ingredients).reduce(
      (accumulator, currentIngredient) => {
        accumulator[currentIngredient] = {
          price: ingredientsConfig[currentIngredient].price,
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

  handleOpenModal = () => {
    this.setState({ isOrderDetailsModalVisible: true });
  };

  handleCloseModal = () => {
    this.setState({ isOrderDetailsModalVisible: false });
  };

  render () {
    return (
      <div className={classes.BurgerBuilder}>
        <Burger
          ingredients={this.state.ingredients}
          totalCost={this.totalCost}
        />
        <BuildControls
          ingredientsState={this.ingredientsState}
          onAddIngredient={this.handleAddIngredient}
          onRemoveIngredient={this.handleRemoveIngredient}
        />
        {this.state.isOrderDetailsModalVisible && (
          <AppModal
            onClose={this.handleCloseModal}
            title="Order details"
          >
            <OrderDetails
              ingredientsState={this.ingredientsState}
              totalCost={this.totalCost}
            />
          </AppModal>
        )}
        <AppButton
          onClick={this.handleOpenModal}
          className={classes.CompleteOrderButton}
          disabled={this.totalCost === 0}
        >
          Complete order
        </AppButton>
      </div>
    );
  }
}

export default BurgerBuilder;
