import proptypes from 'prop-types';

import ControlButtons from '@/components/BuildControls/ControlButtons/ControlButtons';

import classes from '@/components/BuildControls/BuildControl/BuildControl.module.scss';

const BuildControl = ({
  label,
  unitPrice,
  totalPrice,
  count,
  isRemoveDisabled,
  isAddDisabled,
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
      <div className={classes.BuildControl__Buttons}>
        <ControlButtons
          count={count}
          isRemoveDisabled={isRemoveDisabled}
          isAddDisabled={isAddDisabled}
          onAdd={onAdd}
          onRemove={onRemove}
        />
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
  isRemoveDisabled: proptypes.bool.isRequired,
  isAddDisabled: proptypes.bool.isRequired,
  onAdd: proptypes.func.isRequired,
  onRemove: proptypes.func.isRequired,
};

export default BuildControl;
