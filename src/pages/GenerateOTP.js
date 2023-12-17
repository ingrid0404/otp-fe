import { Box, MaskedInput, Button, Text } from "grommet";
import { MailOption } from "grommet-icons";
import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { validateEmail, emailMask } from "../utils/utils";

const GenerateOTP = () => {
  const [value, setValue] = useState("");
  const { handlePostEmailRequest, setEmailAddress } = useContext(MyContext);

  const handleClick = async () => {
    setEmailAddress(value);
    handlePostEmailRequest(value);
  };

  const isValidEmailAddress = validateEmail(value);

  return (
    <Box fill align="center" justify="start" pad="large" gap="medium">
      <Text size={"xlarge"} color="neutral-3">
        Let's make sure it's you:
      </Text>
      <Box width="medium" gap="medium">
        <MaskedInput
          icon={<MailOption />}
          focusIndicator={false}
          mask={emailMask}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Box align="center" pad="medium" gap="medium">
          <Text color="neutral-3">You will receive an OTP by email</Text>
          <Button
            id="submit"
            primary
            label="Submit"
            color="neutral-3"
            disabled={!isValidEmailAddress}
            onClick={isValidEmailAddress ? handleClick : null}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default GenerateOTP;
