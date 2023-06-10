import React, { useState, useEffect } from "react";

const Modal = ({ trigger, modalId, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const triggerButton = document.getElementById(trigger);
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    };
    const handleOutsideClick = (event) => {
      if (event.target === overlayRef.current) {
        closeModal();
      }
    };
    triggerButton.addEventListener("click", openModal);
    overlayRef.current.addEventListener("click", handleOutsideClick);
    return () => {
      triggerButton.removeEventListener("click", openModal);
      overlayRef.current.removeEventListener("click", handleOutsideClick);
    };
  }, [trigger]);

  const overlayRef = React.createRef();
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    zIndex: 9999,
  };
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 9998,
  };
  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div id={modalId}>
          <div className="overlay" style={overlayStyle} ref={overlayRef} />
          <div className="modal" style={modalStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
