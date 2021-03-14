import proptypes from 'prop-types';

import classes from '@/components/Burger/BurgerPrice/BurgerPrice.module.scss';

const BurgerPrice = ({ totalCost }) => {
  return (
    <div className={classes.BurgerPrice}>
      <span className={classes.BurgerPrice__Label}>Total cost:</span>
      <span className={classes.BurgerPrice__Cost}>{totalCost}</span>
    </div>
  );
};

BurgerPrice.propTypes = {
  totalCost: proptypes.string.isRequired,
};

export default BurgerPrice;
