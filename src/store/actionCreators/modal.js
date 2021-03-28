import {
  DISPLAY_MODAL_WITH_COMPONENT,
  HIDDE_MODAL,
} from '@/store/actions/modal';

const displayModalWithComponent = ({ component, title }) => ({
  type: DISPLAY_MODAL_WITH_COMPONENT,
  payload: { component, title },
});

const hiddeModal = () => ({ type: HIDDE_MODAL });

export { displayModalWithComponent, hiddeModal };
