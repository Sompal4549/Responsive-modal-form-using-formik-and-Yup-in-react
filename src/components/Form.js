import React, { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  const buttonStyle = {
    position: "relative",
    zIndex: 2,
    backgroundColor: "teal",
    fontSize: "20px",
    lineHeight: "1",
    fontWeight: "400",
    width: "250px",
    textAlign: "center",
    height: "40px",
    border: "none",
    borderRadius: "5px",
    margin: "20px auto",
  };
  const contentStyle = {
    position: "relative",
    zIndex: "1",
    backgroundColor: "red",
    padding: "10px",
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button style={buttonStyle} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
    </>
  );
};

export default Form;
