export const validateStepTwo = (form) => {
  let isValid = true;

  let newErrors = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  if (form.email === "") {
    isValid = false;
    newErrors.firstName = "Please provide a valid email address";
  }

  if (form.phoneNumber.length !== 8) {
    isValid = false;
    newErrors.phoneNumber = "Please provide a valid phone number";
  }

  if (form.password.length < 8) {
    isValid = false;
    newErrors.password = "Password must be at least 8 digits";
  }

  if (form.confirmPassword !== form.password) {
    isValid = false;
    newErrors.password = "Password doesn't match";
  }

  return { isValid, newErrors };
};
