import proptypes from 'prop-types';

import classes from '@/components/App/CloseButton/CloseButton.module.scss';

const CloseButton = ({ onClick, className }) => {
  const buttonClasses = `${classes.CloseButton} ${className || ''}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      x
    </button>
  );
};

CloseButton.propTypes = {
  onClick: proptypes.func.isRequired,
  className: proptypes.string,
};

export default CloseButton;
