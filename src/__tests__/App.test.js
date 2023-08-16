import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders app components", () => {
  render(<App />);
  expect(screen.getByText("Sneakers World Shopping")).toBeInTheDocument();
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("product-list")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
