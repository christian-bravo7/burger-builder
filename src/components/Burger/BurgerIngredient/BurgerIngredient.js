import proptypes from 'prop-types';

import classes from '@/components/Burger/BurgerIngredient/BurgerIngredient.module.scss';

const BurgerIngredient = ({ ingredient }) => {
  const genericIngredientComponent = className => (
    <div className={className}></div>
  );

  const breadTopComponent = (
    <div className={classes.BreadTop}>
      <div className={classes.Seeds1}></div>
      <div className={classes.Seeds2}></div>
    </div>
  );

  const ingredients = {
    'bread-top': breadTopComponent,
    'bread-bottom': genericIngredientComponent(classes.BreadBottom),
    meat: genericIngredientComponent(classes.Meat),
    cheese: genericIngredientComponent(classes.Cheese),
    salad: genericIngredientComponent(classes.Salad),
    bacon: genericIngredientComponent(classes.Bacon),
  };

  return ingredients[ingredient];
};

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  ingredient: proptypes.string.isRequired,
};
