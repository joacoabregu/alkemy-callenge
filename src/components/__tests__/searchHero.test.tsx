import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroesSearch from "../HeroesSearch";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import { Router } from "react-router-dom";

test("required value to search hero", async () => {
  const history = createMemoryHistory();
  const component = render(
    <Provider store={store}>
      <Router history={history}>
        <HeroesSearch />
      </Router>
    </Provider>
  );

  userEvent.click(component.getByRole("button", { name: /search/i }));

  await waitFor(() =>
    expect(component.getByText(/requerido/i)).toBeInTheDocument()
  );
  screen.debug();
});
