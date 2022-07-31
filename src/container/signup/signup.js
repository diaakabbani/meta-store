import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import "./signup.scss";
import Footer from "../../component/footer/footer";
import Header from "../../widgets/header/header";

const signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <div className="conup">
      <Header />
      <div className="sup">
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
        >
          {(formik) => (
          
              <Form className="sinform">
              <h1> Signup</h1>
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <br />
                <button className="btn " type="submit">
                  Register
                </button>
                <br />
                <button className="btn " type="reset">
                  Reset
                </button>
              </Form>
          
          )}
        </Formik>
        <br />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default signup;
