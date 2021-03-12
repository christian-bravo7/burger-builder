import proptypes from 'prop-types';

import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';

import { ingredientsConfig } from '@/utils/config';
import formatPrice from '@/utils/formatPrice';

import classes from '@/components/BuildControls/BuildControls.module.scss';

const BuildControls = ({
  onAddIngredient,
  onRemoveIngredient,
  ingredientsState,
}) => {
  const buildControls = Object.keys(ingredientsConfig).map(
    ingredient => {
      return {
        ingredient,
        label: ingredientsConfig[ingredient].label,
        price: formatPrice(ingredientsConfig[ingredient].price),
        count: ingredientsState[ingredient].count,
        isRemoveButtonDisabled:
          ingredientsState[ingredient].count <= 0,
      };
    }
  );

  return (
    <div className={classes.BuildControls}>
      {buildControls.map(
        (
          { label, ingredient, price, count, isRemoveButtonDisabled },
          index
        ) => (
          <BuildControl
            key={index}
            label={label}
            count={count}
            price={price}
            isRemoveButtonDisabled={isRemoveButtonDisabled}
            onAdd={() => {
              onAddIngredient(ingredient);
            }}
            onRemove={() => {
              onRemoveIngredient(ingredient);
            }}
          />
        )
      )}
    </div>
  );
};

BuildControls.propTypes = {
  onAddIngredient: proptypes.func.isRequired,
  onRemoveIngredient: proptypes.func.isRequired,
  ingredientsState: proptypes.object.isRequired,
};

export default BuildControls;
