const server = "localhost";
const port = 5000;
const protocol = "http";
const api = "/api/v1";
const postEmailOtp = "/email/otp";
const verifyOtp = "/verify/otp";
const URL = protocol + "://" + server + ":" + port;

const requestOptionsPOST = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const postEmail = (email) => {
  const requestOptions = {
    ...requestOptionsPOST,
    body: JSON.stringify({ email: email }),
  };

  const urlToFetch = URL + api + postEmailOtp;
  return new Promise((resolve, reject) => {
    fetch(urlToFetch, requestOptions).then(
      (response) => {
        let result = response.json();
        resolve(result);
      },
      (error) => {
        reject(error);
      },
    );
  });
};

export const postVerifyOtp = (email, otp) => {
  const requestOptions = {
    ...requestOptionsPOST,
    body: JSON.stringify({ email: email, otp: otp }),
  };
  const urlToFetch = URL + api + verifyOtp;
  return new Promise((resolve, reject) => {
    fetch(urlToFetch, requestOptions).then(
      (response) => {
        let result = response.json();
        resolve(result);
      },
      (error) => {
        reject(error);
      },
    );
  });
};

export const validateEmail = (email) => {
  const validation = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  if (validation) {
    return true;
  } else {
    return false;
  }
};

export const emailMask = [
  {
    regexp: /^[\w\-_.]+$/,
    placeholder: "example",
  },
  { fixed: "@" },
  {
    regexp: /^[\w]+$/,
    placeholder: "my",
  },
  { fixed: "." },
  {
    regexp: /^[\w]+$/,
    placeholder: "com",
  },
];
