import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import RightArrow from "components/RightArrow";

afterEach(cleanup);

describe("testing left arrorw", () => {
  it("rendering right arrow and click", () => {
    const handleClick = jest.fn();
    const { getByAltText, getByTestId, container } = render(
      <RightArrow goToNextSlide={handleClick} />
    );
    const arrowElement = getByTestId("rightclick");
    fireEvent.click(arrowElement);
    fireEvent.click(arrowElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(getByAltText("rightarrow").alt).toBe("rightarrow");
    expect(container).toMatchSnapshot();
  });
});
