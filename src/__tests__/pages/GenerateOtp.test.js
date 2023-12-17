/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import GenerateOTP from "../../pages/GenerateOTP";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';


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

  it("Add correct email", async () => {
    render(
      <BrowserRouter>
        <GenerateOTP />
      </BrowserRouter>,
    );

    expect(screen.getByRole("button", { name: /Submit/i })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: "" })).toBeTruthy();
    await waitFor(() => userEvent.type(screen.getByRole('textbox'), 'JavaScript@gmai.com'));
    expect(screen.getByRole("button", { name: /Submit/i })).toBeEnabled();
  });

  it("Add incorrect email", async () => {
    render(
      <BrowserRouter>
        <GenerateOTP />
      </BrowserRouter>,
    );

    expect(screen.getByRole("button", { name: /Submit/i })).toBeDisabled();
    expect(screen.getByRole('textbox', { name: "" })).toBeTruthy();
    await waitFor(() => userEvent.type(screen.getByRole('textbox'), 'JavaScript'));
    expect(screen.getByRole("button", { name: /Submit/i })).toBeDisabled();
  });
});
