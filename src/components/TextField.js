import React from "react";
import { ErrorMessage, useField } from "formik";
const labelStyle = {
  display: "block",
  width: "100%",
};
const inputStyle = {
  display: "block",
  marginTop: "10px",
  marginBottom: "10px",
  width: "100%",
  height: "35px",
  fontSize: "18px",
};
const errorMessagesStyle = {
  color: "red",
  fontSize: "16px",
};
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label style={labelStyle} htmlFor={field.name}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="text"
        placeholder={label}
        className={`input ${meta.touched && meta.error && "isInvalid"}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="error"
        name={field.name}
        style={errorMessagesStyle}
      />
    </div>
  );
};
