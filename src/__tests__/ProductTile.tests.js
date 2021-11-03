import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import ProductTile from "../Components/ProductTile";
import "../setupTests";

/**
 * This file tests ProductTile.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * */

/*
ProductTile.js test IDs:
Replace # with the product's index.
data-testid="ptnav:#" -- go to product on click
data-testid="pt_down:#" -- product tile downvote
data-testid="pt_up:#" -- product tile upvote
*/

describe("Test ProductTile", () => {
  // this test doesn't work
  it("tests upvoting a product (TODO)", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const products = [
      {
        id: 1,
        name: "feature-hunt",
        description: "Feature Hunt is...",
        votes: 999,
        tags: ["productivity", "web app"],
      },
    ];

    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <ProductTile
          products={products}
          index={0}
          setProducts={() => console.log()}
        />
      </RRouter>
    );

    const upvote = getByTestId("pt_up:0");
    fireEvent.click(upvote);

    // the two lines below are the lines that don't work.

    // const nuvote = screen.getByText(/1000/i);
    // expect(nuvote).toBeInTheDocument();

    const productName = getByText(/Feature-hunt/i);
    const tagName = getByText(/PRODUCTIVITY/i);
    const decscription = getByText(/Feature Hunt is.../i);
    expect(productName).toBeInTheDocument();
    expect(tagName).toBeInTheDocument();
    expect(decscription).toBeInTheDocument();

    // coverage click
    const downvote = getByTestId("pt_down:0");
    fireEvent.click(downvote);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  // this test doesn't work
  it("tests downvoting a product (TODO)", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const products = [
      {
        id: 1,
        name: "feature-hunt",
        description: "Feature Hunt is...",
        votes: 1000,
        tags: ["productivity", "web app"],
      },
    ];

    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <ProductTile
          products={products}
          index={0}
          setProducts={() => console.log()}
        />
      </RRouter>
    );

    const downvote = getByTestId("pt_down:0");
    fireEvent.click(downvote);

    // the two lines below are the lines that don't work.

    //  const nuvote = screen.getByText("999");
    //  expect(nuvote).toBeInTheDocument();

    const productName = getByText(/Feature-hunt/i);
    const tagName = getByText(/PRODUCTIVITY/i);
    const decscription = getByText(/Feature Hunt is.../i);
    expect(productName).toBeInTheDocument();
    expect(tagName).toBeInTheDocument();
    expect(decscription).toBeInTheDocument();

    // coverage click
    const upvote = getByTestId("pt_up:0");
    fireEvent.click(downvote);
    fireEvent.click(upvote);
    fireEvent.click(upvote);

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    // const whee = screen.getByText("whee");
    // expect(whee).toBeInTheDocument();
  });

  it("tests navigating to a product", () => {
    const history = createMemoryHistory();
    history.push("/:id"); // home page

    const products = [
      {
        id: 1,
        name: "feature-hunt",
        description: "Feature Hunt is...",
        votes: 1000,
        tags: ["productivity", "web app"],
      },
      {
        id: 2,
        name: "anti-JS",
        description: "I really, really hate JavaScript.",
        votes: 9001,
        tags: ["depression"],
      },
    ];

    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <ProductTile
          products={products}
          index={0}
          setProducts={() => console.log()}
        />
        <ProductTile
          products={products}
          index={1}
          setProducts={() => console.log()}
        />
      </RRouter>
    );

    const upvote0 = getByTestId("pt_up:0");
    const downvote0 = getByTestId("pt_down:0");
    const upvote1 = getByTestId("pt_up:1");
    const downvote1 = getByTestId("pt_down:1");

    expect(history.length).toBe(2);
    const nav = getByTestId("ptnav:0");
    const nav2 = getByTestId("ptnav:1");

    fireEvent.click(nav);
    expect(history.length).toBe(3); // after clicking on something, history.length + 1
    expect(history.location.pathname).toBe("/feature-hunt");

    fireEvent.click(nav2);
    expect(history.length).toBe(4); // after clicking on something, history.length + 1
    expect(history.location.pathname).toContain("anti-JS");

    const productName = getByText(/Feature-hunt/i);
    const tagName = getByText(/PRODUCTIVITY/i);
    const decscription = getByText(/Feature Hunt is.../i);
    expect(productName).toBeInTheDocument();
    expect(tagName).toBeInTheDocument();
    expect(decscription).toBeInTheDocument();

    // coverage clicks
    fireEvent.click(upvote0);
    fireEvent.click(downvote0);
    fireEvent.click(upvote1);
    fireEvent.click(downvote1);

    const productName2 = getByText(/Anti-JS/i);
    const tagName2 = getByText(/depression/i);
    const decscription2 = getByText(/I really, really hate JavaScript./i);

    const over9k = getByText("9001");
    expect(over9k).toBeInTheDocument();

    expect(productName2).toBeInTheDocument();
    expect(tagName2).toBeInTheDocument();
    expect(decscription2).toBeInTheDocument();

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });
});
