import propTypes from 'prop-types';

import classes from '@/components/BuildControls/BuildControl/BuildControl.module.css';

const BuildControl = ({ label, onAdd, onRemove }) => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{label}</p>
      <button className={classes.Less} onClick={onRemove}>
        Less
      </button>
      <button className={classes.More} onClick={onAdd}>
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  label: propTypes.string.isRequired,
  onAdd: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};

export default BuildControl;
