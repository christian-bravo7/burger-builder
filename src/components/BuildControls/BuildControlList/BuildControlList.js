import proptypes from 'prop-types';

import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';

import { ingredientsConfig } from '@/utils/config';
import formatPrice from '@/utils/formatPrice';

import classes from '@/components/BuildControls/BuildControlList/BuildControlList.module.scss';

const BuildControlList = ({
  onAddIngredient,
  onRemoveIngredient,
  ingredientsState,
}) => {
  const buildControls = Object.keys(ingredientsConfig).map(
    ingredient => {
      const price = ingredientsConfig[ingredient].price;
      const count = ingredientsState[ingredient].count;
      const unitPrice = formatPrice(price);
      const totalPrice = formatPrice(price * count);

      return {
        count,
        unitPrice,
        ingredient,
        totalPrice,
        label: ingredientsConfig[ingredient].label,
        isRemoveButtonDisabled:
          ingredientsState[ingredient].count <= 0,
      };
    }
  );

  return (
    <div className={classes.BuildControls}>
      {buildControls.map(
        (
          {
            label,
            ingredient,
            price,
            count,
            isRemoveButtonDisabled,
            unitPrice,
            totalPrice,
          },
          index
        ) => (
          <BuildControl
            key={index}
            label={label}
            count={count}
            unitPrice={unitPrice}
            totalPrice={totalPrice}
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

BuildControlList.propTypes = {
  onAddIngredient: proptypes.func.isRequired,
  onRemoveIngredient: proptypes.func.isRequired,
  ingredientsState: proptypes.object.isRequired,
};

export default BuildControlList;
