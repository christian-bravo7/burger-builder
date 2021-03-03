import React, { Component } from 'react';
import classes from '@/components/BurgerIngredient/BurgerIngredient.module.css';
import proptypes from 'prop-types';

class BurgerIngredient extends Component {
  render () {
    const genericIngredientComponent = className => (
      <div className={className}></div>
    );

    const breadComponent = (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );

    const ingredients = {
      'bread-top': breadComponent,
      'bread-bottom': genericIngredientComponent(classes.BreadBottom),
      meat: genericIngredientComponent(classes.Meat),
      cheese: genericIngredientComponent(classes.Cheese),
      salad: genericIngredientComponent(classes.Salad),
      bacon: genericIngredientComponent(classes.Bacon),
    };

    return ingredients[this.props.ingredient];
  }
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  ingredient: proptypes.string,
};
