import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Slide from "components/Slide";
const faker = require("faker");

afterEach(cleanup);

describe("testing the sldier component", () => {
  it("he props are being rendered properly", () => {
    const mockImage = {
      url: faker.image.imageUrl(),
      user: faker.name.firstName(),
      likes: 10
    };
    const { getByTestId, getByAltText, container } = render(
      <Slide image={mockImage} keyCode={1} />
    );
    const renderedImageSrc = getByAltText(mockImage.url).src;
    expect(getByTestId("likes")).toHaveTextContent(10);
    expect(getByTestId("image-by")).toHaveTextContent(`${mockImage.user}`);
    expect(renderedImageSrc).toBe(mockImage.url);
  });
});
