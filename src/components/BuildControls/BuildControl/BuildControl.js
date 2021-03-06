import proptypes from 'prop-types';

import classes from '@/components/BuildControls/BuildControl/BuildControl.module.css';

import formatPrice from '@/utils/formatPrice';

const BuildControl = ({
  label,
  price,
  count,
  isRemoveButtonDisabled,
  onAdd,
  onRemove,
}) => {
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
        <span className={classes.Price}>{formatPrice(price)}</span>
      </div>
    </div>
  );
};

BuildControl.propTypes = {
  label: proptypes.string.isRequired,
  price: proptypes.number.isRequired,
  count: proptypes.number.isRequired,
  isRemoveButtonDisabled: proptypes.bool.isRequired,
  onAdd: proptypes.func.isRequired,
  onRemove: proptypes.func.isRequired,
};

export default BuildControl;
