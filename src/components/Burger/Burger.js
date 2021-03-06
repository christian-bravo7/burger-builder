import React from 'react';
import proptypes from 'prop-types';

import BurgerIngredient from '@/components/BurgerIngredient/BurgerIngredient';

import formatPrice from '@/utils/formatPrice';

import classes from '@/components/Burger/Burger.module.css';

const Burger = ({ ingredients, totalCost }) => {
  const burgerIngredients = Object.keys(ingredients)
    .map(ingredient => {
      const quantity = ingredients[ingredient];

      const ingredientComponents = [
        ...Array(quantity),
      ].map((_, index) => (
        <BurgerIngredient
          key={`${ingredient}-${index}`}
          ingredient={ingredient}
        />
      ));

      return ingredientComponents;
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
            {formatPrice(totalCost)}
          </span>
        </div>
      </div>
    </div>
  );
};

Burger.propTypes = {
  ingredients: proptypes.object,
  totalCost: proptypes.number.isRequired,
};

export default Burger;
