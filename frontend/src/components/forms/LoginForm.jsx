import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "@hooks/useAuth.jsx";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { isLoading, login } = useAuth();

  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      await login(userData);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(userData.email.trim())) {
      newErrors.email = "Invalid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Name validation
    if (userData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <p>Already have an account ?</p>
      <h3 className="mb-4">Log In</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={userData.email}
          name="email"
        />
        {errors.email && <p className="text-danger fs-6">{errors.email}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={userData.password}
          name="password"
        />
        {errors.password && (
          <p className="text-danger fs-6">{errors.password}</p>
        )}
      </Form.Group>

      <Button className="button-primary" type="submit" disabled={isLoading}>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
