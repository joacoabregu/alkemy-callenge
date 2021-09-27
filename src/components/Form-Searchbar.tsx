import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { heroSearchResponse } from "../types/interfaces";
import { FormSearchBarProps } from "../types/types";

const validate = (values: { search?: string }) => {
  const errors: { search?: string } = {};
  if (!values.search) {
    errors.search = "Required";
  }
  return errors;
};

export default function FormSearchBar({ setter }: FormSearchBarProps) {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (value) => {
      let url = "/search/" + value.search;
      axios
        .get<heroSearchResponse>(url)
        .then((response) => {
          let { results } = response.data;
          setter(results);
          console.log(results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="search">
        <Form.Control
          name="search"
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={formik.values.search}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.search && formik.errors.search ? (
          <Form.Text>{formik.errors.search}</Form.Text>
        ) : null}
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
}
