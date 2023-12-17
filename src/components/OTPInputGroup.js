import React, { useState } from "react";
import { Box, Button } from "grommet";
import OTPInput from "./OTPInput";

export const OTPInputGroup = (props) => {
  const [, setOtp] = useState("");
  const { handleVerifyOTP } = props;

  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const handleInputChange = (inputId, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputId]: value,
    }));
  };

  const handleSubmit = () => {
    let concatenatedOTP = "";
    for (let value of Object.values(inputValues)) {
      concatenatedOTP += value;
    }
    setOtp && setOtp(concatenatedOTP);
    handleVerifyOTP && handleVerifyOTP(concatenatedOTP);
  };

  return (
    <Box gap="large">
      <Box
        id="OTPInputGroup"
        direction="row"
        justify="center"
        gap="small"
        className="digitGroup"
        data-autosubmit="true"
      >
        <OTPInput
          id="input1"
          value={inputValues.input1}
          onValueChange={handleInputChange}
          previousId={null}
          handleSubmit={handleSubmit}
          nextId="input2"
        />
        <span className="splitter">&ndash;</span>
        <OTPInput
          id="input2"
          value={inputValues.input2}
          onValueChange={handleInputChange}
          previousId="input1"
          handleSubmit={handleSubmit}
          nextId="input3"
        />
        <span className="splitter">&ndash;</span>
        <OTPInput
          id="input3"
          value={inputValues.input3}
          onValueChange={handleInputChange}
          previousId="input2"
          handleSubmit={handleSubmit}
          nextId="input4"
        />
        <span className="splitter">&ndash;</span>
        <OTPInput
          id="input4"
          value={inputValues.input4}
          onValueChange={handleInputChange}
          previousId="input3"
          handleSubmit={handleSubmit}
          nextId="input5"
        />
        <span className="splitter">&ndash;</span>
        <OTPInput
          id="input5"
          value={inputValues.input5}
          onValueChange={handleInputChange}
          previousId="input4"
          handleSubmit={handleSubmit}
          nextId="input6"
        />
      </Box>
      <Box className="btnGroup" onClick={handleSubmit}>
        <Button primary color="accent-3" label="Verify" />
      </Box>
    </Box>
  );
};

export default OTPInputGroup;
