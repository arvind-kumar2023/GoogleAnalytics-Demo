import { toast } from "react-toastify";

const invalidMessages = [
  "Missing Authentication",
  "Request failed with status code 401",
];

/**
 * Displays a success toast notification.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @returns {React.ReactText} - A unique identifier for the toast.
 */
export const successAlert = (message) => {

  return toast(message, {
    toastId: message,
    type: "success",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    style: {
      fontFamily: "inherit",
      fontSize: "15px",
      fontWeight: 500,
      marginBottom: "7px",
      display: "inlineBlock",
      color: "#344054",
    },
  });
};

/**
 * Displays an error toast notification.
 *
 * @param {string} message - The message to be displayed in the toast.
 * @returns {React.ReactText|void} - A unique identifier for the toast or void if the message is in the list of invalid messages.
 */
export const errorAlert = (message, capitalize = true) => {
  if (
    invalidMessages.some(
      (invalidMessage) =>
        invalidMessage.toLowerCase() === message?.trim().toLowerCase()
    )
  ) {
    return;
  }


  return toast(message, {
    toastId: message,
    type: "error",
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    style: {
      fontFamily: "inherit",
      fontSize: "15px",
      fontWeight: 500,
      marginBottom: "7px",
      display: "inlineBlock",
      color: "#344054",
    },
  });
};

/**
 * Displays an alert indicating that the feature is under development.
 */
export const underDevAlert = () => {
  errorAlert("Under Development");
};
