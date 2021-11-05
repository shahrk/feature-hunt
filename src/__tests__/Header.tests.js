import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Header from "../Components/Header";

import "../setupTests";

/**
 * This file tests Header.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * Shraddha Mishra (GitHub ID: shraddhamishra7)
 * */

/*
Header.js test IDs:

data-testid="header_home" -- click to go to home page
data-testid="header_input" -- search box
data-testid="login_header" -- header login button
data-testid="logout_header" -- header logout button
data-testid="header_links" -- links in header
data-testid="header_sub" -- submit project link
data-testid="header_rm" -- roadmap link
data-testid="header_fb" -- feedback link
data-testid="header_dash" -- dashboard link
data-testid="TEXT" -- short description

*/


describe("Header tests", () => {
  it("renders header: screen checks 1", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const submitProject = screen.getByText(/Submit Project/i);
    const roadmap = screen.getByText(/Roadmap/i);
    const feedback = screen.getByText(/Feedback/i);

    const logout = screen.getByText(/LogOut/i);
    expect(logout).toBeInTheDocument();

    expect(submitProject).toBeInTheDocument();
    expect(roadmap).toBeInTheDocument();
    expect(feedback).toBeInTheDocument();
  });

  test("renders header: screen checks 2", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    history.push("/dashboard");
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <RRouter history={history}>
        <Header />
      </RRouter>
    );

    const search = getByPlaceholderText(/Search Features.../i);
    expect(search).toBeInTheDocument();
    expect(history.length).toBe(3);
    expect(history.location.pathname).toBe("/dashboard");
  });

  it("header tests: checks navigation, logout", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, getByRole, queryByText } = render(
      <RRouter history={history}>
        <Header />
      </RRouter>
    );

    // home button
    const home = getByTestId("header_home");

    const submittext = getByText(/Submit Project/i);
    expect(submittext).toBeInTheDocument();

    // links
    const submit = getByTestId("header_sub");
    const dash = getByTestId("header_dash");
    const feedback = getByTestId("header_fb");
    const roadmap = getByTestId("header_rm");

    const links = getByTestId("header_links");
    expect(links.children.length).toBe(4); // check number of links

    expect(history.length).toBe(2);
    fireEvent.click(home);
    expect(history.length).toBe(3);
    fireEvent.click(dash);
    expect(history.length).toBe(4);
    fireEvent.click(roadmap);
    expect(history.length).toBe(5);
    fireEvent.click(submit);
    expect(history.length).toBe(6);
    fireEvent.click(feedback);
    expect(history.length).toBe(7);
    expect(history.location.pathname).toBe("/feedback");

    const logout = getByRole("button", { name: /LogOut/i }); // id: "logout_header"
    expect(logout).toBeInTheDocument();

    fireEvent.click(logout);
    expect(history.length).toBe(8);
    expect(history.location.pathname).toBe("/");

    const nothere = queryByText(/Your Projects/i); // ensure is absent
    expect(nothere).not.toBeInTheDocument();
  });

  it("header tests: tests search", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByPlaceholderText } = render(
      <RRouter history={history}>
        <Header />
      </RRouter>
    );
    
    const search = getByTestId("header_input");
    fireEvent.change(search, { target: { placeholder: "searchword" } });

    fireEvent.keyPress(getByTestId("header_input"), {
      key: "Enter"
    });

    const searchword = getByPlaceholderText(/searchword/i);
    expect(searchword).toBeInTheDocument();
  });

});
