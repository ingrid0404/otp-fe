import React from "react";
import { render, screen } from "@testing-library/react";
import { NotificationLayer } from "../../components/Notification";
import MyContext from "../../context/MyContext";

describe("<Notification />", () => {
  it("renders correclty error", () => {
    const isErrorPopupVisible = true;
    const notificationType = "error";
    const notificationMessage = "Some error message";
    render(
      <MyContext.Provider
        value={{
          isErrorPopupVisible,
          notificationType,
          notificationMessage,
        }}
      >
        <NotificationLayer />
      </MyContext.Provider>,
    );

    expect(screen.getByText(notificationMessage)).toBeTruthy();
  });

  it("renders correclty success", () => {
    const isErrorPopupVisible = true;
    const notificationType = "success";
    const notificationMessage = "Some success message";
    render(
      <MyContext.Provider
        value={{
          isErrorPopupVisible,
          notificationType,
          notificationMessage,
        }}
      >
        <NotificationLayer />
      </MyContext.Provider>,
    );

    expect(screen.getByText(notificationMessage)).toBeTruthy();
  });
});
