import proptypes from 'prop-types';

import classes from '@/components/Order/OrderCardButton/OrderCardButton.module.scss';

const OrderCardButton = ({ children }) => {
  return (
    <button className={classes.OrderCardButton}>{children}</button>
  );
};

OrderCardButton.propTypes = {
  children: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
};

export default OrderCardButton;
