import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button.js"
test("Button component should render label correctly", () => {
  const { getByText } = render(<Button label="Click Me" />);
  const buttonElement = getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});
test("Button component should call onClick handler on button click", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button label="Click Me" onClick={onClickMock} />);
  const buttonElement = getByText("Click Me");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});