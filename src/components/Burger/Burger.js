import proptypes from 'prop-types';

import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient';
import BurgerPrice from '@/components/Burger/BurgerPrice/BurgerPrice';

import getTotalPriceForIngredients from '@/utils/formatPrice/getTotalPriceForIngredients';

import classes from '@/components/Burger/Burger.module.scss';

const Burger = ({ ingredients }) => {
  const burgerIngredients = Object.entries(ingredients)
    .map(([ingredient, quantity]) => {
      return [...Array(quantity)].map((_, index) => (
        <BurgerIngredient
          key={`${ingredient}-${index}`}
          ingredient={ingredient}
        />
      ));
    })
    .flatMap(mappedIngredients => mappedIngredients);

  const totalCost = getTotalPriceForIngredients(ingredients);

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
        <BurgerPrice totalCost={totalCost} />
      </div>
    </div>
  );
};

Burger.propTypes = {
  ingredients: proptypes.object,
};

export default Burger;
