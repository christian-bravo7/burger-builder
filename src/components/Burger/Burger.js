import React, { Component } from 'react';
import proptypes from 'prop-types';

import BurgerIngredient from '@/components/BurgerIngredient/BurgerIngredient';
import classes from '@/components/Burger/Burger.module.css';

class Burger extends Component {
  render () {
    const burgerIngredients = Object.keys(this.props.ingredients)
      .map(ingredient => {
        const quantity = this.props.ingredients[ingredient];

        const ingredients = [...Array(quantity)].map((_, index) => (
          <BurgerIngredient
            key={`${ingredient}-${index}`}
            ingredient={ingredient}
          />
        ));

        return ingredients;
      })
      .reduce(
        (previousValue, currentValue) => [
          ...previousValue,
          ...currentValue,
        ],
        []
      );

    const formattedPrice = price => `$ ${price.toFixed(2)}`;

    return (
      <div className={classes.Burger}>
        <div className={classes.BurgerWrapper}>
          <div className={classes.BurgerContainer}>
            <BurgerIngredient ingredient="bread-top" />
            {burgerIngredients}
            <BurgerIngredient ingredient="bread-bottom" />
          </div>
          <div className={classes.BurgerPrice}>
            <span className={classes.BurgerPrice__Label}>
              Total cost:
            </span>
            <span className={classes.BurgerPrice__Cost}>
              {formattedPrice(this.props.totalCost)}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: proptypes.object,
  totalCost: proptypes.number.isRequired,
};

export default Burger;
