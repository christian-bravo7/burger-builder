import proptypes from 'prop-types';

import classes from '@/components/BuildControls/ControlButton/ControlButton.module.scss';

const ControlButton = ({
  onRemove,
  onAdd,
  isRemoveButtonDisabled,
  count,
}) => {
  return (
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
  );
};

ControlButton.propTypes = {
  count: proptypes.number.isRequired,
  isRemoveButtonDisabled: proptypes.bool.isRequired,
  onAdd: proptypes.func.isRequired,
  onRemove: proptypes.func.isRequired,
};

export default ControlButton;
