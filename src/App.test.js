import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app components", () => {
  render(<App />);
  const title = screen.getByText("Sneakers World Shopping");
  expect(title).toBeInTheDocument();
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
  const productList = screen.getByTestId("product-list");
  expect(productList).toBeInTheDocument();
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});
