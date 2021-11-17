import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import Router from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import Product from "../Components/Product";
import Feature from "../Components/Feature";

import "../setupTests";

/**
 * This file tests Product.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 *
 * Leila Moran (GitHub ID: snapcat)
 * NAME (GitHub ID: GHID)
 *
 * */

/*
Product.js test IDs:

data-testid="prod_sortpop" -- sort by popularity/vote num
data-testid="prod_sorttime" -- sort by time/latest
data-testid="prod_form"     -- submit a feature/add feature
data-testid="prod_input"    -- feature input bar
*/

/*
Feature.js test IDs: may be useful for this suite

Replace all # with the ID number of the feature.
Ex: data-testid={"feature_tagbutton:" + features[index].id}

    const features = [
      {
        id: 1,
        text: "make likes consistent",
        votes: 1,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

const upvote = getByTestId("feature_upvote:1");

data-testid="feature_tag_container:#" -- tag-container class
data-testid="feature_content:#"   -- feature-content class
data-testid="feature_tag:#"       -- feature tag
data-testid="feature_newtag:#"    -- add new tag
"data-testid": "newTag-input:#"   -- input prop; id for tag input, Feature.js line 66
data-testid="feature_tagbutton:#" -- button to add new tag
data-testid="feature_upvote:#"    -- upvote a feature
data-testid="feature_downvote:#"  -- downvote a feature
data-testid="fvoteval:#"          -- the number of votes shown
*/

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Test Product", () => {
  //TODO: FIGURE OUT HOW TO CHECK IF THE CLASS IS HIGHLIGHTED OR NOT.
  it("tests sort by", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId } = render(
      <RRouter history={history}>
        <Product />
      </RRouter>
    );

    //TODO: FIGURE OUT HOW TO CHECK IF THE CLASS IS HIGHLIGHTED OR NOT.
    const popsort = getByTestId("prod_sortpop");
    const timesort = getByTestId("prod_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests adding a feature to an empty list", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Product />
      </RRouter>
    );

    // coverage clicks
    const popsort = getByTestId("prod_sortpop");
    const timesort = getByTestId("prod_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    const input = getByTestId("prod_input");
    const nuval = "fix sorting tests";
    fireEvent.change(input, { target: { value: nuval } });
    fireEvent.submit(getByTestId("prod_form")); // submit the new feature

    const cap = getByText("Fix sorting tests"); // is it capitalized?
    expect(cap).toBeInTheDocument();
    const nutag = getByText(/Enhancement/i); // is it tagged?
    expect(nutag).toBeInTheDocument();

    const projectName = getByText(/Feature-hunt/i);
    expect(projectName).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests adding empty feature to an empty list", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId, queryByText } = render(
      <RRouter history={history}>
        <Product />
      </RRouter>
    );

    // coverage clicks
    const popsort = getByTestId("prod_sortpop");
    const timesort = getByTestId("prod_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    const input = getByTestId("prod_input");
    const nuval = "";
    fireEvent.change(input, { target: { value: nuval } });
    fireEvent.submit(getByTestId("prod_form")); // submit the new feature

    const nottag = queryByText(/Enhancement/i); // ensure the default tag is absent
    expect(nottag).not.toBeInTheDocument();

    // coverage clicks
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests adding a feature to an existing list of features", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const features = [
      {
        id: 1,
        text: "Make likes consistent",
        votes: 91190,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

    const editable = true;
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
        <Product />
      </RRouter>
    );

    // coverage clicks
    const popsort = getByTestId("prod_sortpop");
    const timesort = getByTestId("prod_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    const form = getByTestId("prod_form"); // for reference
    const input = getByTestId("prod_input");
    const nuval = "fix sorting tests";
    fireEvent.change(input, { target: { value: nuval } });
    fireEvent.submit(getByTestId("prod_form")); // submit the new feature

    const cap = getByText("Fix sorting tests"); // is it capitalized?
    expect(cap).toBeInTheDocument();
    const nutag = getByText(/Enhancement/i); // is it tagged?
    expect(nutag).toBeInTheDocument();

    const makel = getByText(/Make likes consistent/i);
    expect(makel).toBeInTheDocument();
    const bugfix = getByText(/Bug fix/i);
    expect(bugfix).toBeInTheDocument();
    const votecount = getByText("91190");
    expect(votecount).toBeInTheDocument();

    const projectName = getByText(/Feature-hunt/i);
    expect(projectName).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests adding an empty feature to an existing list of features", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const features = [
      {
        id: 1,
        text: "Make likes consistent",
        votes: 91190,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

    const editable = true;
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId, getByText, queryByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
        <Product />
      </RRouter>
    );

    // coverage clicks
    const popsort = getByTestId("prod_sortpop");
    const timesort = getByTestId("prod_sorttime");
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    const form = getByTestId("prod_form"); // for reference
    const input = getByTestId("prod_input");
    const nuval = "";
    fireEvent.change(input, { target: { value: nuval } });
    fireEvent.submit(getByTestId("prod_form")); // submit the new feature

    const nottag = queryByText(/Enhancement/i); // ensure the default tag is absent
    expect(nottag).not.toBeInTheDocument();

    const makel = getByText(/Make likes consistent/i);
    expect(makel).toBeInTheDocument();
    const bugfix = getByText(/Bug fix/i);
    expect(bugfix).toBeInTheDocument();
    const votecount = getByText("91190");
    expect(votecount).toBeInTheDocument();

    const projectName = getByText(/Feature-hunt/i);
    expect(projectName).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(timesort);
    fireEvent.click(popsort);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });
});
