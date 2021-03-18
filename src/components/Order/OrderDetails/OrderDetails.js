import { useState } from 'react';
import proptypes from 'prop-types';

import AppButton from '@/components/App/Button/AppButton';
import OrderDetailsTable from '@/components/Order/OrderDetailsTable/OrderDetailsTable';

import createOrder from '@/api/createOrder';
import formatPrice from '@/utils/formatPrice';
import { ingredientsConfig } from '@/utils/config';

import classes from '@/components/Order/OrderDetails/OrderDetails.module.scss';

const OrderDetails = ({ ingredientsState, totalCost, onclose }) => {
  const [loading, setloading] = useState(false);

  const orderIngredients = Object.keys(ingredientsState)
    .filter(ingredient => ingredientsState[ingredient].count > 0)
    .map(ingredient => {
      const count = ingredientsState[ingredient].count;
      const price = ingredientsConfig[ingredient].price;
      const label = ingredientsConfig[ingredient].label;

      return {
        label,
        count,
        unitPrice: formatPrice(price),
        totalPrice: formatPrice(price * count),
      };
    });

  const formattedTotalCost = formatPrice(totalCost);

  const createOrderHandler = async () => {
    setloading(true);
    await createOrder({
      customer: {
        name: 'christian',
      },
      ingredients: orderIngredients,
      price: totalCost,
    });
    setloading(false);
    onclose();
  };

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
          <AppButton isLoading={loading} onClick={createOrderHandler}>
            <div
              className={
                classes.OrderDetails__ConfirmOrderButtonContent
              }
            >
              <span>Confirm? </span>
              <span
                className={classes.OrderDetails__ConfirmOrderPrice}
              >
                {formattedTotalCost}
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
  totalCost: proptypes.number.isRequired,
  onclose: proptypes.func,
};

export default OrderDetails;
