import propTypes from 'prop-types';

import classes from '@/components/BuildControls/BuildControl/BuildControl.module.css';

const BuildControl = ({
  label,
  onAdd,
  onRemove,
  isRemoveButtonDisabled,
  count,
  price,
}) => {
  const formattedPrice = price => `$ ${price.toFixed(2)}`;

  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{label}</p>
      <div className={classes.BuildControlWrapper}>
        <div className={classes.BuildControlGroup}>
          <button
            className={classes.BuildControlGroup__Item}
            onClick={onRemove}
            disabled={isRemoveButtonDisabled}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className={classes.BuildControlGroup__Item}
            onClick={onAdd}
          >
            +
          </button>
        </div>
        <span className={classes.Price}>{formattedPrice(price)}</span>
      </div>
    </div>
  );
};

BuildControl.propTypes = {
  label: propTypes.string.isRequired,
  onAdd: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
  isRemoveButtonDisabled: propTypes.bool.isRequired,
  count: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
};

export default BuildControl;
