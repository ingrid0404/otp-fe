import React from "react";
import { render, screen } from "@testing-library/react";
import GenerateOTP from "../../pages/GenerateOTP";
import { BrowserRouter } from "react-router-dom";

describe("<GenerateOTP />", () => {
  it("renders correclty", () => {
    render(
      <BrowserRouter>
        <GenerateOTP />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Let's make sure it's you:/i)).toBeTruthy();
    expect(screen.getByText(/You will receive an OTP by email/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeTruthy();
  });
});
