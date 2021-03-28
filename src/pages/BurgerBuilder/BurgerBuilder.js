import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import proptypes from 'prop-types';

import Burger from '@/components/Burger/Burger';
import AppButton from '@/components/App/Button/AppButton';
import OrderDetails from '@/components/Order/OrderDetails/OrderDetails';
import BuildControlList from '@/components/BuildControls/BuildControlList/BuildControlList';

import serializeQueryParams from '@/utils/queryParams/serializeQueryParams';

import {
  displayModalWithComponent,
  hiddeModal,
} from '@/store/actionCreators/modal';

import {
  incrementIngredientCount,
  decrementIngredientCount,
} from '@/store/actionCreators/burger';

import classes from '@/pages/BurgerBuilder/BurgerBuilder.module.scss';

class BurgerBuilder extends Component {
  state = {
    isLoadingOrder: false,
  };

  get isCompleteOrderButtonDisabled () {
    const areAddedIngredients = Object.values(
      this.props.ingredients
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

  handleConfirmOrder = () => {
    this.props.hiddeModal();

    const queryParams = serializeQueryParams(this.props.ingredients);

    this.props.history.push({
      pathname: '/checkout',
      search: queryParams,
    });
  };

  handleOrderDetailsModal = () => {
    const component = (
      <OrderDetails
        isLoading={this.state.isLoadingOrder}
        ingredientsState={this.props.ingredients}
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
          <Burger ingredients={this.props.ingredients} />
          <BuildControlList
            ingredientsState={this.props.ingredients}
            onAddIngredient={this.props.incrementIngredientCount}
            onRemoveIngredient={this.props.decrementIngredientCount}
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
  ingredients: proptypes.object,
  displayModalWithComponent: proptypes.func,
  hiddeModal: proptypes.func,
  incrementIngredientCount: proptypes.func,
  decrementIngredientCount: proptypes.func,
};

const mapStateToProps = state => ({
  ingredients: state.burger.ingredients,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { displayModalWithComponent, hiddeModal },
    dispatch
  ),
  ...bindActionCreators(
    { incrementIngredientCount, decrementIngredientCount },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
