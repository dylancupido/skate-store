import React from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

const Login = ({ onLoginSuccess }) => {
  // Access stored username and password from Redux state
  const storedUsername = useSelector((state) => state.user.username);
  const storedPassword = useSelector((state) => state.user.password);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (
        values.username === storedUsername &&
        values.password === storedPassword
      ) {
        console.log("Login successful");
        onLoginSuccess();
      } else {
        console.log("Invalid username or password");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.username) {
        errors.username = "Username is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
