import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const validate = (values: { email?: string; password?: string }) => {
  const errors: { password?: string; email?: string } = {};

  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }

  return errors;
};

export default function LoginForm() {
  let [isError, setIsError] = useState<boolean>(false);
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      if (isError) {
        setIsError(false);
      }

      axios
        .post("http://challenge-react.alkemy.org/", values)
        .then((response) => {
          let data = response.data;
          window.localStorage.setItem("loggedUser", JSON.stringify(data));

          history.push("/home");
        })
        .catch((error) => {
          setIsError(true);
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email ? (
            <Form.Text>{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Form.Text>{formik.errors.password}</Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {isError ? (
        <Alert variant="warning">Usuario y/o contraseña no válidos</Alert>
      ) : null}
    </>
  );
}
