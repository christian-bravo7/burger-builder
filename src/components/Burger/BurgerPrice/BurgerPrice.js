import proptypes from 'prop-types';

import classes from '@/components/Burger/BurgerPrice/BurgerPrice.module.scss';

import formatPrice from '@/utils/formatPrice';

const BurgerPrice = ({ totalCost }) => {
  return (
    <div className={classes.BurgerPrice}>
      <span className={classes.BurgerPrice__Label}>Total cost:</span>
      <span className={classes.BurgerPrice__Cost}>
        {formatPrice(totalCost)}
      </span>
    </div>
  );
};

BurgerPrice.propTypes = {
  totalCost: proptypes.number.isRequired,
};

export default BurgerPrice;
