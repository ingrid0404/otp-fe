import React from "react";
import { render, screen } from "@testing-library/react";
import OTPInput from "../../components/OTPInput";

describe("<OTPInput />", () => {
  it("renders correclty", () => {
    render(<OTPInput id={"custom"} />);

    expect(screen.getByRole("textbox", { name: "" })).toBeTruthy();
  });
});
