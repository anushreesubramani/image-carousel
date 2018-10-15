import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { queryAllByTestId } from "dom-testing-library";
import axiosMock from "axios";
import config from "../../breakpoints.js";
import App from "../../App";

afterEach(cleanup);

test("number of images when it is bigger that desktop", () => {
  jest.spyOn(document, "querySelector").mockImplementation(query => {
    const element = Array.from(document.querySelectorAll(query)[0]);
    return query === ".App" ? { ...element, clientWidth: 1500 } : element;
  });
  const { container, debug } = render(<App />);
  const elements = queryAllByTestId(container, "slide");
  expect(elements).toHaveLength(5);
  expect(container).toMatchSnapshot();
});

test("number of images when it is desktop mode", () => {
  jest.spyOn(document, "querySelector").mockImplementation(query => {
    const element = Array.from(document.querySelectorAll(query)[0]);
    return query === ".App" ? { ...element, clientWidth: 800 } : element;
  });
  const { container, debug } = render(<App />);
  const elements = queryAllByTestId(container, "slide");
  expect(elements).toHaveLength(5);
  expect(container).toMatchSnapshot();
});

test("number of images when it is tab mode", () => {
  jest.spyOn(document, "querySelector").mockImplementation(query => {
    const element = Array.from(document.querySelectorAll(query)[0]);
    return query === ".App" ? { ...element, clientWidth: 600 } : element;
  });
  const { container, getByTestId } = render(<App />);
  const elements = queryAllByTestId(container, "slide");
  expect(elements).toHaveLength(2);
  expect(container).toMatchSnapshot();
});

test("number of images when it is mobile mode", () => {
  jest.spyOn(document, "querySelector").mockImplementation(query => {
    const element = Array.from(document.querySelectorAll(query)[0]);
    return query === ".App" ? { ...element, clientWidth: 400 } : element;
  });
  const { container, getByTestId } = render(<App />);
  const elements = queryAllByTestId(container, "slide");
  expect(elements).toHaveLength(1);
  expect(container).toMatchSnapshot();
});
