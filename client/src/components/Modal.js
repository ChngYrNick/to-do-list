import React, { Fragment } from "react";

import "./Modal.scss";

const Modal = ({ title, isOpen, onCancel, onSubmit, children }) => {
  return (
    <Fragment>
      {isOpen && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
            </div>
            <div className="modalBody">{children}</div>
            <div className="modalFooter">
              <button className="btn" onClick={onCancel}>
                Cancel
              </button>
              <button className="btn" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Modal;
