import proptypes from 'prop-types';

import classes from '@/components/Order/OrderDetailsTable/OrderDetailsTable.module.scss';

const OrderDetailsTable = ({ orderIngredients }) => {
  return (
    <ul>
      <li
        className={`${classes.OrderDetailsTable__Item} ${classes.OrderDetailsTable__TableHeader} `}
      >
        <span className={classes.OrderDetailsTable__Item_Center}>
          QTY
        </span>
        <span className={classes.OrderDetailsTable__Item_Center}>
          Ingredient
        </span>
        <span className={classes.OrderDetailsTable__Item_Center}>
          Unit Price
        </span>
        <span className={classes.OrderDetailsTable__Item_Center}>
          Subtotal
        </span>
      </li>
      {orderIngredients.map(
        ({ label, count, unitPrice, totalPrice }, index) => (
          <li className={classes.OrderDetailsTable__Item} key={index}>
            <span className={classes.OrderDetailsTable__Item_Center}>
              {count}
            </span>
            <span>{label}</span>
            <span className={classes.OrderDetailsTable__Item_Right}>
              {unitPrice}
            </span>
            <span className={classes.OrderDetailsTable__Item_Right}>
              {totalPrice}
            </span>
          </li>
        )
      )}
    </ul>
  );
};

OrderDetailsTable.propTypes = {
  orderIngredients: proptypes.array,
};

export default OrderDetailsTable;
