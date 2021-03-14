import proptypes from 'prop-types';

import classes from '@/components/BuildControls/ControlButtons/ControlButtons.module.scss';

const ControlButtons = ({
  count,
  isRemoveDisabled,
  isAddDisabled,
  onRemove,
  onAdd,
}) => {
  return (
    <div className={classes.ControlButtons}>
      <button
        className={classes.ControlButtons__Control}
        onClick={onRemove}
        disabled={isRemoveDisabled}
      >
        -
      </button>
      <span className={classes.ControlButtons__Count}>{count}</span>
      <button
        className={classes.ControlButtons__Control}
        onClick={onAdd}
        disabled={isAddDisabled}
      >
        +
      </button>
    </div>
  );
};

ControlButtons.propTypes = {
  count: proptypes.number.isRequired,
  isRemoveDisabled: proptypes.bool.isRequired,
  isAddDisabled: proptypes.bool,
  onAdd: proptypes.func.isRequired,
  onRemove: proptypes.func.isRequired,
};

export default ControlButtons;
