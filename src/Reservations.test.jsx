import {fireEvent, render, screen} from "@testing-library/react";
import Reservations from "./Reservations";

describe("Reservations", () => {
  test("Submission is disabled if not filled required fields", () => {
    const handleSubmit = jest.fn();
    render(<Reservations onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
  })
})