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

    return (
      <div className={classes.Burger}>
        <BurgerIngredient ingredient="bread-top" />
        {burgerIngredients}
        <BurgerIngredient ingredient="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: proptypes.object,
};

export default Burger;
