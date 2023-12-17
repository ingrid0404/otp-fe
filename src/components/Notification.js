import React, { useContext } from "react";
import { Box, Button, Text, Layer } from "grommet";
import { StatusCritical, FormClose } from "grommet-icons";
import MyContext from "../context/MyContext";

export const NotificationLayer = () => {
  const {
    isErrorPopupVisible,
    setIsErrorPopupVisible,
    notificationType,
    notificationMessage,
  } = useContext(MyContext);

  const onClose = () => setIsErrorPopupVisible(false);

  const background =
    notificationType === "error" ? "status-error" : "status-ok";

  const layerToDisplay = (
    <Layer
      position="bottom"
      modal={false}
      margin={{ vertical: "medium", horizontal: "small" }}
      onEsc={onClose}
      responsive={false}
      plain
    >
      <Box
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="medium"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        background={background}
      >
        <Box align="center" direction="row" gap="xsmall">
          <StatusCritical />
          <Text>{notificationMessage}</Text>
        </Box>
        <Button icon={<FormClose />} onClick={onClose} plain />
      </Box>
    </Layer>
  );

  return <>{isErrorPopupVisible && layerToDisplay}</>;
};
