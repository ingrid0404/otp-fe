import { Routes, Route, useNavigate } from "react-router-dom";
import MyContext from "./context/MyContext";
import GenerateOTP from "./pages/GenerateOTP";
import ValidateOTP from "./pages/ValidateOTP";
import { useState } from "react";
import { postEmail, postVerifyOtp } from "./utils/utils";
import { NotificationLayer } from "./components/Notification";
import "./style/index.scss";

function App() {
  const [emailAddress, setEmailAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);
  const [notificationType, setNotificationType] = useState();
  const [notificationMessage, setNotificationMessage] = useState();

  const handlers = (message) => {
    console.log(message);
  };

  const navigate = useNavigate();

  const navigateToEmail = () => {
    navigate("/");
  };
  const navigateToVerify = () => {
    navigate("/verify");
  };

  const handlePostEmailRequest = async (email) => {
    if (email) {
      try {
        const result = await postEmail(email);
        validateEmailResult(result);
      } catch (err) {
        handlers && handlers();
        setIsErrorPopupVisible(true);
        setNotificationMessage("");
        setNotificationType("error");
      }
    }
  };

  const handlePostVerifyOtpRequest = async (otp) => {
    if (emailAddress && otp) {
      try {
        const result = await postVerifyOtp(emailAddress, otp);
        validateVerifyResult(result);
      } catch (err) {
        handlers && handlers(err);
        setIsErrorPopupVisible(true);
        setNotificationType("error");
        setNotificationMessage(err);
      }
    }
  };

  const validateVerifyResult = (result) => {
    console.log(result);
    if (result.error) {
      handlers && handlers("error");
      setIsErrorPopupVisible(true);
      setNotificationType("error");
      setNotificationMessage(result.error);
    } else {
      setIsErrorPopupVisible(true);
      setNotificationType("success");
      setNotificationMessage("OTP validation is successful");
    }
  };

  const validateEmailResult = (result) => {
    if (result?.success) {
      setOtp(result.otp_id);
      navigateToVerify();
      setIsErrorPopupVisible(true);
      setNotificationType("success");
      setNotificationMessage("Successfully sent! Check your email.");
    } else {
      handlers && handlers("error");
      setIsErrorPopupVisible(true);
      setNotificationType("error");
    }
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <MyContext.Provider
      value={{
        navigateHome,
        navigateToEmail,
        navigateToVerify,
        emailAddress,
        setEmailAddress,
        handlers,
        otp,
        setOtp,
        handlePostEmailRequest,
        isErrorPopupVisible,
        setIsErrorPopupVisible,
        handlePostVerifyOtpRequest,
        notificationType,
        notificationMessage,
      }}
    >
      <Routes>
        <Route path="/" element={<GenerateOTP />} />
        <Route path="/verify" element={<ValidateOTP />} />
      </Routes>
      {<NotificationLayer />}
    </MyContext.Provider>
  );
}

export default App;
