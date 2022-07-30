import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
export default function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
      // onSubmit={() => {
      //   console.log("I am stupid");
      // }}
    >
      {(formik) => (
        <div>
          <h1>Sign Up</h1>
          {/* {console.log(formik.values, "values")} */}
          <Form>
            <TextField name="firstName" type="text" label="First Name" />
            <TextField name="lastName" type="text" label="Last Name" />
            <TextField name="email" type="text" label="Email" />
            <TextField name="password" type="text" label="Password" />
            <TextField
              name="confirmPassword"
              type="text"
              label="Confirm Password"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                height: "35px",
              }}
            >
              <button
                type={"submit"}
                style={{
                  backgroundColor: "green",
                  border: "none",
                  width: "50%",
                  height: "35px",
                  margin: "5px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Register
              </button>
              <button
                type="reset"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  width: "50%",
                  height: "35px",
                  margin: "5px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
const buttonContainer = {};
