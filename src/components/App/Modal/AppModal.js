import proptypes from 'prop-types';

import AppBackdrop from '@/components/App/Backdrop/Backdrop';
import CloseButton from '@/components/App/CloseButton/CloseButton';

import classes from '@/components/App/Modal/AppModal.module.scss';

const AppModal = ({ component, title, onClose }) => {
  return (
    <div className={classes.AppModal}>
      <AppBackdrop onClick={onClose} />
      <div className={classes.AppModal__Card_Container}>
        <div className={classes.AppModal__CardScrollContainer}>
          <div className={classes.AppModal__Card}>
            <h3 className={classes.AppModal__Card_Title}>{title}</h3>
            <div className={classes.AppModal__Card_Content}>
              {component}
            </div>
          </div>
        </div>
        <CloseButton
          className={classes.AppModal__CloseButton}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

AppModal.propTypes = {
  component: proptypes.oneOfType([
    proptypes.element,
    proptypes.string,
  ]),
  title: proptypes.string,
  onClose: proptypes.func.isRequired,
};

export default AppModal;
