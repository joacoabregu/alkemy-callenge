import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { store } from "../../state/store";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
describe("Verify user authorization", () => {
  test("render app in login page", () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.queryByText(/equipo/i)).not.toBeInTheDocument();
  });
});
