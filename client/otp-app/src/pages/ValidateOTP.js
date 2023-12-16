import React, { useContext } from "react";
import { Box, Button, Text } from "grommet";
import MyContext from "../context/MyContext";
import OTPInputGroup from "./../components/OTPInputGroup";

const ValidateOTP = () => {
  const { handlePostEmailRequest, handlePostVerifyOtpRequest, emailAddress } =
    useContext(MyContext);

  const handleClickResend = async () => {
    handlePostEmailRequest(emailAddress);
  };

  const handleVerifyOTP = async (otp) => {
    handlePostVerifyOtpRequest(otp);
  };

  return (
    <Box fill align="center" justify="center" pad="large" gap="medium">
      <Text size={"xlarge"} color="neutral-3">
        Enter verification code
      </Text>
      <Box width="medium" gap="medium" pad="medium">
        <OTPInputGroup handleVerifyOTP={handleVerifyOTP} />
      </Box>
      <Text color="neutral-3">Have you not received an OTP?</Text>
      <Button color="accent-3" label="Resend" onClick={handleClickResend} />
    </Box>
  );
};
export default ValidateOTP;
