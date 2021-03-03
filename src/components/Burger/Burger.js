import React, { Component } from 'react';
import proptypes from 'prop-types';

import BurgerIngredient from '@/components/BurgerIngredient/BurgerIngredient';
import classes from '@/components/Burger/Burger.module.css';

class Burger extends Component {
  render () {
    const burgerIngredients = Object.entries(this.props.ingredients).map(
      ([ingredient, quantity]) => {
        const elements = [...Array(quantity)].map((_, index) => (
          <BurgerIngredient key={index} ingredient={ingredient} />
        ));

        return elements;
      }
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
