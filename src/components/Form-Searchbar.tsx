import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { heroSearchResponse } from "../types/interfaces";
import { FormSearchBarProps } from "../types/types";
import FormControl from "react-bootstrap/esm/FormControl";
import Alert from "react-bootstrap/esm/Alert";

const validate = (values: { search?: string }) => {
  const errors: { search?: string } = {};
  if (!values.search) {
    errors.search = "Required";
  }
  return errors;
};

export default function FormSearchBar({ setter }: FormSearchBarProps) {
  let [searchError, setSearchError] = useState<boolean>(false);
  let [apiError, setApiError] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validate,
    onSubmit: (value) => {
      setSearchError(false);
      setApiError(false);
      let url = "/search/" + value.search;
      axios
        .get<heroSearchResponse>(url)
        .then((data) => {
          let { response } = data.data;
          if (response === "success") {
            let { results } = data.data;
            setter(results);
          } else {
            setSearchError(true);
          }
        })
        .catch((error) => {
          setApiError(true);
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mb-1 d-flex">
        <FormControl
          name="search"
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={formik.values.search}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      {formik.touched.search && formik.errors.search ? (
        <Form.Text>{formik.errors.search}</Form.Text>
      ) : null}
      {searchError && (
        <Alert>No se ha encontrado un Heroe con el nombre ingresado</Alert>
      )}
      {apiError && (
        <Alert>
          Se ha producido un error en la base de datos. Vuelva a intentarlo
        </Alert>
      )}
    </>
  );
}
