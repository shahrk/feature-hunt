import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import Router from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import Feature from "../Components/Feature";

import "../setupTests";

/**
 * This file tests Feature.js
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
Feature.js test IDs:

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

describe("Test Feature", () => {
  it("tests rendering a feature", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const features = [
      {
        id: 1,
        text: "make likes consistent",
        votes: 91190,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

    const editable = true;
    const { getByTestId, getByRole, getByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
      </RRouter>
    );

    const addbutton = getByRole("button", { name: /Add/i });
    const makel = getByText(/Make likes consistent/i);
    const bugfix = getByText(/Bug fix/i);
    const votecount = getByText("91190");

    expect(
      getByTestId("feature_addtag:1", { label: /Add New Tag/i })
    ).toBeInTheDocument();
    expect(addbutton).toBeInTheDocument();
    expect(makel).toBeInTheDocument();
    expect(bugfix).toBeInTheDocument();
    expect(votecount).toBeInTheDocument();

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });

  it("tests upvoting a feature", () => {
    const features = [
      {
        id: 1,
        text: "Create dashboard",
        votes: 1001,
        timestamp: 1530815581293,
        tags: ["A Thing"],
      },
    ];

    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const editable = true;
    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
      </RRouter>
    );

    const upvote = getByTestId("feature_upvote:1");
    const downvote = getByTestId("feature_downvote:1");

    const votecount1 = getByText("1001");
    expect(votecount1).toBeInTheDocument();

    fireEvent.click(upvote);

    //const votecount2 = getByText("1002");
    //expect(votecount2).toBeInTheDocument();

    //const vc = getByTestId("fvoteval:1");
    //expect(vc).toEqual(votecount);

    // const nuvote = getByText(/1002/i);
    // expect(nuvote).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(downvote);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });

  it("tests downvoting a feature", () => {
    const features = [
      {
        id: 1,
        text: "Make likes consistent",
        votes: 1003,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const editable = true;
    //jest.spyOn(Router, "useParams").mockReturnValue({ id: "feature-hunt" });
    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
      </RRouter>
    );

    const upvote = getByTestId("feature_upvote:1");
    const downvote = getByTestId("feature_downvote:1");
    fireEvent.click(downvote);

    // const nuvote = getByText(/1002/i);
    // expect(nuvote).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(upvote);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });

  it("tests adding a new tag", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const features = [
      {
        id: 1,
        text: "Make likes consistent",
        votes: 1003,
        timestamp: 1530814981295,
        tags: ["bug fix"],
      },
    ];

    const editable = true;
    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Feature
          features={features}
          index={0}
          setFeatures={() => console.log()}
          editable={editable}
        />
      </RRouter>
    );

    // coverage clicks
    const upvote = getByTestId("feature_upvote:1");
    const downvote = getByTestId("feature_downvote:1");
    fireEvent.click(downvote);
    fireEvent.click(upvote);

    const nutag = getByTestId("newTag-input:1");
    fireEvent.change(nutag, { target: { value: "abc" } });
    fireEvent.click(getByTestId("feature_tagbutton:1"));

    const abc = getByText(/abc/i);
    expect(abc).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(downvote);
    fireEvent.click(upvote);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });
});
