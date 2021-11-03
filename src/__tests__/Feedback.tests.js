import React from "react";
import { render } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Feedback from "../Components/Feedback";
import "../setupTests";

/**
 * This file tests Feedback.js
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * */

/*
Feedback.js test IDs: none
*/

describe("Feedback tests", () => {
  it("renders Feedback", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    const { getByPlaceholderText, getByText } = render(
      <RRouter history={history}>
        <Feedback />
      </RRouter>
    );
    const search = getByPlaceholderText(/Search Features.../i);
    const commstr = getByText(/Leave a comment in the box below/i);
    const patient = getByText(
      /May take some time to load, please be patient!/i
    );
    expect(search).toBeInTheDocument();
    expect(commstr).toBeInTheDocument();
    expect(patient).toBeInTheDocument();

    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe("/:id");
  });
});
