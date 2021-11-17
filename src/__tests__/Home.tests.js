import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Router as RRouter } from "react-router-dom"; // NOT A TYPO
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import Home from "../Components/Home";
import ProductTile from "../Components/ProductTile";
import "../setupTests";

/**
 * This file tests Home.js
 *
 * GitHub repository: CSC510-Group-25/feature-hunt
 *
 * Authored by: Group 25
 * Leila Moran (GitHub ID: snapcat)
 * */

/*
Home.js test IDs:

data-testid="home_header"   -- header text
data-testid="home_sortpop"  -- sort by popularity
data-testid="home_sorttime" -- sort by latest
*/

describe("Home tests", () => {
  it("renders Home.js", () => {
    const { getByTestId, getByText } = render(<Home />);
    const head = getByText(/products/i);
    expect(head).toBeInTheDocument();
    const pop = getByText(/popular/i);
    expect(pop).toBeInTheDocument();
    const late = getByText(/latest/i);
    expect(late).toBeInTheDocument();

    // uncomment the two lines below in VS Code.
    // In the terminal, enter: npm run test.
    // The document should appear.

    //const whee = screen.getByText("whee");
    //expect(whee).toBeInTheDocument();
  });

  it("tests Home.js sort by", () => {
    const { getByTestId, getByText } = render(<Home />);

    const head = getByText(/products/i);
    expect(head).toBeInTheDocument();
    const pop = getByText(/popular/i);
    expect(pop).toBeInTheDocument();
    const late = getByText(/latest/i);
    expect(late).toBeInTheDocument();

    const popsort = getByTestId("home_sortpop");
    const timesort = getByTestId("home_sorttime");
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

  it("renders Home and ProductTile", () => {
    const history = createMemoryHistory();
    history.push("/");

    const products = [
      {
        id: 1,
        name: "feature-hunt",
        description: "Feature Hunt is a...",
        votes: 2,
        tags: ["productivity", "web app"],
      },
    ];

    const { getByTestId, getByText } = render(
      <RRouter history={history}>
        <Home />
        <ProductTile
          products={products}
          index={0}
          setProducts={() => console.log()}
        />
      </RRouter>
    );

    const head = getByText(/products/i);
    expect(head).toBeInTheDocument();
    const pop = getByText(/popular/i);
    expect(pop).toBeInTheDocument();
    const late = getByText(/latest/i);
    expect(late).toBeInTheDocument();

    const fh = getByText(/feature-hunt/i);
    expect(fh).toBeInTheDocument();
    const desc = getByText(/feature Hunt is a.../i);
    expect(desc).toBeInTheDocument();
    const tag = getByText(/productivity/i);
    expect(tag).toBeInTheDocument();

    const popsort = getByTestId("home_sortpop");
    const timesort = getByTestId("home_sorttime");
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
