import proptypes from 'prop-types';

import classes from '@/components/App/AppInputField/AppInputField.module.scss';
import { useEffect, useState } from 'react';

const isInputvalid = (
  { isRequired, minLength, isTouched, isEmail },
  value
) => {
  let isValid = true;

  if (!isTouched) {
    return isValid;
  }

  if (isRequired) {
    isValid = value.trim() !== '' && isValid;
  }

  if (isEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  if (minLength) {
    isValid = value.trim('').length >= minLength && isValid;
  }

  return isValid;
};

const AppInputField = ({
  id,
  label,
  type,
  value,
  rules: { isRequired = false, minLength = 0 },
  onChange,
}) => {
  const [isValid, setValid] = useState(false);
  const [isTouched, setTouched] = useState(false);

  const inputClasses = `${classes.AppInputField__Input} ${
    !isValid ? classes.AppInputField__Input_Error : ''
  }`;

  useEffect(() => {
    validateInput();
  }, [value, isTouched]);

  const validateInput = () => {
    const isValid = isInputvalid(
      { isRequired, minLength, isTouched, isEmail: type === 'email' },
      value
    );

    setValid(isValid);
  };

  const handleOnBlur = () => {
    setTouched(true);
  };

  return (
    <div className={classes.AppInputField}>
      <label className={classes.AppInputField__Label} htmlFor={id}>
        {label} {isRequired ? '*' : null}
      </label>
      <input
        className={inputClasses}
        id={id}
        type={type}
        value={value}
        required={isRequired}
        onChange={onChange}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

AppInputField.propTypes = {
  id: proptypes.string.isRequired,
  label: proptypes.string.isRequired,
  type: proptypes.string.isRequired,
  value: proptypes.string.isRequired,
  rules: proptypes.shape({
    isRequired: proptypes.bool,
    minLength: proptypes.number,
  }),
  onChange: proptypes.func,
};

export default AppInputField;
