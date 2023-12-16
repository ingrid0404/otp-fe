import React from "react";
import { render, screen } from "@testing-library/react";
import ValidateOTP from "../../pages/ValidateOTP";
import { BrowserRouter } from "react-router-dom";

describe("<ValidateOTP />", () => {
  it("renders correclty", () => {
    render(
      <BrowserRouter>
        <ValidateOTP />
      </BrowserRouter>,
    );
    expect(screen.getByText(/Have you not received an OTP?/i)).toBeTruthy();
    expect(screen.getByText(/Enter verification code/i)).toBeTruthy();
    expect(screen.getByRole("button", { name: /Verify/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Resend/i })).toBeTruthy();
  });
});
