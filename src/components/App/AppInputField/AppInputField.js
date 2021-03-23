import proptypes from 'prop-types';

import classes from '@/components/App/AppInputField/AppInputField.module.scss';

const AppInputField = ({
  id,
  label,
  type,
  value,
  isRequired,
  onChange,
}) => {
  return (
    <div className={classes.AppInputField}>
      <label className={classes.AppInputField__Label} htmlFor={id}>
        {label} {isRequired ? '*' : null}
      </label>
      <input
        className={classes.AppInputField__Input}
        id={id}
        type={type}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
    </div>
  );
};

AppInputField.propTypes = {
  id: proptypes.string.isRequired,
  label: proptypes.string.isRequired,
  type: proptypes.string.isRequired,
  value: proptypes.string.isRequired,
  isRequired: proptypes.bool,
  onChange: proptypes.func,
};

export default AppInputField;
