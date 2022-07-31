import React from "react";
import "./login.scss";
import { Formik, Form } from "formik";
import { LoginTextField } from "./LoginTextField";
// import { TextField } from "./TextField";
import * as Yup from "yup";
import Footer from "../../component/footer/footer";
import Header from "../../widgets/header/header";

const login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  return (
    <div className="con">
      <Header />
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className="form">
              <h1> Login</h1>
              <LoginTextField label="Email" name="email" type="email" />
              <LoginTextField
                label="password"
                name="password"
                type="password"
              />
              <br />
              <button className="btn" type="submit">
                Login
              </button>
              <button className="btn" type="reset">
                Forget Password
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

export default login;
