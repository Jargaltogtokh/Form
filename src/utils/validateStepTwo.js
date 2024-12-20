const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{8}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[._\-!@#$%^&*()`=]).+$/;

export const validateStepTwo = (form) => {
  let isValid = true;

  let newErrors = {
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  if (form.email.trim() === "") {
    isValid = false;
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(form.email)) {
    isValid = false;
    newErrors.email = "Please provide a valid email address";
  }

  if (!phoneRegex.test(form.phoneNumber)) {
    isValid = false;
    console.log(form.phoneNumber);
    newErrors.phoneNumber = "Please provide a valid 8-digit phone number";
  }

  if (form.password.length < 8) {
    isValid = false;
    newErrors.password = "Password must be at least 8 digits";
  }

  if (form.confirmPassword !== form.password) {
    isValid = false;
    newErrors.confirmPassword = "Passwords do not match";
  }
  if (!passwordRegex.test(form.password)) {
    isValid = false;
    console.log(form.password);
    newErrors.password =
      "Password must contain at least one upper case letter, lower case letter, one number and one special character";
  }

  return { isValid, newErrors };
};
