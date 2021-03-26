import { Component } from 'react';
import proptypes from 'prop-types';

import Burger from '@/components/Burger/Burger';
import AppButton from '@/components/App/Button/AppButton';
import OrderDetails from '@/components/Order/OrderDetails/OrderDetails';
import BuildControlList from '@/components/BuildControls/BuildControlList/BuildControlList';

import serializeQueryParams from '@/utils/serializeQueryParams';

import classes from '@/pages/BurgerBuilder/BurgerBuilder.module.scss';
import { connect } from 'react-redux';
import {
  DISPLAY_MODAL_WITH_COMPONENT,
  HIDDE_MODAL,
} from '@/store/actions/modal';

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

  get isCompleteOrderButtonDisabled () {
    const areAddedIngredients = Object.values(
      this.state.ingredients
    ).every(ingredientCount => ingredientCount === 0);

    return areAddedIngredients;
  }

  componentDidUpdate (_, prevState) {
    // Workaround to update modal component when it is active, should be removed when redux is implemented
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
    this.props.hiddeModal();

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
        onComplete={this.handleConfirmOrder}
      />
    );

    this.props.displayModalWithComponent({
      component,
      title: 'Order details',
    });
  };

  render () {
    return (
      <div className={classes.BurgerBuilder}>
        <div className={classes.BurgerBuilder__Content}>
          <Burger ingredients={this.state.ingredients} />
          <BuildControlList
            ingredientsState={this.state.ingredients}
            onAddIngredient={this.handleAddIngredient}
            onRemoveIngredient={this.handleRemoveIngredient}
          />
        </div>
        <div className={classes.CompleteOrderButton}>
          <AppButton
            onClick={this.handleOrderDetailsModal}
            disabled={this.isCompleteOrderButtonDisabled}
          >
            Complete order
          </AppButton>
        </div>
      </div>
    );
  }
}

BurgerBuilder.propTypes = {
  history: proptypes.shape({
    push: proptypes.func,
  }),
  displayModalWithComponent: proptypes.func,
  hiddeModal: proptypes.func,
};

const mapActionsToProps = dispatch => {
  return {
    displayModalWithComponent: ({ component, title }) => {
      dispatch({
        type: DISPLAY_MODAL_WITH_COMPONENT,
        payload: { component, title },
      });
    },
    hiddeModal: () => dispatch({ type: HIDDE_MODAL }),
  };
};

export default connect(null, mapActionsToProps)(BurgerBuilder);
