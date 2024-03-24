import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Register() {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function callRegister(reqBody) {
    console.log(reqBody);
    setErrorMessage("");
    setIsLoading(true);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, reqBody)
      .catch(err => {
        setIsLoading(false)
        setErrorMessage(err.response.data.message)
      })
    console.log(data);

    if (data.message == "success") {
      navigate("/login");
    }
  }


  let validateSchema = Yup.object({
    name: Yup.string()
      .min(3, "name min length is 3")
      .max(10, "max length is 10")
      .required("name is required"),

    email: Yup.string().email("email pattern is invalid").required("email is required"),

    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password starts with a letter either uppercase or lowercase,Be between 6 and 9 characters in total,Can only contain letters (A-Z or a-z) and numbers (0-9)")
      .required("password is required"),

    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "re-Password pattern is invalid")
      .required("rePassword is required"),

    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "invalid Phone ")
      .required("Phone is required"),

  });

  let registerForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    validationSchema: validateSchema,
    onSubmit: callRegister
  })

  return (
    <>
      <Helmet>
        <title>Register page</title>
      </Helmet>

      <div className="w-50 mx-auto my-5">
        <h2 className="mb-3">Register Now: </h2>
        {errorMessage ? (<div className="alert alert-danger"> {errorMessage} </div>) : null}

        <form onSubmit={registerForm.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="name" className="mb-1">
              {" "}
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={registerForm.values.name}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            ></input>

            {registerForm.errors.name && registerForm.touched.name ? (
              <div className="alert  alert-danger">
                {" "}
                {registerForm.errors.name}{" "}
              </div>
            ) : null}
          </div>

          <div className="form-group mb-2">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={registerForm.values.email}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            ></input>

            {registerForm.errors.email && registerForm.touched.email ? (
              <div className="alert alert-danger">
                {" "}
                {registerForm.errors.email}
              </div>
            ) : null}
          </div>

          <div className="form-group mb-2">
            <label htmlFor="password" className="mb-1">
              {" "}
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"

              className="form-control"
              value={registerForm.values.password}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            ></input>

            {registerForm.errors.password && registerForm.touched.password ? (
              <div className="alert alert-danger">
                {" "}
                {registerForm.errors.password}
              </div>
            ) : null}
          </div>

          <div className="form-group mb-2">
            <label htmlFor="rePassword" className="mb-1">
              rePassword
            </label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              className="form-control"
              value={registerForm.values.rePassword}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            ></input>

            {registerForm.errors.rePassword &&
              registerForm.touched.rePassword ? (
              <div className="alert alert-danger">
                {" "}
                {registerForm.errors.rePassword}
              </div>
            ) : null}
          </div>

          <div className="form-group   mb-2">
            <label htmlFor="phone" className="mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={registerForm.values.phone}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleBlur}
            ></input>

            {registerForm.errors.phone ? (
              <div className="alert alert-danger">
                {" "}
                {registerForm.errors.phone}
              </div>
            ) : null}
          </div>
          <button disabled={registerForm.isValid == false || registerForm.dirty == false} type="submit" className="btn bg-main text-white d-block ms-auto">
            {isLoading ? (<i className="fa fa-spinner fa-spin "></i>) : ("Register")}
          </button>
        </form>
      </div>
    </>
  )
}
