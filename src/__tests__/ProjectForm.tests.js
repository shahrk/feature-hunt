import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import ProjectForm from "../Components/ProjectForm";

import "../setupTests";

/**
 * This file tests ProjectForm.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * Shraddha Mishra (GitHub ID: shraddhamishra7)
 * */

/*
ProjectForm.js test IDs:

data-testid="submit_button" -- 
data-testid="submit_form" -- submit project from
"data-testid": "form-Name" -- 
"data-testid": "form-Desc" -- 
"data-testid": "form-Img" -- 
data-testid="TEXT" -- short description

*/

describe("ProjectForm tests", () => {
  it("renders ProjectForm", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    history.push("/dashboard");
    const {  getByText } =
      render(
        <RRouter history={history}>
          <ProjectForm />
        </RRouter>
      );
    const form = getByText(/Project Form/i);
    const name = getByText(/Name/i);
    const desc = getByText(/Description/i);
    const img = getByText(/Image URL/i);
    const sub = getByText(/submit/i);

    expect(form).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(sub).toBeInTheDocument();
  });

  it("ProjectForm: tests input, events", () => {
    const history = createMemoryHistory();
    history.push("/:id");
    history.push("/dashboard");
    const { getByTestId, getByText } =
      render(
        <RRouter history={history}>
          <ProjectForm />
        </RRouter>
      );

    const nuval = getByTestId("form-inputName");
    const desc = getByTestId("form-Desc");
    const img = getByTestId("form-Img");

    fireEvent.change(nuval, { target: { value: "testname" } });
    fireEvent.change(desc, { target: { value: "testDesc" } });
    fireEvent.change(img, { target: { value: "testImg" } });

    const subbutton = getByTestId("submit_button");
    fireEvent.submit(subbutton);

    const nuname = getByText(/testname/i);
    expect(nuname).toBeInTheDocument();
    const nudesc = getByText(/testdesc/i);
    expect(nudesc).toBeInTheDocument();
    const nuImg = getByText(/testimg/i);
    expect(nuImg).toBeInTheDocument();
  });

});
