import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Head from "@/app/head";

describe("Navbar", () => {
  it("Should render properly", () => {
    render(<Head />);

    const main = screen.getByRole("main");
    const headText = "Research Information";

    expect(main).toHaveTextContent(headText);
  });
});
