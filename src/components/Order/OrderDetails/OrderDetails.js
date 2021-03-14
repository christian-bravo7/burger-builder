import proptypes from 'prop-types';

import { ingredientsConfig } from '@/utils/config';
import formatPrice from '@/utils/formatPrice';

import classes from '@/components/Order/OrderDetails/OrderDetails.module.scss';
import AppButton from '@/components/App/Button/AppButton';

const OrderDetails = ({ ingredientsState, totalCost }) => {
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

  return (
    <div className={classes.OrderDetails}>
      <div>
        <p className={classes.OrderDetails__Description}>
          Here you will find the details of your order, check them
          well before completing your order
        </p>
        <ul>
          <li
            className={`${classes.OrderDetails__Item} ${classes.OrderDetails__Item__Header} `}
          >
            <span className={classes.OrderDetails__Item__Center}>
              QTY
            </span>
            <span className={classes.OrderDetails__Item__Center}>
              Ingredient
            </span>
            <span className={classes.OrderDetails__Item__Center}>
              Unit Price
            </span>
            <span className={classes.OrderDetails__Item__Center}>
              Subtotal
            </span>
          </li>
          {orderIngredients.map(
            ({ label, count, unitPrice, totalPrice }, index) => (
              <li className={classes.OrderDetails__Item} key={index}>
                <span className={classes.OrderDetails__Item_Quantity}>
                  {count}
                </span>
                <span
                  className={classes.OrderDetails__Ingredient_Name}
                >
                  {label}
                </span>
                <span className={classes.OrderDetails__Item_Price}>
                  {unitPrice}
                </span>
                <span className={classes.OrderDetails__Item_Price}>
                  {totalPrice}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={classes.OrderDetails__Total_Price_Container}>
        <div>
          <AppButton>
            <div
              className={classes.OrderDetails__Confirm_Order_Wrapper}
            >
              <span>Confirm? </span>
              <span className={classes.OrderDetails__Total_Price}>
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
};

export default OrderDetails;
