import React from "react";
import Signup from "./Signup";

const modalStyle = {
  position: "fixed",
  top: "50%",
  display: "block",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  zIndex: 20,
  padding: "20px",
};
const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 10,
};
const container = {
  width: "100%",
};
const row = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const col = {
  flex: "1",
};
const imgStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "100%",
};
const closeButton = {
  position: "fixed",
  top: "0",
  zIndex: 30,
  cursor: "pointer",
  fontSize: "34px",
  left: "225px",
};
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div style={overlayStyles} />
      <div style={modalStyle}>
        <div style={container}>
          <div style={closeButton} onClick={onClose}>
            &times;
          </div>
          <div style={row}>
            <div style={col}>
              <img
                style={imgStyle}
                src="https://images.pexels.com/photos/4308937/pexels-photo-4308937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </div>
            <div style={col}>
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
