import proptypes from 'prop-types';

import BuildControl from '@/components/BuildControls/BuildControl/BuildControl';

import { ingredientsConfig } from '@/utils/config';
import formatPrice from '@/utils/formatPrice';

import classes from '@/components/BuildControls/BuildControlList/BuildControlList.module.scss';

const BuildControlList = ({
  ingredientsState,
  onAddIngredient,
  onRemoveIngredient,
}) => {
  const buildControls = Object.keys(ingredientsConfig).map(
    ingredient => {
      const label = ingredientsConfig[ingredient].label;
      const price = ingredientsConfig[ingredient].price;
      const maxItems = ingredientsConfig[ingredient].max;
      const count = ingredientsState[ingredient].count;
      const unitPrice = formatPrice(price);
      const totalPrice = formatPrice(price * count);
      const isAddDisabled = maxItems <= count;
      const isRemoveDisabled = count <= 0;

      return {
        label,
        count,
        unitPrice,
        ingredient,
        totalPrice,
        isRemoveDisabled,
        isAddDisabled,
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
            count,
            isRemoveDisabled,
            unitPrice,
            totalPrice,
            isAddDisabled,
          },
          index
        ) => (
          <BuildControl
            key={index}
            label={label}
            count={count}
            unitPrice={unitPrice}
            totalPrice={totalPrice}
            isRemoveDisabled={isRemoveDisabled}
            isAddDisabled={isAddDisabled}
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
  ingredientsState: proptypes.object.isRequired,
  onAddIngredient: proptypes.func.isRequired,
  onRemoveIngredient: proptypes.func.isRequired,
};

export default BuildControlList;
