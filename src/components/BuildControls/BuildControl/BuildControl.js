import proptypes from 'prop-types';

import classes from '@/components/BuildControls/BuildControl/BuildControl.module.scss';

const BuildControl = ({
  label,
  unitPrice,
  totalPrice,
  count,
  isRemoveButtonDisabled,
  onAdd,
  onRemove,
}) => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.BuildControl__Title}>
        {label}
        <span className={classes.BuildControl__UnitPrice}>
          {unitPrice}
        </span>
      </p>
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
      </div>
      <span className={classes.BuildControl__Total_Price}>
        {totalPrice}
      </span>
    </div>
  );
};

BuildControl.propTypes = {
  label: proptypes.string.isRequired,
  unitPrice: proptypes.string.isRequired,
  totalPrice: proptypes.string.isRequired,
  count: proptypes.number.isRequired,
  isRemoveButtonDisabled: proptypes.bool.isRequired,
  onAdd: proptypes.func.isRequired,
  onRemove: proptypes.func.isRequired,
};

export default BuildControl;
