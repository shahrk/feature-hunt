import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "../Components/Dashboard";
import "../setupTests";

/**
 * This file tests Dashboard.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * */

/*
Dashboard.js test IDs:

data-testid="dash_alert"    -- alert
data-testid="dash_proj"     -- projects
data-testid="dash_user"     -- username
data-testid="dash_sortpop"  -- sort by votes
data-testid="dash_sorttime" -- sort by latest
data-testid="TEXT" -- short description
*/

describe("Dashboard tests", () => {
  it("renders dashboard", () => {
    const history = createMemoryHistory();
    history.push("/:id");

    const { getByTestId, getByText, getByPlaceholderText } = render(
      <RRouter history={history}>
        <Dashboard />
      </RRouter>
    );

    // check presence of sort by
    const popular = getByText(/POPULAR/i);
    const latest = getByText(/LATEST/i);
    const yourproj = getByText(/YOUR PROJECTS-/i);
    const alertm = getByText(/You are logged in as/i);

    expect(popular).toBeInTheDocument();
    expect(latest).toBeInTheDocument();
    expect(yourproj).toBeInTheDocument();
    expect(alertm).toBeInTheDocument();

    // header
    const search = getByPlaceholderText(/Search Features.../i);
    expect(search).toBeInTheDocument();

    const headproj = getByText("Your Projects");
    expect(headproj).toBeInTheDocument();

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests Dashboard sort by", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <RRouter history={history}>
        <Dashboard />
      </RRouter>
    );

    const popsort = getByTestId("dash_sortpop");
    const timesort = getByTestId("dash_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });
});
