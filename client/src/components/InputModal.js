import React, { Fragment } from "react";

import "./InputModal.scss";

const ModalInput = ({ title, isOpen, children }) => {
  return (
    <Fragment>
      {isOpen && (
        <div className="modalInputOverlay">
          <div className="modalWindow">
            <div className="modalHeader">
              <div className="modalTitle">{title}</div>
            </div>
            <div className="modalBody">{children}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ModalInput;
