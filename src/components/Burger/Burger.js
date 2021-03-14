import React from 'react';
import proptypes from 'prop-types';

import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient';
import BurgerPrice from '@/components/Burger/BurgerPrice/BurgerPrice';

import formatPrice from '@/utils/formatPrice';

import classes from '@/components/Burger/Burger.module.scss';

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
        <div className={classes.BurgerContainerInside}>
          <div className={classes.BurgerContainer}>
            <BurgerIngredient ingredient="bread-top" />
            {totalCost ? burgerIngredients : 'Add some ingredients'}
            <BurgerIngredient ingredient="bread-bottom" />
          </div>
        </div>
        <BurgerPrice totalCost={formatPrice(totalCost)} />
      </div>
    </div>
  );
};

Burger.propTypes = {
  ingredients: proptypes.object,
  totalCost: proptypes.number.isRequired,
};

export default Burger;
