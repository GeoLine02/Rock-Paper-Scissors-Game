import React from "react";
import ReactDom from "react-dom";
import close from "../assets/images/icon-close.svg";

const RulesModal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 z-1000">
        <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white py-5 px-5 z-1000 rounded-lg">
          <button onClick={onClose}>
            <img src={close} alt="close btn" />
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default RulesModal;
