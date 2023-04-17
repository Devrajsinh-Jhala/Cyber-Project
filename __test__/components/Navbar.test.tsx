import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("Should render properly", () => {
    render(<Navbar />);

    const nav = screen.getByRole("navigation");
    const navText = "Posts";
    expect(nav).toHaveTextContent(navText);
  });

  it("Should render a list", () => {
    render(<Navbar />);
    const navList = screen.getByRole("list");
    expect(navList).toHaveTextContent("Posts");
  });
});
