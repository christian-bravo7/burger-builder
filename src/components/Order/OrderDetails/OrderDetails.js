import proptypes from 'prop-types';

import AppButton from '@/components/App/Button/AppButton';
import OrderDetailsTable from '@/components/Order/OrderDetailsTable/OrderDetailsTable';

import formatPrice from '@/utils/formatPrice';
import ingredientsConfig from '@/utils/config';
import getTotalPriceForIngredients from '@/utils/getTotalPriceForIngredients';

import classes from '@/components/Order/OrderDetails/OrderDetails.module.scss';

const OrderDetails = ({
  ingredientsState,
  isLoading,
  onComplete,
}) => {
  const transformOrderIngredients = () => {
    return Object.keys(ingredientsState)
      .filter(ingredient => ingredientsState[ingredient] > 0)
      .map(ingredient => {
        const count = ingredientsState[ingredient];
        const price = ingredientsConfig[ingredient].price;
        const label = ingredientsConfig[ingredient].label;

        return {
          label,
          count,
          unitPrice: formatPrice(price),
          totalPrice: formatPrice(price * count),
        };
      });
  };

  const totalCost = getTotalPriceForIngredients(ingredientsState);
  const orderIngredients = transformOrderIngredients();

  return (
    <div className={classes.OrderDetails}>
      <div>
        <p className={classes.OrderDetails__Description}>
          Here you will find the details of your order, check them
          well before completing your order
        </p>
        <OrderDetailsTable orderIngredients={orderIngredients} />
      </div>
      <div className={classes.OrderDetails__Footer}>
        <div>
          <AppButton isLoading={isLoading} onClick={onComplete}>
            <div
              className={
                classes.OrderDetails__ConfirmOrderButtonContent
              }
            >
              <span>Confirm? </span>
              <span
                className={classes.OrderDetails__ConfirmOrderPrice}
              >
                {formatPrice(totalCost)}
              </span>
            </div>
          </AppButton>
        </div>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  ingredientsState: proptypes.object,
  onComplete: proptypes.func,
  isLoading: proptypes.bool.isRequired,
};

export default OrderDetails;
