import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Bomb from "components/Bomb";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
  cleanup();
});

describe("testing bomb", () => {
  it("throwing error", () => {
    try {
      let { container, getByText } = render(<Bomb />);
      expect(container).toHaveTextContent("Something went wrong.");
    } catch (e) {
      expect.any(TypeError);
      expect(console.error).toHaveBeenCalledTimes(1);
    }
  });
});
