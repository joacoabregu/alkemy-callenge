import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { store } from "../../state/store";
import { createMemoryHistory } from "history";

test("rendering and submitting a basic Formik form", async () => {
  const history = createMemoryHistory();
  const utils = render(
    <Provider store={store}>
      <Router history={history}>
        <Form />
      </Router>
    </Provider>
  );

  let inputEmail = utils.getByPlaceholderText(/email/i) as HTMLInputElement;
  let inputPassword = utils.getByPlaceholderText(
    /password/i
  ) as HTMLInputElement;
  let submit = utils.getByRole("button");
  userEvent.type(inputEmail, "challenge@alchemy.org");
  userEvent.type(inputPassword, "prueba");
  userEvent.click(submit);

  await waitFor(() => {
    expect(inputEmail).toHaveValue("challenge@alchemy.org");
    expect(inputPassword.value).toBe("prueba");

    expect(utils.getByTestId("alerta")).toBeInTheDocument();
  });
});
