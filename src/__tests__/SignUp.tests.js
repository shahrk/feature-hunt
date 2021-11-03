import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import SignUp from "../Components/SignUp";

import "../setupTests";

/**
 * This file tests SignUp.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * Shraddha Mishra (GitHub ID: shraddhamishra7)
 * */

/*
SignUp.js test IDs:
data-testid="signup_button"           -- signup button
data-testid="signup_dialog_title"     -- dialog title
data-testid="signup_dialog_text"      -- dialog text
data-testid="signup_name"             -- name text field
"data-testid": "signup_inputName"     -- name input prop
data-testid="signup_email"            -- email text field
"data-testid": "signup_inputEmail"    -- email input prop
data-testid="signup_password"         -- password text field
"data-testid": "signup_inputPassword" -- password input prop
data-testid="signup_cancel"           -- cancel button
data-testid="signup_submit"           -- submit button
data-testid="signup_error"            -- alert error
data-testid="TEXT" -- short description

*/

describe("SignUp tests", () => {
 
  it("renders signup", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, queryByText, queryByTestId, getByRole } = render(
      <RRouter history={history}>
        <SignUp />
      </RRouter>
    );

    const signup = getByText(/signup/i);
    expect(signup).toBeInTheDocument();

    //const signupb = getByTestId("signup_button");
    //fireEvent.click(signupb);

    const signupb = getByRole("button", { name: /SignUp/i });
    //expect(sub).toBeInTheDocument();

    fireEvent.click(signupb);

    const signtext = getByText(/Enter your name, email and password to get started with Feature Hunt!/i);
    expect(signtext).toBeInTheDocument();

    const placeholdername = getByText("Name");
    expect(placeholdername).toBeInTheDocument();

    const placeholderemail = getByText("Email Address");
    expect(placeholderemail).toBeInTheDocument();

    const placeholderpass = getByText("Password");
    expect(placeholderpass).toBeInTheDocument();

    const cancel = getByText(/Cancel/i);
    const submit = getByText(/submit/i);

    expect(cancel).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it("tests signing up", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, getByRole, queryByText } =
      render(
        <RRouter history={history}>
          <SignUp />
        </RRouter>
      );

    //const si = getByTestId("login_button");
    //fireEvent.click(loginb);

    const signupb = getByRole("button", { name: /SignUp/i });
    //expect(sub).toBeInTheDocument();

    fireEvent.click(signupb);

    const sub = getByRole("button", { name: /Submit/i });
    expect(sub).toBeInTheDocument();

    const can = getByRole("button", { name: /Cancel/i });
    expect(can).toBeInTheDocument();

    fireEvent.click(can);
    fireEvent.click(signupb);

    const name = getByTestId("signup_inputName");
    const nameval = "Test Name"

    const add = getByTestId("signup_inputEmail");
    const ress = "test@test.com";

    const pass = getByTestId("signup_inputPassword");
    const word = "abc";

    expect(name).toHaveValue("");
    expect(pass).toHaveValue("");
    expect(add).toHaveValue("");

    fireEvent.change(name, { target: { value: nameval } });
    fireEvent.change(pass, { target: { value: word } });
    fireEvent.change(add, { target: { value: ress } });

    fireEvent.click(sub);

    expect(name).toHaveValue(nameval);
    expect(pass).toHaveValue(word);
    expect(add).toHaveValue(ress);

    // const err = screen.getByText(/Error: /i);
    // expect(err).toBeInTheDocument();
    // Error: We are unable to find a user with that email. Please double check you entered your email correctly
    // Error: Password is incorrect
  });

});
