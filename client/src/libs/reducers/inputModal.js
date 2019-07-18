import { MOUNT_INPUT_MODAL, UNMOUNT_INPUT_MODAL } from "../actions";

const initialState = {
  title: "",
  isOpen: false,
  children: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOUNT_INPUT_MODAL:
      const { title, children } = action.inputModal;
      return {
        title,
        children,
        isOpen: true
      };

    case UNMOUNT_INPUT_MODAL:
      return {
        title: "",
        isOpen: false,
        children: null
      };
    default:
      return state;
  }
};
