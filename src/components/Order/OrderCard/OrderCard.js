import proptypes from 'prop-types';

import OrderCardButton from '@/components/Order/OrderCardButton/OrderCardButton';

import classes from '@/components/Order/OrderCard/OrderCard.module.scss';
import Burger from '@/components/Burger/Burger';

const OrderCard = ({ name, ingredients }) => {
  return (
    <div className={classes.OrderCard}>
      <div className={classes.OrderCard__MainSide}>
        <div className={classes.OrderCard__ControlsContainer}>
          <div className={classes.OrderCard__Controls}>
            <OrderCardButton>=</OrderCardButton>
            <OrderCardButton>+</OrderCardButton>
          </div>
        </div>
        <div className={classes.OrderCard__BurgerContainer}>
          <Burger ingredients={ingredients} />
        </div>
        <div className={classes.OrderCard__Name}>{name}</div>
      </div>
      <div className={classes.OrderCard__Ingredients}>
        Ingredients
      </div>
      <div className={classes.OrderCard__CustomerInfo}>
        Customer info
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  name: proptypes.string.isRequired,
  ingredients: proptypes.object.isRequired,
};

export default OrderCard;
