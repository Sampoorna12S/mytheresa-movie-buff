import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

const Modal = ({ children, handleModalClose }) => {
  return ReactDOM.createPortal(
    <div className="modalBg">
      <div className="closeButton" onClick={handleModalClose}>
        <p className="xButton">X</p>
      </div>
      <div className="modalContainer">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
