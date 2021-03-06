import proptypes from 'prop-types';

import AppBackdrop from '@/components/App/Backdrop/Backdrop';

import classes from '@/components/App/Modal/AppModal.module.css';

const AppModal = ({ children, title, onClose }) => {
  return (
    <AppBackdrop onClick={onClose}>
      <div className={classes.AppModal__Card}>
        <h3 className={classes.AppModal__Title}>{title}</h3>
        <div className={classes.AppModal__Content}>{children}</div>
        <button
          className={classes.AppModal__CloseButton}
          onClick={onClose}
        >
          x
        </button>
      </div>
    </AppBackdrop>
  );
};

AppModal.propTypes = {
  children: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  title: proptypes.string,
  onClose: proptypes.func.isRequired,
};

export default AppModal;
