import { Component } from 'react';
import proptypes from 'prop-types';

import Burger from '@/components/Burger/Burger';
import AppButton from '@/components/App/Button/AppButton';
import OrderDetails from '@/components/Order/OrderDetails/OrderDetails';
import BuildControlList from '@/components/BuildControls/BuildControlList/BuildControlList';

import ingredientsConfig from '@/utils/config';
import serializeQueryParams from '@/utils/serializeQueryParams';

import classes from '@/pages/BurgerBuilder/BurgerBuilder.module.scss';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 2,
      meat: 2,
      salad: 0,
      cheese: 1,
    },
    isLoadingOrder: false,
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

  componentDidUpdate (_, prevState) {
    if (
      (this.state.isLoadingOrder && !prevState.isLoadingOrder) ||
      (!this.state.isLoadingOrder && prevState.isLoadingOrder)
    ) {
      this.handleOrderDetailsModal();
    }
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

  handleConfirmOrder = () => {
    this.props.modal.onModalClose();

    const queryParams = serializeQueryParams(this.state.ingredients);

    this.props.history.push({
      pathname: '/checkout',
      search: queryParams,
    });
  };

  handleOrderDetailsModal = () => {
    const component = (
      <OrderDetails
        isLoading={this.state.isLoadingOrder}
        ingredientsState={this.state.ingredients}
        totalCost={this.totalCost}
        onComplete={this.handleConfirmOrder}
      />
    );

    this.props.modal.onModalOpenWith({
      component,
      title: 'Order details',
    });
  };

  render () {
    return (
      <div className={classes.BurgerBuilder}>
        <div className={classes.BurgerBuilder__Content}>
          <Burger
            ingredients={this.state.ingredients}
            totalCost={this.totalCost}
          />
          <BuildControlList
            ingredientsState={this.state.ingredients}
            onAddIngredient={this.handleAddIngredient}
            onRemoveIngredient={this.handleRemoveIngredient}
          />
        </div>
        <div className={classes.CompleteOrderButton}>
          <AppButton
            onClick={this.handleOrderDetailsModal}
            disabled={this.totalCost === 0}
          >
            Complete order
          </AppButton>
        </div>
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  modal: proptypes.object.isRequired,
  history: proptypes.shape({
    push: proptypes.func,
  }),
};

export default BurgerBuilder;
