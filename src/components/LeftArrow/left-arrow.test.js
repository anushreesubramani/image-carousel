import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import LeftArrow from "components/LeftArrow";

afterEach(cleanup);

describe("testing left arrorw", () => {
  it("rendering left arrow and click", () => {
    const handleClick = jest.fn();
    const { getByAltText, getByTestId, container } = render(
      <LeftArrow goToPrevSlide={handleClick} />
    );
    const arrowElement = getByTestId("leftclick");
    fireEvent.click(arrowElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(getByAltText("leftarrow").alt).toBe("leftarrow");
    expect(container).toMatchSnapshot();
  });
});
