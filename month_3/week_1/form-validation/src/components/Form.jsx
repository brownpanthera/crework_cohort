import React, { useState, useEffect } from "react";

function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>SignUp Form</h1>
        <div className="uiForm">
          <div className="usernameThing">
            <label>Username</label>
            <div className="forNexline">
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Your Username"
                value={formValues.username}
                onChange={handleChange}
              ></input>
            </div>
              <p>{formErrors.username}</p>
          </div>
          <div className="emailThing">
            <label>Email</label>
            <div className="forNexline">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                value={formValues.email}
                onChange={handleChange}
              ></input>
            </div>
              <p>{formErrors.email}</p>
          </div>
          <div className="passwordThing">
            <label>Password</label>
            <div className="forNextline">
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={formValues.password}
                onChange={handleChange}
              ></input>
            </div>
              <p>{formErrors.password}</p>
          </div>
          <button className="btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
