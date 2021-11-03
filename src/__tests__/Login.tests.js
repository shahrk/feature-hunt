import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Login from "../Components/Login";
import "../setupTests";

/**
 * This file tests Login.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * Shraddha Mishra (GitHub ID: shraddhamishra7)
 * */

/*
Login.js test IDs:

data-testid="login_button"            -- login button
data-testid="login_title"             -- dialog title
data-testid="login_text"              -- dialog text
data-testid="login_email"             -- email text field
"data-testid": "login_inputEmail"     -- email input prop
data-testid="login_password"          -- password text field
"data-testid": "login_inputPassword"  -- password input prop
data-testid="login_cancel"            -- cancel button
data-testid="login_submit"            -- submit button
data-testid="login_error"             -- login error
data-testid="TEXT" -- short description

*/

describe("Login tests", () => {
  it("renders login", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, queryByText, queryByTestId } = render(
      <RRouter history={history}>
        <Login />
      </RRouter>
    );

    const login = getByText(/Login/i);
    expect(login).toBeInTheDocument();

    const loginb = getByTestId("login_button");
    fireEvent.click(loginb);

    const logtext = getByText(
      /Enter your email and password to view your projects/i
    );
    expect(logtext).toBeInTheDocument();

    const placeholderemail = getByText("Email Address");
    expect(placeholderemail).toBeInTheDocument();

    const placeholderpass = getByText("Password");
    expect(placeholderpass).toBeInTheDocument();

    const cancel = getByText(/cancel/i);
    const submit = getByText(/submit/i);

    expect(cancel).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("tests logging in", () => {
    // async ()
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, getByRole, queryByText } = render(
      <RRouter history={history}>
        <Login />
      </RRouter>
    );

    const loginb = getByTestId("login_button");
    fireEvent.click(loginb);

    const sub = getByRole("button", { name: /Submit/i });
    expect(sub).toBeInTheDocument();

    const can = getByRole("button", { name: /Cancel/i });
    expect(can).toBeInTheDocument();

    fireEvent.click(can);
    fireEvent.click(loginb);

    //fireEvent.click(sub);
    //const err = queryByText(/Error: /i);
    //await screen.findByText(/Error: /i);
    //await waitFor(() => expect(err).toBeInTheDocument());

    const add = getByTestId("login_inputEmail");
    const ress = "test@test.com";

    const pass = getByTestId("login_inputPassword");
    const word = "abc";

    expect(pass).toHaveValue("");
    expect(add).toHaveValue("");

    fireEvent.change(pass, { target: { value: word } });
    fireEvent.change(add, { target: { value: ress } });

    fireEvent.click(sub);

    expect(pass).toHaveValue(word);
    expect(add).toHaveValue(ress);

    // const err = screen.getByText(/Error: /i);
    // expect(err).toBeInTheDocument();
    // Error: We are unable to find a user with that email. Please double check you entered your email correctly
    // Error: Password is incorrect
  });
});
