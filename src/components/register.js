import React from "react";
import { useFormik } from "formik";

// Register component definition
const Register = () => {
  // Initialize Formik with initial values, submit handler, and validation logic
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log("onSubmit", values);
    },
    validate: (values) => {
      // Validation logic
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "First name is required";
      }
      if (values.firstName.length > 14) {
        errors.firstName = "First name is too long";
      }
      if (!values.surName) {
        errors.surName = "Surname is required";
      }
      if (values.surName.length > 20) {
        errors.surName = "Surname is too long";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (values.username.length > 20) {
        errors.username = "Username is too long";
      }

      // Password validation
      const length = /.{8,}/;
      const uppercase = /[A-Z]/;
      const lowercase = /[a-z]/;
      const number = /[0-9]/;
      const specialChar = /[!@#$%^&*()_+{}\]:;<>,.?~\\|-]/;

      if (
        length.test(values.password) &&
        uppercase.test(values.password) &&
        lowercase.test(values.password) &&
        number.test(values.password) &&
        specialChar.test(values.password)
      ) {
        console.log("Password is valid.");
      } else {
        errors.password =
          "Password requires a capital letter, a number and a special character, and at least 8 characters.";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "You must confirm password";
      }
      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Your password does not match";
      }

      return errors;
    },
  });

  // Render the registration form
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          {/* First Name input */}
          <input
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.firstName &&
              formik.touched.firstName &&
              formik.errors.firstName}
          </div>
        </div>
        <div className="field">
          {/* Surname input */}
          <input
            name="surName"
            placeholder="Surname"
            value={formik.values.surName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.surName &&
              formik.touched.surName &&
              formik.errors.surName}
          </div>
        </div>
        <div className="field">
          {/* Email input */}
          <input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className="field">
          {/* Username input */}
          <input
            name="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
        <div className="field">
          {/* Password input */}
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
        <div className="field">
          {/* Confirm Password input */}
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="error">
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword &&
              formik.errors.confirmPassword}
          </div>
        </div>
        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
